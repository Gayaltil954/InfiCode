# InfiCode Solution - Company Website

A modern, responsive frontend-only website built with TypeScript, HTML5, and CSS3.

## Features

- 🎨 Modern, professional design with dark theme
- 📱 Fully responsive (desktop, tablet, mobile)
- ✉️ Contact form with EmailJS integration
- 💬 WhatsApp floating button integration
- ⚡ Smooth animations and transitions
- 🎯 TypeScript for type safety

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Update `src/config.ts` with your credentials

### 3. Configure WhatsApp

Update the phone number in `src/config.ts`:
- Use international format without '+' or spaces
- Example: '1234567890' for USA number

### 4. Build TypeScript

```bash
npm run build
```

Or for development with auto-compilation:

```bash
npm run watch
```

### 5. Open the Website

Open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

## Project Structure

```
InfiCode/
├── src/
│   ├── config.ts           # Configuration file
│   ├── main.ts             # Main application logic
│   ├── emailService.ts     # EmailJS integration
│   ├── animations.ts       # Scroll animations
│   └── whatsapp.ts         # WhatsApp integration
├── styles/
│   └── main.css            # All styling
├── dist/                   # Compiled TypeScript (generated)
├── index.html              # Main HTML file
├── package.json
├── tsconfig.json
└── README.md
```

## EmailJS Template Variables

Your EmailJS template should include these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 InfiCode Solution. All rights reserved.
