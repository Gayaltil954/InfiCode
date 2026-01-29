# EmailJS Template Setup

## Quick Reference

### Template Variables to Use

When creating your EmailJS template, use these variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Sender's name | John Doe |
| `{{from_email}}` | Sender's email | john@example.com |
| `{{subject}}` | Message subject | Project Inquiry |
| `{{message}}` | Message content | I would like to... |
| `{{to_name}}` | Company name | InfiCode Solution |

---

## Recommended Email Template

### Subject Line
```
New Contact: {{subject}}
```

### Email Body
```
Hello {{to_name}} Team,

You have received a new contact form submission from your website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:    {{from_name}}
Email:   {{from_email}}
Subject: {{subject}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sent via InfiCode Solution Contact Form
Date: {{sent_date}}

Reply to {{from_email}} to respond to this inquiry.
```

---

## Auto-Reply Template (Optional)

You can create a second template for auto-replies to customers:

### Subject Line
```
Thank you for contacting InfiCode Solution
```

### Email Body
```
Hello {{from_name}},

Thank you for reaching out to InfiCode Solution!

We have received your message regarding: "{{subject}}"

Our team will review your inquiry and get back to you within 24-48 hours.

In the meantime, feel free to:
• Visit our website for more information
• Follow us on social media
• Call us at: +1 (234) 567-8900

We appreciate your interest in our services!

Best regards,
The InfiCode Solution Team

---
Innovative Code. Infinite Possibilities.
www.inficodesolution.com
```

---

## Configuration Steps in EmailJS Dashboard

### 1. Template Settings
- **Template Name**: InfiCode Contact Form
- **From name**: InfiCode Solution
- **From email**: Your verified email
- **Subject**: `New Contact: {{subject}}`
- **Reply to**: `{{from_email}}`

### 2. Template Variables
Ensure all variables are wrapped in double curly braces: `{{variable_name}}`

### 3. Test Template
Before deploying, use EmailJS's test feature:
1. Click "Test it" button in template editor
2. Fill in sample values for all variables
3. Send test email
4. Verify formatting and content

---

## Common Issues & Solutions

### Issue: Variables not replacing
**Solution**: Make sure variable names match exactly (case-sensitive)

### Issue: Email formatting broken
**Solution**: Use plain text or basic HTML only in EmailJS templates

### Issue: Emails going to spam
**Solution**: 
- Verify your email service in EmailJS
- Add SPF/DKIM records to your domain
- Avoid spam trigger words in subject lines

---

## Testing Checklist

- [ ] Service connected and verified
- [ ] Template created with all variables
- [ ] Test email sent and received
- [ ] Variables properly replaced in test email
- [ ] Reply-to address works
- [ ] Email formatting looks good
- [ ] Config file updated with Service ID, Template ID, Public Key
- [ ] Website contact form submits successfully
- [ ] Success message displays after submission
- [ ] Actual email received from website form

---

## Rate Limits (Free Tier)

- **Monthly emails**: 200
- **Daily emails**: Unlimited (within monthly quota)
- **Concurrent requests**: 2

**Tip**: Upgrade to paid plan if you expect more than 200 contacts per month.

---

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Template Variables Guide](https://www.emailjs.com/docs/user-guide/template-variables/)
- [Email Service Integration](https://www.emailjs.com/docs/email-services/)
