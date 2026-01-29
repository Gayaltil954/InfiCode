/**
 * EmailJS Service Module
 * Handles contact form submission using EmailJS
 */

// EmailJS will be loaded from CDN in index.html
declare const emailjs: any;

import { CONFIG } from './config.js';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class EmailService {
  private serviceId: string;
  private templateId: string;
  private publicKey: string;

  constructor() {
    this.serviceId = CONFIG.emailJS.serviceId;
    this.templateId = CONFIG.emailJS.templateId;
    this.publicKey = CONFIG.emailJS.publicKey;

    // Initialize EmailJS
    emailjs.init(this.publicKey);
  }

  /**
   * Send email via EmailJS
   * @param formData - Contact form data
   * @returns Promise with success or error
   */
  async sendEmail(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      // Validate form data
      if (!this.validateFormData(formData)) {
        return {
          success: false,
          message: 'Please fill in all required fields correctly.'
        };
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: CONFIG.company.name
      };

      // Send email
      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        };
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      return {
        success: false,
        message: 'Oops! Something went wrong. Please try again later or contact us directly.'
      };
    }
  }

  /**
   * Validate form data
   * @param formData - Contact form data
   * @returns boolean indicating if data is valid
   */
  private validateFormData(formData: ContactFormData): boolean {
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      console.log('Validation failed: Missing fields');
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.log('Validation failed: Invalid email format');
      return false;
    }

    // Check minimum lengths
    if (formData.name.length < 2) {
      console.log('Validation failed: Name too short');
      return false;
    }
    
    if (formData.subject.length < 3) {
      console.log('Validation failed: Subject too short');
      return false;
    }
    
    if (formData.message.length < 10) {
      console.log('Validation failed: Message too short (min 10 chars, got ' + formData.message.length + ')');
      return false;
    }

    return true;
  }

  /**
   * Get validation errors for form fields
   * @param formData - Contact form data
   * @returns Object with field-specific error messages
   */
  getValidationErrors(formData: ContactFormData): Record<string, string> {
    const errors: Record<string, string> = {};

    if (!formData.name || formData.name.length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject || formData.subject.length < 3) {
      errors.subject = 'Subject must be at least 3 characters long';
    }

    if (!formData.message || formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    return errors;
  }
}
