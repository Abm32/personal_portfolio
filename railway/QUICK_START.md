# Quick Start - Railway Seat Number Extractor

## Your Files
- **Excel**: `whatsapp.xlsx` (69 participants)
- **PDFs**: 14 PDF files with coach-separated lists
- **Output**: `seat_numbers_output.csv`

## Steps to Run

### 1. Install Dependencies
```bash
cd railway
pip install -r railway_requirements.txt
```

Or:
```bash
pip install pandas openpyxl pdfplumber
```

### 2. Run the Script
```bash
python extract_seat_numbers.py
```

That's it! The script will:
- Read all 69 participants from `whatsapp.xlsx`
- Search through all 14 PDF files
- Extract seat numbers, coach, berth information
- Export to `seat_numbers_output.csv`

## Output

The CSV file will contain:
- Participant name
- Coach number (S1, S2, etc.)
- Seat number
- Berth type (if found)
- PNR (if found)
- Source PDF file
- Raw text line (for verification)

## Expected Output

```
============================================================
Railway Seat Number Extractor
============================================================

Found 69 participants in Excel file
Sample names: ['Arundhathi Krishna', 'Gayathri  K S', ...]

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

## Troubleshooting

**If names aren't found:**
- Check if names in Excel match exactly with PDFs
- PDFs might have extra spaces or formatting
- Check the `raw_line` column in output CSV

**If seat numbers aren't extracted:**
- The PDF format might be different
- Check `raw_line` column to see what was found
- You may need to manually verify some entries

## Next Steps

After running the script:
1. Open `seat_numbers_output.csv` in Excel
2. Review the results
3. Manually verify any missing or incorrect entries
4. Use the CSV for further processing or reporting

Good luck! 🚂

