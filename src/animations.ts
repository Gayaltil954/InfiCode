/**
 * Scroll Animations Module
 * Handles fade-in animations on scroll
 */

export class ScrollAnimations {
  private elements: NodeListOf<Element>;
  private observer: IntersectionObserver;

  constructor() {
    this.elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    
    // Create intersection observer
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    this.init();
  }

  /**
   * Initialize scroll animations
   */
  private init(): void {
    // Observe all animated elements
    this.elements.forEach((element) => {
      this.observer.observe(element);
    });
  }

  /**
   * Handle intersection observer callback
   * @param entries - Intersection observer entries
   */
  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve after animation
        // this.observer.unobserve(entry.target);
      }
    });
  }

  /**
   * Destroy observer
   */
  destroy(): void {
    this.observer.disconnect();
  }
}

/**
 * Smooth Scroll to Section
 * @param targetId - ID of the target section
 */
export function smoothScrollTo(targetId: string): void {
  const target = document.querySelector(targetId);
  
  if (target) {
    const navHeight = document.querySelector('.navbar')?.clientHeight || 0;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Handle navbar scroll effect
 */
export function initNavbarScroll(): void {
  const navbar = document.getElementById('navbar');
  
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/**
 * Handle scroll to top button
 */
export function initScrollToTop(): void {
  const scrollButton = document.getElementById('scrollToTop');
  
  if (!scrollButton) return;

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollButton.classList.add('visible');
    } else {
      scrollButton.classList.remove('visible');
    }
  });

  // Scroll to top on click
  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Initialize all navigation link smooth scrolling
 */
export function initSmoothScrollLinks(): void {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        smoothScrollTo(href);
        
        // Close mobile menu if open
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        
        if (navMenu && navToggle) {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
        }
      }
    });
  });

  // Also handle hero buttons
  const heroButtons = document.querySelectorAll('.hero-buttons a');
  
  heroButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const href = button.getAttribute('href');
      
      if (href && href.startsWith('#') && href !== '#whatsapp') {
        e.preventDefault();
        smoothScrollTo(href);
      }
    });
  });
}
