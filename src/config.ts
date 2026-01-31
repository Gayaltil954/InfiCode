/**
 * Configuration file for InfiCode Solution website
 * Update these values with your actual credentials
 */

export const CONFIG = {
  // EmailJS Configuration
  // Sign up at https://www.emailjs.com/ to get these values
  emailJS: {
    serviceId: 'service_am15l9n',      // Replace with your EmailJS service ID
    templateId: 'template_oiw22re',    // Replace with your EmailJS template ID
    publicKey: 'qDRguO2BW8DeheDg-'       // Replace with your EmailJS public key
  },

  // WhatsApp Configuration
  whatsApp: {
    phoneNumber: '94741542747',         // Replace with your WhatsApp number (include country code, no + or spaces)
    defaultMessage: 'Hello InfiCode Solution, I would like to discuss a project.'
  },

  // Company Information
  company: {
    name: 'InfiCode Solution',
    tagline: 'Innovative Code. Infinite Possibilities.',
    email: 'inficode.solutions@gmail.com',
    address: 'Your Business Address'
  }
} as const;
