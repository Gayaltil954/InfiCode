# InfiCode Solution - Quick Start Guide

## 🚀 Getting Started (Quick Setup)

### Option 1: Automated Setup (Recommended)

**Windows:**
```bash
setup.bat
```

**Linux/Mac:**
```bash
chmod +x setup.sh
./setup.sh
```

### Option 2: Manual Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure EmailJS & WhatsApp**
   - Open `src/config.ts`
   - Add your EmailJS credentials (see [EmailJS Setup](#emailjs-setup))
   - Add your WhatsApp number

3. **Build TypeScript**
   ```bash
   npm run build
   ```

4. **Open Website**
   - Open `index.html` in your browser
   - Or use a local server (recommended)

---

## 📧 EmailJS Setup

### Quick Steps:

1. **Sign up** at [EmailJS.com](https://www.emailjs.com/)
2. **Add Email Service** → Copy Service ID
3. **Create Template** → Copy Template ID
4. **Get Public Key** from Account settings
5. **Update** `src/config.ts`:

```typescript
emailJS: {
  serviceId: 'service_xxxxxxx',    // Your Service ID
  templateId: 'template_xxxxxxx',  // Your Template ID
  publicKey: 'xxxxxxxxxxxxx'       // Your Public Key
}
```

📄 **Detailed Guide:** Open `setup-guide.html` in your browser

📋 **Template Reference:** See `EMAILJS-TEMPLATE.md`

---

## 💬 WhatsApp Setup

Update phone number in `src/config.ts`:

```typescript
whatsApp: {
  phoneNumber: '1234567890',  // Your number with country code (no + or spaces)
  defaultMessage: 'Hello InfiCode Solution, I would like to discuss a project.'
}
```

**Example:** 
- US number: `+1 (555) 123-4567` → `15551234567`
- UK number: `+44 20 1234 5678` → `442012345678`

---

## 🛠️ Development

### Watch Mode (Auto-compile on save)
```bash
npm run watch
```

### Build Production Files
```bash
npm run build
```

### Local Development Server

**Option 1: Python**
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

**Option 2: Node.js**
```bash
npx http-server -p 8000
```
Then visit: `http://localhost:8000`

**Option 3: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

---

## 📁 Project Structure

```
InfiCode/
├── src/                    # TypeScript source files
│   ├── config.ts          # ⚙️ Configuration (UPDATE THIS!)
│   ├── main.ts            # Main application logic
│   ├── emailService.ts    # EmailJS integration
│   ├── whatsapp.ts        # WhatsApp integration
│   └── animations.ts      # Scroll animations
│
├── styles/
│   └── main.css           # All styling
│
├── dist/                  # Compiled JavaScript (auto-generated)
│   └── *.js
│
├── index.html             # Main HTML file
├── setup-guide.html       # Detailed setup instructions
├── EMAILJS-TEMPLATE.md    # EmailJS template reference
├── README.md              # Main documentation
├── package.json           # Dependencies
└── tsconfig.json          # TypeScript configuration
```

---

## ✅ Customization Checklist

### Essential (Do This First!)
- [ ] Update EmailJS credentials in `src/config.ts`
- [ ] Update WhatsApp number in `src/config.ts`
- [ ] Test contact form
- [ ] Test WhatsApp button

### Optional Customization
- [ ] Update company email in `src/config.ts`
- [ ] Update company address in `src/config.ts`
- [ ] Modify colors in `styles/main.css` (search for `:root`)
- [ ] Add your logo (replace icon in navbar)
- [ ] Update social media links in footer
- [ ] Add real images (replace placeholder in About section)
- [ ] Customize service descriptions
- [ ] Update meta tags in `index.html`

---

## 🎨 Customizing Colors

Open `styles/main.css` and modify these CSS variables:

```css
:root {
  --primary-color: #6366f1;      /* Main brand color */
  --secondary-color: #8b5cf6;    /* Secondary accent */
  --accent-color: #ec4899;       /* Highlights */
  --dark-bg: #0f172a;            /* Background */
  --text-primary: #f1f5f9;       /* Main text */
}
```

---

## 📱 Responsive Design

The website is fully responsive and tested on:
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1920px)
- ✅ Tablet (768px - 1365px)
- ✅ Mobile (320px - 767px)

---

## 🐛 Troubleshooting

### Contact Form Not Working
1. Check browser console for errors (F12)
2. Verify EmailJS credentials in `src/config.ts`
3. Ensure `npm run build` completed successfully
4. Test EmailJS connection in their dashboard

### TypeScript Errors
```bash
# Clean build
rm -rf dist/
npm run build
```

### WhatsApp Not Opening
1. Check phone number format (no + or spaces)
2. Include country code
3. Test URL manually: `https://wa.me/1234567890`

### Animations Not Working
1. Ensure JavaScript is enabled
2. Check that `dist/main.js` exists
3. Open browser console for errors

---

## 📊 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | Latest  | ✅ Full |
| Firefox | Latest  | ✅ Full |
| Safari  | Latest  | ✅ Full |
| Edge    | Latest  | ✅ Full |

---

## 🚀 Deployment

### Deploy to Static Hosting

This is a frontend-only website. Deploy to:
- **Netlify**: Drag & drop the entire folder
- **Vercel**: Connect GitHub repo
- **GitHub Pages**: Push to gh-pages branch
- **Firebase Hosting**: `firebase deploy`

### Pre-deployment Checklist
- [ ] Update all credentials in `src/config.ts`
- [ ] Run `npm run build`
- [ ] Test all features locally
- [ ] Update meta tags and SEO info
- [ ] Verify all links work
- [ ] Test on mobile devices

---

## 📞 Support

Need help? Check these resources:
- 📄 `setup-guide.html` - Visual setup guide
- 📋 `EMAILJS-TEMPLATE.md` - EmailJS template reference
- 🌐 [EmailJS Docs](https://www.emailjs.com/docs/)
- 🎨 [Font Awesome Icons](https://fontawesome.com/icons)

---

## 📄 License

© 2026 InfiCode Solution. All rights reserved.

---

**Happy Coding! 🎉**

*Innovative Code. Infinite Possibilities.*
