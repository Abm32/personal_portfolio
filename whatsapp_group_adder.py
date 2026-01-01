#!/usr/bin/env python3
"""
WhatsApp Group Contact Adder
Reads contacts from an Excel file and adds them to a WhatsApp group.
"""

import pandas as pd
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import sys
import os

class WhatsAppGroupAdder:
    def __init__(self, excel_file, group_name=None, delay=2):
        """
        Initialize the WhatsApp Group Adder
        
        Args:
            excel_file: Path to Excel file with contacts
            group_name: Name of the WhatsApp group (optional, will prompt if not provided)
            delay: Delay between actions in seconds
        """
        self.excel_file = excel_file
        self.group_name = group_name
        self.delay = delay
        self.driver = None
        self.contacts = []
        
    def read_excel(self):
        """Read contacts from Excel file"""
        try:
            # Read Excel file
            df = pd.read_excel(self.excel_file)
            
            # Display available columns
            print(f"\nAvailable columns in Excel: {list(df.columns)}")
            
            # Try to find phone number column (prioritize 'phone_number')
            phone_column = None
            
            # First, check for exact 'phone_number' column
            if 'phone_number' in df.columns:
                phone_column = 'phone_number'
                print(f"Found 'phone_number' column")
            else:
                # Try to find phone number column (common variations)
                for col in df.columns:
                    col_lower = str(col).lower()
                    if any(keyword in col_lower for keyword in ['phone', 'mobile', 'number', 'contact', 'whatsapp']):
                        phone_column = col
                        break
            
            if phone_column is None:
                print("\nPlease select the column containing phone numbers:")
                for i, col in enumerate(df.columns):
                    print(f"{i+1}. {col}")
                choice = int(input("Enter column number: ")) - 1
                phone_column = df.columns[choice]
            
            # Extract phone numbers
            self.contacts = df[phone_column].dropna().tolist()
            
            # Clean phone numbers (remove spaces, dashes, etc.)
            self.contacts = [str(phone).replace(' ', '').replace('-', '').replace('(', '').replace(')', '').replace('+', '') 
                           for phone in self.contacts]
            
            # Filter out empty strings
            self.contacts = [phone for phone in self.contacts if phone and phone.strip()]
            
            print(f"\nFound {len(self.contacts)} contacts")
            print(f"Sample contacts: {self.contacts[:5]}")
            print(f"\nUsing column: '{phone_column}'")
            
            return True
            
        except Exception as e:
            print(f"Error reading Excel file: {e}")
            return False
    
    def setup_driver(self):
        """Setup Chrome WebDriver"""
        chrome_options = Options()
        # Uncomment the next line if you want to run in headless mode
        # chrome_options.add_argument("--headless")
        chrome_options.add_argument("--user-data-dir=./chrome_profile")
        chrome_options.add_argument("--disable-blink-features=AutomationControlled")
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option('useAutomationExtension', False)
        
        try:
            self.driver = webdriver.Chrome(options=chrome_options)
            self.driver.maximize_window()
            return True
        except Exception as e:
            print(f"Error setting up Chrome driver: {e}")
            print("Make sure ChromeDriver is installed and in your PATH")
            return False
    
    def open_whatsapp_web(self):
        """Open WhatsApp Web"""
        print("\nOpening WhatsApp Web...")
        self.driver.get("https://web.whatsapp.com")
        print("Please scan the QR code with your phone to log in.")
        input("Press Enter after you've scanned the QR code and WhatsApp Web is loaded...")
    
    def find_group(self):
        """Find and open the WhatsApp group"""
        if not self.group_name:
            self.group_name = input("\nEnter the exact name of the WhatsApp group: ")
        
        print(f"\nSearching for group: {self.group_name}")
        
        # Click on search box
        search_box = WebDriverWait(self.driver, 20).until(
            EC.presence_of_element_located((By.XPATH, "//div[@contenteditable='true'][@data-tab='3']"))
        )
        search_box.click()
        time.sleep(1)
        
        # Type group name
        search_box.send_keys(self.group_name)
        time.sleep(2)
        
        # Click on the group from search results
        try:
            group_xpath = f"//span[@title='{self.group_name}']"
            group = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, group_xpath))
            )
            group.click()
            time.sleep(2)
            print(f"Opened group: {self.group_name}")
            return True
        except Exception as e:
            print(f"Error finding group: {e}")
            print("Make sure the group name is exactly as it appears in WhatsApp")
            return False
    
    def open_group_info(self):
        """Open group info/participants section"""
        print("\nOpening group info...")
        
        # Click on group header to open info
        try:
            header = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "//header[@data-testid='conversation-header']"))
            )
            header.click()
            time.sleep(2)
            
            # Click on participants section
            participants_button = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "//div[contains(text(), 'participants') or contains(text(), 'Participants')]"))
            )
            participants_button.click()
            time.sleep(2)
            
            return True
        except Exception as e:
            print(f"Error opening group info: {e}")
            return False
    
    def add_contact(self, phone_number):
        """Add a single contact to the group"""
        try:
            # Click on "Add participant" button
            add_button = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "//div[@role='button' and contains(@aria-label, 'Add')]"))
            )
            add_button.click()
            time.sleep(1)
            
            # Find search box for adding contacts
            search_input = WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.XPATH, "//div[@contenteditable='true'][@data-tab='10']"))
            )
            search_input.click()
            time.sleep(0.5)
            
            # Enter phone number
            search_input.send_keys(phone_number)
            time.sleep(2)
            
            # Select the contact from dropdown
            contact_xpath = f"//span[contains(@title, '{phone_number}')]"
            contact = WebDriverWait(self.driver, 5).until(
                EC.element_to_be_clickable((By.XPATH, contact_xpath))
            )
            contact.click()
            time.sleep(1)
            
            # Click checkmark/Add button
            add_confirm = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "//span[@data-icon='checkmark-medium']"))
            )
            add_confirm.click()
            time.sleep(2)
            
            return True
            
        except Exception as e:
            print(f"Error adding contact {phone_number}: {e}")
            return False
    
    def add_all_contacts(self):
        """Add all contacts from the list"""
        if not self.open_group_info():
            return False
        
        print(f"\nStarting to add {len(self.contacts)} contacts...")
        successful = 0
        failed = 0
        
        for i, phone in enumerate(self.contacts, 1):
            print(f"\n[{i}/{len(self.contacts)}] Adding contact: {phone}")
            
            if self.add_contact(phone):
                successful += 1
                print(f"✓ Successfully added: {phone}")
            else:
                failed += 1
                print(f"✗ Failed to add: {phone}")
            
            # Delay between additions
            time.sleep(self.delay)
        
        print(f"\n{'='*50}")
        print(f"Summary:")
        print(f"Successfully added: {successful}")
        print(f"Failed: {failed}")
        print(f"{'='*50}")
    
    def run(self):
        """Main execution method"""
        print("="*50)
        print("WhatsApp Group Contact Adder")
        print("="*50)
        
        # Read Excel file
        if not self.read_excel():
            return
        
        # Setup driver
        if not self.setup_driver():
            return
        
        try:
            # Open WhatsApp Web
            self.open_whatsapp_web()
            
            # Find and open group
            if not self.find_group():
                return
            
            # Add all contacts
            self.add_all_contacts()
            
        except KeyboardInterrupt:
            print("\n\nProcess interrupted by user")
        except Exception as e:
            print(f"\nError: {e}")
        finally:
            input("\nPress Enter to close the browser...")
            if self.driver:
                self.driver.quit()


def main():
    """Main function"""
    if len(sys.argv) < 2:
        print("Usage: python whatsapp_group_adder.py <excel_file> [group_name]")
        print("\nExample: python whatsapp_group_adder.py contacts.xlsx 'My Group'")
        sys.exit(1)
    
    excel_file = sys.argv[1]
    group_name = sys.argv[2] if len(sys.argv) > 2 else None
    
    if not os.path.exists(excel_file):
        print(f"Error: Excel file '{excel_file}' not found")
        sys.exit(1)
    
    adder = WhatsAppGroupAdder(excel_file, group_name)
    adder.run()


if __name__ == "__main__":
    main()

