# 🚀 CBTF Exchange - Deployment Guide

Complete guide for deploying CBTF Exchange login portal to various hosting platforms.

## 📋 Prerequisites

Before deploying, ensure:
- All files are in the CBTF folder
- Logo file exists: `assets/images/cbtf-logo.png`
- API endpoint is configured in `script.js`
- No console errors in local testing

## 🌐 Deployment Options

### Option 1: Vercel (Recommended for Beginners)

**Step 1: Create Vercel Account**
- Go to [vercel.com](https://vercel.com)
- Click "Sign Up"
- Use GitHub, GitLab, or Bitbucket account

**Step 2: Deploy Project**
- Click "Add New..." → "Project"
- Import from Git repository OR
- Click "Deploy" to upload folder directly

**Step 3: Configure**
- Project name: `cbtf-exchange`
- Framework preset: "Other"
- Build command: (leave empty)
- Output directory: (leave empty)

**Step 4: Deploy**
- Click "Deploy"
- Wait for deployment to complete
- Access via: `https://cbtf-exchange.vercel.app`

**Updates:**
```bash
git push origin main  # If using Git
# OR
# Re-upload folder via Vercel dashboard
```

---

### Option 2: Netlify (Recommended for Flexibility)

**Step 1: Create Netlify Account**
- Go to [netlify.com](https://netlify.com)
- Click "Sign Up"
- Use GitHub, GitLab, or Bitbucket

**Step 2: Deploy via Drag & Drop (Easiest)**
- Go to [app.netlify.com](https://app.netlify.com)
- Drag and drop the CBTF folder into the deploy area
- Done! Site is live instantly

**Step 3: Custom Domain**
- Go to "Site Settings"
- Click "Change Site Name"
- Set your domain: `cbtf-exchange`
- Access via: `https://cbtf-exchange.netlify.app`

**Step 4: Connect Git**
- Go to "Deploys"
- Click "Connect to Git"
- Select repository
- Set build settings (leave empty)
- Enable automatic deployments

**Updates via Git:**
```bash
git push origin main
# Netlify automatically redeploys
```

---

### Option 3: GitHub Pages (Free & Simple)

**Step 1: Create GitHub Repository**
```bash
# Create repo named: CBTF (or cbtf-exchange)
# Clone it locally
git clone https://github.com/YOUR_USERNAME/CBTF.git
cd CBTF
```

**Step 2: Add Project Files**
```bash
# Copy all files from CBTF folder
cp -r CBTF/* .

# Commit and push
git add .
git commit -m "Initial commit: CBTF Exchange login portal"
git push origin main
```

**Step 3: Enable GitHub Pages**
- Go to repository "Settings"
- Scroll to "Pages" section
- Source: Select "main" branch
- Click "Save"

**Step 4: Access Site**
- Your site is now live at: `https://YOUR_USERNAME.github.io/CBTF`
- It takes a few minutes to build

**Updates:**
```bash
# Make changes, commit, and push
git add .
git commit -m "Update: [description]"
git push origin main
```

---

### Option 4: Firebase Hosting

**Step 1: Create Firebase Project**
- Go to [firebase.google.com](https://firebase.google.com)
- Click "Go to Console"
- Create new project
- Name: "CBTF Exchange"

**Step 2: Install Firebase CLI**
```bash
npm install -g firebase-tools
```

**Step 3: Initialize Project**
```bash
cd CBTF
firebase login
firebase init hosting
```

**Step 4: Configure Firebase**
- Select your project
- Public directory: `.` (current)
- Configure single-page app: `Yes`
- Delete existing index.html: `No`

**Step 5: Deploy**
```bash
firebase deploy
```

**Access:** Check console for your hosting URL

---

### Option 5: Traditional Web Hosting (FTP)

**If using shared hosting or VPS:**

**Step 1: Upload Files**
- Use FTP client (FileZilla, WinSCP)
- Connect to your hosting server
- Upload entire CBTF folder to `public_html` or `www` directory

**Step 2: Create .htaccess** (for Apache servers)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^ index.html [QSA,L]
</IfModule>
```

**Step 3: Access Site**
- `https://yourdomain.com/CBTF`

**Updates:** Re-upload modified files via FTP

---

## ✅ Post-Deployment Checklist

After deploying to any platform:

- [ ] **Test Login Form**
  - Enter credentials and click "Login"
  - Check if alert appears
  - Verify error message displays

- [ ] **Test Password Toggle**
  - Click eye icon in password field
  - Verify password visibility toggles

- [ ] **Test Responsiveness**
  - Open on mobile (375px width)
  - Test on tablet (768px width)
  - Check desktop view (1024px)

- [ ] **Test Links**
  - Click "Forgot Password?" link
  - Click WhatsApp button
  - Verify chat widget works

- [ ] **Check Assets**
  - Logo loads correctly
  - Icons display properly
  - No broken images

- [ ] **Test API Integration**
  - Open DevTools (F12)
  - Go to "Network" tab
  - Submit form
  - Verify API request succeeds (200 status)

- [ ] **Check Performance**
  - Page loads in <2 seconds
  - No console errors
  - Smooth animations

- [ ] **Verify Security**
  - HTTPS/SSL enabled
  - No sensitive data in console logs
  - API calls are secure

---

## 🔄 Continuous Updates

### Via Git (Recommended)

```bash
# Make changes locally
# Commit changes
git add .
git commit -m "Update: [description]"
git push origin main

# Automatic redeploy on Vercel/Netlify
```

### Via Dashboard

**Vercel:**
1. Go to your project dashboard
2. Click "Deploy" or "Redeploy"

**Netlify:**
1. Go to your site dashboard
2. Click "Trigger deploy"

---

## 🆘 Troubleshooting

### "Page not found" or 404 error

**Solution:**
- Ensure `index.html` is in root directory
- Check `vercel.json` or `netlify.toml` routing configuration
- Add `_redirects` file for Netlify:
```
/* /index.html 200
```

### Logo or images not loading

**Solution:**
- Check `assets/images/` folder exists
- Verify image file names match HTML
- Check browser console for 404 errors
- Ensure image file permissions are correct

### Form not submitting

**Solution:**
- Check API_URL in `script.js` is correct
- Verify SheetDB API is accessible
- Open DevTools (F12) → Network → look for API call
- Check console for JavaScript errors

### Styling looks wrong

**Solution:**
- Clear browser cache: Ctrl+Shift+Delete
- Check if CSS file is loading: F12 → Network → style.css
- Verify color codes in CSS match design
- Check responsive breakpoints in DevTools

---

## 📊 Deployment Comparison

| Platform | Cost | Setup Time | Ease of Use | Scaling |
|----------|------|-----------|-----------|---------|
| **Vercel** | Free | 5 min | Easy | Excellent |
| **Netlify** | Free | 5 min | Very Easy | Excellent |
| **GitHub Pages** | Free | 10 min | Medium | Limited |
| **Firebase** | Free | 10 min | Medium | Good |
| **FTP Hosting** | Paid | 15 min | Hard | Limited |

---

## 🎯 Recommended Deployment Flow

1. **Development**: Test locally (`python -m http.server`)
2. **Version Control**: Use Git for tracking changes
3. **Staging**: Deploy to Netlify or Vercel preview
4. **Production**: Deploy to main branch
5. **Monitoring**: Check console and analytics

---

## 📞 Need Help?

### Common Resources
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://pages.github.com)
- [Firebase Docs](https://firebase.google.com/docs)

### Quick Fixes
1. **Clear Cache**: Ctrl+Shift+Delete
2. **Hard Refresh**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. **Check Console**: F12 → Console tab
4. **Inspect Element**: Right-click → Inspect

---

**Last Updated:** June 13, 2026
**Version:** 1.0
