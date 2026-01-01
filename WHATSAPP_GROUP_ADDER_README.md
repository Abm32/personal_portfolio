# WhatsApp Group Contact Adder

A Python script to automatically add contacts from an Excel file to a WhatsApp group.

## Features

- Reads contacts from Excel files (.xlsx, .xls)
- Automatically detects phone number columns
- Adds contacts to WhatsApp groups via WhatsApp Web
- Progress tracking and error handling
- Configurable delays between actions

## Prerequisites

1. **Python 3.7+** installed
2. **Google Chrome** browser installed
3. **ChromeDriver** - Download from [ChromeDriver Downloads](https://chromedriver.chromium.org/downloads)
   - Make sure the ChromeDriver version matches your Chrome browser version
   - Add ChromeDriver to your PATH or place it in the script directory

## Installation

1. Install required Python packages:
```bash
pip install -r whatsapp_requirements.txt
```

Or install individually:
```bash
pip install pandas openpyxl selenium
```

2. Download ChromeDriver:
   - Check your Chrome version: `chrome://version/`
   - Download matching ChromeDriver from https://chromedriver.chromium.org/downloads
   - Extract and add to PATH or place in script directory

## Excel File Format

Your Excel file should have a column with phone numbers. The script will try to auto-detect columns with names like:
- Phone
- Mobile
- Number
- Contact
- WhatsApp

**Phone Number Format:**
- Include country code (e.g., +91 for India, +1 for US)
- Example: +919876543210 or 919876543210
- The script will clean spaces, dashes, and parentheses automatically

**Example Excel Structure:**
```
| Name          | Phone          | Email              |
|---------------|----------------|--------------------|
| John Doe      | +919876543210  | john@example.com   |
| Jane Smith    | +919876543211  | jane@example.com   |
```

## Usage

### Basic Usage:
```bash
python whatsapp_group_adder.py contacts.xlsx
```

### With Group Name:
```bash
python whatsapp_group_adder.py contacts.xlsx "My Group Name"
```

### Step-by-Step Process:

1. **Prepare your Excel file** with phone numbers
2. **Run the script** with your Excel file
3. **Scan QR Code** - WhatsApp Web QR code will appear, scan it with your phone
4. **Enter Group Name** - If not provided as argument, you'll be prompted
5. **Wait** - The script will automatically add all contacts

## Important Notes

⚠️ **Limitations:**
- WhatsApp Web must remain open and active
- You must be an admin of the group to add members
- Contacts must have WhatsApp accounts
- WhatsApp may rate-limit if adding too many contacts quickly
- Some contacts may need to accept group invite first

⚠️ **Best Practices:**
- Test with a small group first (5-10 contacts)
- Use appropriate delays (2-3 seconds recommended)
- Don't close the browser window during execution
- Make sure you have a stable internet connection
- Be aware of WhatsApp's terms of service

## Troubleshooting

### ChromeDriver Issues:
```
Error: ChromeDriver not found
```
**Solution:** Download ChromeDriver and add to PATH or place in script directory

### Group Not Found:
```
Error finding group
```
**Solution:** Make sure the group name matches exactly as it appears in WhatsApp

### Contact Not Found:
```
Failed to add contact
```
**Solution:** 
- Verify phone number format includes country code
- Ensure contact has WhatsApp account
- Check if contact is already in the group

### QR Code Not Scanning:
- Make sure WhatsApp Web is not already logged in on another device
- Try refreshing the page
- Check internet connection

## Customization

You can modify the script to:
- Change delay between actions: `delay` parameter in `WhatsAppGroupAdder`
- Adjust wait times for elements
- Add custom phone number formatting
- Add logging to file

## Example Excel Files

Create an Excel file with one of these structures:

**Option 1 - Simple:**
```
Phone
+919876543210
+919876543211
```

**Option 2 - With Names:**
```
Name          | Phone
John Doe     | +919876543210
Jane Smith   | +919876543211
```

## Disclaimer

This script is for educational purposes. Use responsibly and in accordance with WhatsApp's Terms of Service. The author is not responsible for any misuse of this script.

## License

Free to use and modify as needed.

