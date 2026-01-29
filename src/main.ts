/**
 * Main Application Entry Point
 * InfiCode Solution Website
 */

import { EmailService, type ContactFormData } from './emailService.js';
import { WhatsAppService } from './whatsapp.js';
import {
  ScrollAnimations,
  initNavbarScroll,
  initScrollToTop,
  initSmoothScrollLinks
} from './animations.js';

/**
 * Main Application Class
 */
class App {
  private emailService: EmailService;
  private whatsappService: WhatsAppService;
  private scrollAnimations: ScrollAnimations;

  constructor() {
    this.emailService = new EmailService();
    this.whatsappService = new WhatsAppService();
    this.scrollAnimations = new ScrollAnimations();
  }

  /**
   * Initialize the application
   */
  init(): void {
    console.log('🚀 InfiCode Solution - Website Initialized');

    // Initialize navigation
    this.initMobileMenu();
    initNavbarScroll();
    initSmoothScrollLinks();
    initScrollToTop();

    // Initialize WhatsApp
    this.whatsappService.init();

    // Initialize contact form
    this.initContactForm();

    // Add active nav link highlighting
    this.initActiveNavLinks();
  }

  /**
   * Initialize mobile menu toggle
   */
  private initMobileMenu(): void {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (
        !navToggle.contains(target) &&
        !navMenu.contains(target) &&
        navMenu.classList.contains('active')
      ) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  /**
   * Initialize contact form submission
   */
  private initContactForm(): void {
    const form = document.getElementById('contactForm') as HTMLFormElement;
    const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
    const formMessage = document.getElementById('formMessage') as HTMLDivElement;

    if (!form || !submitBtn || !formMessage) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Get form data
      const formData: ContactFormData = {
        name: (document.getElementById('name') as HTMLInputElement).value.trim(),
        email: (document.getElementById('email') as HTMLInputElement).value.trim(),
        subject: (document.getElementById('subject') as HTMLInputElement).value.trim(),
        message: (document.getElementById('message') as HTMLTextAreaElement).value.trim()
      };

      // Show loading state
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      formMessage.style.display = 'none';

      // Send email
      console.log('Sending email with data:', formData);
      const result = await this.emailService.sendEmail(formData);
      console.log('Email result:', result);

      // Hide loading state
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;

      // Show result message
      formMessage.textContent = result.message;
      formMessage.className = `form-message ${result.success ? 'success' : 'error'}`;
      formMessage.style.display = 'block';
      
      console.log('Message displayed:', result.message);

      // Reset form on success
      if (result.success) {
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          formMessage.style.display = 'none';
        }, 5000);
      }

      // Scroll to message
      formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // Real-time validation (optional)
    this.initFormValidation(form);
  }

  /**
   * Initialize real-time form validation
   * @param form - The contact form element
   */
  private initFormValidation(form: HTMLFormElement): void {
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach((input) => {
      input.addEventListener('blur', () => {
        this.validateField(input as HTMLInputElement | HTMLTextAreaElement);
      });

      input.addEventListener('input', () => {
        // Remove error state when user starts typing
        input.classList.remove('error');
      });
    });
  }

  /**
   * Validate individual form field
   * @param field - The form field to validate
   */
  private validateField(field: HTMLInputElement | HTMLTextAreaElement): void {
    const value = field.value.trim();
    let isValid = true;

    switch (field.name) {
      case 'name':
        isValid = value.length >= 2;
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
        break;
      case 'subject':
        isValid = value.length >= 3;
        break;
      case 'message':
        isValid = value.length >= 10;
        break;
    }

    if (!isValid && value.length > 0) {
      field.classList.add('error');
    } else {
      field.classList.remove('error');
    }
  }

  /**
   * Highlight active navigation link based on scroll position
   */
  private initActiveNavLinks(): void {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let current = '';
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }
}

/**
 * Initialize app when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});

/**
 * Handle page visibility changes
 */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page is hidden');
  } else {
    console.log('Page is visible');
  }
});

/**
 * Handle window resize for responsive adjustments
 */
let resizeTimer: number;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    console.log('Window resized');
    // Add any resize-specific logic here
  }, 250);
});
