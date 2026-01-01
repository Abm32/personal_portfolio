#!/usr/bin/env python3
"""
Railway Seat Number Extractor
Reads participant names from Excel and extracts their seat numbers from PDF files.
"""

import pandas as pd
import pdfplumber
import os
import re
from pathlib import Path
from typing import Dict, List, Tuple, Optional
import sys

class SeatNumberExtractor:
    def __init__(self, excel_file: str, pdf_folder: str, output_csv: str = "seat_numbers_output.csv"):
        """
        Initialize the Seat Number Extractor
        
        Args:
            excel_file: Path to Excel file with participant names
            pdf_folder: Folder containing PDF files
            output_csv: Output CSV file name
        """
        self.excel_file = excel_file
        self.pdf_folder = pdf_folder
        self.output_csv = output_csv
        self.participants = []  # List of dicts with name and email
        self.seat_data = []
        
    def read_participants(self):
        """Read participant names and emails from Excel file"""
        try:
            df = pd.read_excel(self.excel_file)
            
            # Use 'name' column (or 'name.1' if 'name' doesn't exist)
            name_column = 'name' if 'name' in df.columns else 'name.1'
            
            if name_column not in df.columns:
                print("Error: Could not find name column in Excel file")
                print(f"Available columns: {list(df.columns)}")
                return False
            
            # Check for email column
            email_column = 'email' if 'email' in df.columns else None
            
            if not email_column:
                print("Warning: Email column not found. Will use name matching only.")
            
            # Create list of participant dicts with name and email
            self.participants = []
            for idx, row in df.iterrows():
                participant = {
                    'name': str(row[name_column]).strip() if pd.notna(row[name_column]) else '',
                    'email': str(row[email_column]).strip().lower() if email_column and pd.notna(row[email_column]) else ''
                }
                if participant['name']:  # Only add if name exists
                    self.participants.append(participant)
            
            print(f"\nFound {len(self.participants)} participants in Excel file")
            print(f"Sample participants: {self.participants[:3]}")
            
            return True
            
        except Exception as e:
            print(f"Error reading Excel file: {e}")
            return False
    
    def normalize_name(self, name: str) -> str:
        """Normalize name for matching (remove extra spaces, convert to lowercase)"""
        if pd.isna(name):
            return ""
        name = str(name).strip()
        # Remove extra spaces
        name = re.sub(r'\s+', ' ', name)
        return name.lower()
    
    def normalize_email(self, email: str) -> str:
        """Normalize email for matching (lowercase, trim)"""
        if pd.isna(email):
            return ""
        return str(email).strip().lower()
    
    def extract_text_from_pdf(self, pdf_path: str) -> Tuple[str, List]:
        """Extract all text and tables from a PDF file"""
        try:
            full_text = ""
            all_tables = []
            with pdfplumber.open(pdf_path) as pdf:
                for page in pdf.pages:
                    # Extract text
                    text = page.extract_text()
                    if text:
                        full_text += text + "\n"
                    
                    # Extract tables (if any)
                    tables = page.extract_tables()
                    if tables:
                        all_tables.extend(tables)
            
            return full_text, all_tables
        except Exception as e:
            print(f"Error reading PDF {pdf_path}: {e}")
            return "", []
    
    def find_seat_info_in_table(self, tables: List, participant: Dict) -> Optional[Dict]:
        """Find seat information in PDF tables using email or name"""
        normalized_search_name = self.normalize_name(participant['name'])
        normalized_search_email = self.normalize_email(participant['email'])
        
        for table in tables:
            if not table:
                continue
            
            # Search through table rows
            for row in table:
                if not row:
                    continue
                
                # Join row cells and normalize
                row_text = ' '.join([str(cell) if cell else '' for cell in row])
                normalized_row = self.normalize_name(row_text)
                normalized_row_email = self.normalize_email(row_text)
                
                # Check if email or name is in this row (prefer email)
                match_found = False
                if normalized_search_email and normalized_search_email in normalized_row_email:
                    match_found = True
                elif normalized_search_name in normalized_row or normalized_row in normalized_search_name:
                    match_found = True
                
                if match_found:
                    seat_info = {
                        'name': participant['name'],
                        'email': participant['email'],
                        'coach': '',
                        'seat_number': '',
                        'berth': '',
                        'pnr': '',
                        'raw_line': row_text.strip()
                    }
                    
                    # Try to extract information from table cells
                    for cell in row:
                        if not cell:
                            continue
                        cell_str = str(cell).strip()
                        
                        # Look for coach and seat in format like "S11-28" or "S11 28"
                        coach_seat_match = re.search(r'[Ss](\d+)[\s-]+(\d+)', cell_str)
                        if coach_seat_match:
                            if not seat_info['coach']:
                                seat_info['coach'] = f"S{coach_seat_match.group(1)}"
                            if not seat_info['seat_number']:
                                seat_info['seat_number'] = coach_seat_match.group(2)
                        else:
                            # Look for coach (S1, S2, etc.)
                            coach_match = re.search(r'[Ss](\d+)', cell_str)
                            if coach_match and not seat_info['coach']:
                                seat_info['coach'] = f"S{coach_match.group(1)}"
                            
                            # Look for seat number (2-3 digits)
                            seat_match = re.search(r'\b(\d{2,3})\b', cell_str)
                            if seat_match and not seat_info['seat_number']:
                                seat_info['seat_number'] = seat_match.group(1)
                        
                        # Look for berth
                        berth_match = re.search(r'\b(LB|MB|UB|SL|SU|LL|ML|UL)\b', cell_str, re.IGNORECASE)
                        if berth_match and not seat_info['berth']:
                            seat_info['berth'] = berth_match.group(1).upper()
                        
                        # Look for PNR
                        pnr_match = re.search(r'(\d{10})', cell_str)
                        if pnr_match and not seat_info['pnr']:
                            seat_info['pnr'] = pnr_match.group(1)
                    
                    return seat_info
        
        return None
    
    def find_seat_info(self, text: str, participant: Dict, tables: List = None) -> Optional[Dict]:
        """
        Find seat information for a participant in PDF text using email or name
        
        Returns dict with: coach, seat_number, berth, etc.
        """
        # First try tables if available
        if tables:
            table_result = self.find_seat_info_in_table(tables, participant)
            if table_result:
                return table_result
        
        normalized_search_name = self.normalize_name(participant['name'])
        normalized_search_email = self.normalize_email(participant['email'])
        
        # Try to find the name in the text (case-insensitive)
        lines = text.split('\n')
        
        for i, line in enumerate(lines):
            normalized_line = self.normalize_name(line)
            normalized_line_email = self.normalize_email(line)
            
            # Check if email or name appears in this line (prefer email matching)
            match_found = False
            if normalized_search_email and normalized_search_email in normalized_line_email:
                match_found = True
            elif normalized_search_name in normalized_line or normalized_line in normalized_search_name:
                match_found = True
            
            if match_found:
                # Try to extract seat information from nearby lines
                seat_info = {
                    'name': participant['name'],
                    'email': participant['email'],
                    'coach': '',
                    'seat_number': '',
                    'berth': '',
                    'pnr': '',
                    'raw_line': line.strip()
                }
                
                # Search in current line and next few lines
                search_lines = lines[max(0, i-2):i+5]
                search_text = ' '.join(search_lines)
                
                # Try to find coach and seat number in format like "S11-28" or "S11 28" or "S11/28"
                # This is the most common format in railway PDFs
                coach_seat_patterns = [
                    r'[Ss](\d+)[\s\-/]+(\d+)',  # S11-28, S11 28, S11/28
                    r'[Ss](\d+)-(\d+)',         # S11-28
                ]
                
                coach_seat_found = False
                for pattern in coach_seat_patterns:
                    coach_seat_match = re.search(pattern, search_text)
                    if coach_seat_match:
                        seat_info['coach'] = f"S{coach_seat_match.group(1)}"
                        seat_info['seat_number'] = coach_seat_match.group(2)
                        coach_seat_found = True
                        break
                
                if not coach_seat_found:
                    # Try to find coach number separately (S1, S2, etc.)
                    coach_match = re.search(r'[Ss](\d+)', search_text)
                    if coach_match:
                        seat_info['coach'] = f"S{coach_match.group(1)}"
                    
                    # Try to find seat number patterns
                    seat_patterns = [
                        r'seat\s*:?\s*(\d+)',
                        r'seat\s*no\.?\s*:?\s*(\d+)',
                        r'seat\s*number\s*:?\s*(\d+)',
                        r'\b(\d{2,3})\b',  # Generic 2-3 digit number (likely seat)
                    ]
                    
                    for pattern in seat_patterns:
                        match = re.search(pattern, search_text, re.IGNORECASE)
                        if match:
                            seat_info['seat_number'] = match.group(1)
                            break
                
                # Try to find berth (LB, MB, UB, SL, etc.)
                berth_match = re.search(r'\b(LB|MB|UB|SL|SU|LL|ML|UL)\b', search_text, re.IGNORECASE)
                if berth_match:
                    seat_info['berth'] = berth_match.group(1).upper()
                
                # Try to find PNR
                pnr_match = re.search(r'PNR[:\s]*(\d+)', search_text, re.IGNORECASE)
                if pnr_match:
                    seat_info['pnr'] = pnr_match.group(1)
                
                return seat_info
        
        return None
    
    def process_pdfs(self):
        """Process all PDF files and extract seat information"""
        pdf_files = list(Path(self.pdf_folder).glob("*.pdf"))
        
        if not pdf_files:
            print(f"No PDF files found in {self.pdf_folder}")
            return False
        
        print(f"\nFound {len(pdf_files)} PDF files")
        
        # Extract text and tables from all PDFs
        pdf_data = {}
        for pdf_file in pdf_files:
            print(f"Reading {pdf_file.name}...")
            text, tables = self.extract_text_from_pdf(str(pdf_file))
            pdf_data[pdf_file.name] = {'text': text, 'tables': tables}
        
        # Find seat information for each participant
        print(f"\nSearching for seat information...")
        found_count = 0
        
        for participant in self.participants:
            seat_info = None
            found_in_pdf = None
            
            # Search in all PDFs
            for pdf_name, data in pdf_data.items():
                seat_info = self.find_seat_info(data['text'], participant, data['tables'])
                if seat_info:
                    seat_info['source_pdf'] = pdf_name
                    found_in_pdf = pdf_name
                    found_count += 1
                    break
            
            if seat_info:
                self.seat_data.append(seat_info)
                match_method = "email" if participant['email'] and participant['email'] in seat_info.get('raw_line', '').lower() else "name"
                print(f"✓ Found ({match_method}): {participant['name']} - Coach: {seat_info.get('coach', 'N/A')}, Seat: {seat_info.get('seat_number', 'N/A')}")
            else:
                # Add entry even if not found
                self.seat_data.append({
                    'name': participant['name'],
                    'email': participant['email'],
                    'coach': '',
                    'seat_number': '',
                    'berth': '',
                    'pnr': '',
                    'source_pdf': '',
                    'raw_line': 'Not found'
                })
                print(f"✗ Not found: {participant['name']}")
        
        print(f"\n{'='*60}")
        print(f"Summary: Found {found_count} out of {len(self.participants)} participants")
        print(f"{'='*60}")
        
        return True
    
    def export_to_csv(self):
        """Export seat data to CSV file"""
        try:
            df = pd.DataFrame(self.seat_data)
            
            # Reorder columns for better readability
            column_order = ['name', 'email', 'coach', 'seat_number', 'berth', 'pnr', 'source_pdf', 'raw_line']
            df = df[[col for col in column_order if col in df.columns]]
            
            # Save to CSV
            output_path = os.path.join(self.pdf_folder, self.output_csv)
            df.to_csv(output_path, index=False)
            
            print(f"\n✓ Exported results to: {output_path}")
            print(f"Total records: {len(df)}")
            
            return True
            
        except Exception as e:
            print(f"Error exporting to CSV: {e}")
            return False
    
    def run(self):
        """Main execution method"""
        print("="*60)
        print("Railway Seat Number Extractor")
        print("="*60)
        
        # Read participants
        if not self.read_participants():
            return
        
        # Process PDFs
        if not self.process_pdfs():
            return
        
        # Export to CSV
        if not self.export_to_csv():
            return
        
        print("\n✓ Process completed successfully!")


def main():
    """Main function"""
    # Default paths
    excel_file = "whatsapp.xlsx"
    pdf_folder = "."  # Current directory
    output_csv = "seat_numbers_output.csv"
    
    # Allow command line arguments
    if len(sys.argv) > 1:
        excel_file = sys.argv[1]
    if len(sys.argv) > 2:
        pdf_folder = sys.argv[2]
    if len(sys.argv) > 3:
        output_csv = sys.argv[3]
    
    extractor = SeatNumberExtractor(excel_file, pdf_folder, output_csv)
    extractor.run()


if __name__ == "__main__":
    main()

