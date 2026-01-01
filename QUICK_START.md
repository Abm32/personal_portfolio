# Quick Start Guide - WhatsApp Group Adder

## Your Excel File
- **File**: `whatsapp.xlsx`
- **Column**: `phone_number`
- **Total Contacts**: 69

## Steps to Run

### 1. Install Dependencies
```bash
pip install -r whatsapp_requirements.txt
```

### 2. Download ChromeDriver
- Check your Chrome version: Open Chrome → Settings → About Chrome
- Download matching ChromeDriver from: https://chromedriver.chromium.org/downloads
- Extract and add to PATH or place in script directory

### 3. Run the Script

**Option A - With group name:**
```bash
python whatsapp_group_adder.py whatsapp.xlsx "Your Group Name"
```

**Option B - Without group name (will prompt):**
```bash
python whatsapp_group_adder.py whatsapp.xlsx
```

### 4. Follow the Prompts
1. Script will detect `phone_number` column automatically
2. Chrome browser will open WhatsApp Web
3. **Scan QR code** with your phone
4. Enter group name (if not provided)
5. Script will add all 69 contacts automatically

## Important Notes

⚠️ **Before Running:**
- Make sure you're an **admin** of the WhatsApp group
- All contacts must have WhatsApp accounts
- Test with a small group first (5-10 contacts)
- Keep WhatsApp Web open during execution

⚠️ **Phone Number Format:**
- Your numbers are in format: `919645896675` (without +)
- WhatsApp Web should handle these automatically
- If issues occur, numbers may need `+91` prefix

## Troubleshooting

**If contacts aren't found:**
- Make sure phone numbers are saved in your phone contacts
- Or manually add them to WhatsApp contacts first

**If group not found:**
- Make sure group name matches exactly (case-sensitive)
- Try opening the group in WhatsApp Web manually first

**If ChromeDriver error:**
- Download correct version matching your Chrome browser
- Add to PATH or place in same directory as script

## Expected Output

```
==================================================
WhatsApp Group Contact Adder
==================================================

Available columns in Excel: ['name', 'email', 'phone_number', 'name.1', 'registration_status']
Found 'phone_number' column

Found 69 contacts
Sample contacts: ['919645896675', '919188835621', '919207884435', '918606487069', '919544451720']

Using column: 'phone_number'
...
```

## Progress Tracking

The script will show:
- Current contact being added (e.g., [1/69])
- Success/failure for each contact
- Final summary with counts

Good luck! 🚀

