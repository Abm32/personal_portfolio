# Railway Seat Number Extractor

A Python script to extract seat numbers from railway PDF files and match them with participants from an Excel sheet.

## Features

- Reads participant names from Excel file
- Scans all PDF files in the folder
- Extracts seat information (coach, seat number, berth, PNR)
- Matches participants with their seat details
- Exports results to CSV file

## Installation

1. **Install dependencies:**
```bash
pip install -r railway_requirements.txt
```

Or install individually:
```bash
pip install pandas openpyxl pdfplumber
```

## Usage

### Basic Usage (from railway folder):
```bash
cd railway
python extract_seat_numbers.py
```

This will:
- Read `whatsapp.xlsx` from current directory
- Process all PDF files in current directory
- Export to `seat_numbers_output.csv`

### Custom Paths:
```bash
python extract_seat_numbers.py whatsapp.xlsx . output.csv
```

Arguments:
1. Excel file path (default: `whatsapp.xlsx`)
2. PDF folder path (default: current directory)
3. Output CSV file name (default: `seat_numbers_output.csv`)

## Excel File Format

Your Excel file should have a column named `name` (or `name.1`) with participant names.

Example:
```
| name                | email              | phone_number    |
|---------------------|-------------------|----------------|
| Arundhathi Krishna  | a@example.com     | 919645896675   |
| Gayathri  K S       | g@example.com     | 919188835621   |
```

## Output CSV Format

The script generates a CSV with the following columns:

- **name**: Participant name
- **coach**: Coach number (e.g., S1, S2, S3)
- **seat_number**: Seat/berth number
- **berth**: Berth type (LB, MB, UB, SL, etc.)
- **pnr**: PNR number (if found)
- **source_pdf**: PDF file where the information was found
- **raw_line**: Raw text line from PDF (for verification)

## How It Works

1. **Reads Excel file** - Extracts participant names
2. **Processes PDFs** - Extracts text from all PDF files
3. **Searches for names** - Matches participant names in PDF text
4. **Extracts seat info** - Finds seat numbers, coach, berth from nearby text
5. **Exports to CSV** - Creates a CSV file with all results

## Notes

- The script performs case-insensitive name matching
- It searches for seat numbers near the participant's name in the PDF
- If a participant is not found, they'll still appear in the CSV with empty fields
- The script handles multiple PDF files and searches through all of them

## Troubleshooting

### Name Not Found:
- Check if the name in Excel exactly matches the name in PDF
- PDFs might have formatting differences (extra spaces, special characters)
- Check the `raw_line` column in output to see what was found

### Seat Number Not Extracted:
- PDF format might be different than expected
- Check the `raw_line` column to see the actual text
- You may need to adjust the regex patterns in the script

### PDF Reading Error:
- Make sure PDFs are not password protected
- Ensure PDFs are not corrupted
- Try opening PDFs manually to verify they're readable

## Example Output

```
============================================================
Railway Seat Number Extractor
============================================================

Found 69 participants in Excel file
Sample names: ['Arundhathi Krishna', 'Gayathri  K S', 'Mohammed Zidan']

Found 14 PDF files
Reading Coach Separated List - S1.pdf...
Reading Coach Separated List - S2.pdf...
...

Searching for seat information...
✓ Found: Arundhathi Krishna - Coach: S1, Seat: 45
✓ Found: Gayathri  K S - Coach: S2, Seat: 12
...

============================================================
Summary: Found 65 out of 69 participants
============================================================

✓ Exported results to: seat_numbers_output.csv
Total records: 69

✓ Process completed successfully!
```

## License

Free to use and modify as needed.

