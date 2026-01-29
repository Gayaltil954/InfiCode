/**
 * WhatsApp Integration Module
 * Handles WhatsApp chat integration
 */

import { CONFIG } from './config.js';

export class WhatsAppService {
  private phoneNumber: string;
  private defaultMessage: string;

  constructor() {
    this.phoneNumber = CONFIG.whatsApp.phoneNumber;
    this.defaultMessage = CONFIG.whatsApp.defaultMessage;
  }

  /**
   * Generate WhatsApp URL
   * @param customMessage - Optional custom message
   * @returns WhatsApp chat URL
   */
  private generateWhatsAppUrl(customMessage?: string): string {
    const message = customMessage || this.defaultMessage;
    const encodedMessage = encodeURIComponent(message);
    
    // Use wa.me format for better compatibility
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }

  /**
   * Open WhatsApp chat
   * @param customMessage - Optional custom message
   */
  openChat(customMessage?: string): void {
    const url = this.generateWhatsAppUrl(customMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  /**
   * Initialize floating WhatsApp button
   */
  initFloatingButton(): void {
    const floatingButton = document.getElementById('whatsappFloat');
    
    if (!floatingButton) {
      console.warn('WhatsApp floating button not found');
      return;
    }

    floatingButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.openChat();
    });
  }

  /**
   * Initialize hero WhatsApp button
   */
  initHeroButton(): void {
    const heroButton = document.getElementById('heroWhatsAppBtn');
    
    if (!heroButton) {
      console.warn('Hero WhatsApp button not found');
      return;
    }

    heroButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.openChat();
    });
  }

  /**
   * Initialize all WhatsApp buttons
   */
  init(): void {
    this.initFloatingButton();
    this.initHeroButton();
  }

  /**
   * Validate phone number format
   * @param phoneNumber - Phone number to validate
   * @returns boolean indicating if phone number is valid
   */
  static validatePhoneNumber(phoneNumber: string): boolean {
    // Remove all non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    // Phone number should be between 10 and 15 digits
    return cleaned.length >= 10 && cleaned.length <= 15;
  }

  /**
   * Format phone number for WhatsApp
   * @param phoneNumber - Phone number to format
   * @returns Formatted phone number
   */
  static formatPhoneNumber(phoneNumber: string): string {
    // Remove all non-digit characters
    return phoneNumber.replace(/\D/g, '');
  }
}
