# EmailJS Setup Guide for InfiCode Solution

## 📧 How to Make Your Contact Form Work

Your contact form will send emails to: **inficode.solutions@gmail.com**

Follow these steps to configure EmailJS:

---

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE!)
3. Create an account using your Google account or email

---

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the left menu
2. Click **"Add New Service"**
3. Select **"Gmail"** (recommended for inficode.solutions@gmail.com)
4. Click **"Connect Account"**
5. Sign in with your Gmail account: **inficode.solutions@gmail.com**
6. Copy the **Service ID** (you'll need this later)
7. Click **"Create Service"**

---

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. Use this template content:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```
You have received a new message from your website contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from InfiCode Solution website contact form.
```

4. Click **"Save"**
5. Copy the **Template ID** (you'll need this)

---

## Step 4: Get Your Public Key

1. Go to **"Account"** in the left menu
2. Scroll down to **"API Keys"** section
3. Copy your **Public Key** (starts with a long string of characters)

---

## Step 5: Update Your Config File

1. Open the file: `src/config.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
emailJS: {
  serviceId: 'service_xxxxxxx',      // Paste your Service ID here
  templateId: 'template_xxxxxxx',    // Paste your Template ID here
  publicKey: 'your_public_key_here'  // Paste your Public Key here
}
```

3. Save the file

---

## Step 6: Rebuild Your Project

Open terminal and run:
```bash
npm run build
```

---

## Step 7: Test Your Contact Form

1. Open `index.html` in your browser
2. Scroll to the **Contact Section**
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Subject: Test Message
   - Message: This is a test
4. Click **"Send Message"**
5. You should see a success message
6. Check your email: **inficode.solutions@gmail.com**

---

## 🎉 Done!

Your contact form is now working and will send all messages to:
**inficode.solutions@gmail.com**

---

## Troubleshooting

### ❌ "Failed to send message" error
- Double-check your Service ID, Template ID, and Public Key
- Make sure you ran `npm run build` after updating config
- Check browser console (F12) for detailed errors

### ❌ Emails not arriving
- Check spam/junk folder
- Verify Gmail service is connected in EmailJS dashboard
- Make sure template is saved properly

### ❌ Template variables not working
- Use exactly these variable names in template:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{subject}}`
  - `{{message}}`

---

## Need Help?

Visit EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
