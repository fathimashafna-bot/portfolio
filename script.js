/**
 * ============================================================================
 * PORTFOLIO JAVASCRIPT — FATHIMA SHAFNA
 * Features:
 *   1. Dynamic Copyright Year
 *   2. Responsive Navigation & Mobile Menu Collapse
 *   3. Active Nav Link Highlighting (ScrollSpy)
 *   4. Sticky Navbar Styling on Scroll
 *   5. Subtle Scroll Reveal Animations (IntersectionObserver)
 *   6. Accessible Client-Side Form Validation & Clear Demo Feedback
 *   7. Graceful Profile Image Error Handling
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Dynamic Copyright Year
  // --------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. Sticky Navbar Glass Effect on Scroll
  // --------------------------------------------------------------------------
  const headerNav = document.getElementById('header-nav');
  const handleNavbarScroll = () => {
    if (!headerNav) return;
    if (window.scrollY > 40) {
      headerNav.classList.add('scrolled');
    } else {
      headerNav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Initial check

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Auto-Collapse
  // --------------------------------------------------------------------------
  // On mobile viewports, clicking a link inside the collapse menu should close it
  const navbarCollapse = document.getElementById('navbarContent');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        // Use Bootstrap's collapse instance if available
        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          } else {
            navbarCollapse.classList.remove('show');
          }
        } else {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. ScrollSpy: Highlight Active Nav Link based on Scroll Position
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  
  const handleScrollSpy = () => {
    const scrollPosition = window.scrollY + 120; // 120px offset for sticky header

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const matchingNavLink = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`);

      if (matchingNavLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach((l) => l.classList.remove('active'));
          matchingNavLink.classList.add('active');
        }
      }
    });
  };
  window.addEventListener('scroll', handleScrollSpy, { passive: true });

  // --------------------------------------------------------------------------
  // 5. Scroll-Reveal Animations (Intersection Observer)
  // --------------------------------------------------------------------------
  // Select section elements, cards, and highlight items to animate
  const animatableElements = document.querySelectorAll(
    '.about-card, .highlight-item, .skill-card, .project-card, .timeline-item, .contact-info-panel, .contact-form-panel'
  );

  // Add the base animation class
  animatableElements.forEach((el) => {
    el.classList.add('animate-on-scroll');
  });

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    // If user prefers reduced motion or browser lacks support, show immediately
    animatableElements.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.05, // Reveal when 5% is visible
        rootMargin: '0px 0px 40px 0px' // Pre-load slightly before scrolling into view
      }
    );

    animatableElements.forEach((el) => revealObserver.observe(el));
  }

  // --------------------------------------------------------------------------
  // 6. Profile Image Graceful Fallback
  // --------------------------------------------------------------------------
  const profileImg = document.getElementById('hero-profile-img');
  const avatarFallback = document.getElementById('avatar-fallback');

  if (profileImg && avatarFallback) {
    // Check if image is broken or fails to load
    profileImg.addEventListener('error', () => {
      profileImg.style.display = 'none';
      avatarFallback.classList.remove('d-none');
    });

    // Also verify if naturalWidth is 0 after image load attempt
    if (profileImg.complete && profileImg.naturalWidth === 0) {
      profileImg.style.display = 'none';
      avatarFallback.classList.remove('d-none');
    }
  }

  // --------------------------------------------------------------------------
  // 7. Contact Form Client-Side Validation & Feedback
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('portfolio-contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const formStatusAlert = document.getElementById('form-status-alert');
  const submitBtn = document.getElementById('contact-submit-btn');

  // RFC 5322 Compliant standard email regex pattern
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

  /**
   * Validates an individual field
   * @param {HTMLElement} input - Input element
   * @param {boolean} isValid - Boolean indicating validity
   * @param {string} feedbackId - ID of invalid feedback container
   */
  const setFieldValidationState = (input, isValid, feedbackId) => {
    const feedbackEl = document.getElementById(feedbackId);
    if (isValid) {
      input.classList.remove('is-invalid');
      if (feedbackEl) feedbackEl.classList.add('d-none');
    } else {
      input.classList.add('is-invalid');
      if (feedbackEl) feedbackEl.classList.remove('d-none');
    }
  };

  // Real-time input listeners to remove invalid state once corrected
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim().length >= 2) {
        setFieldValidationState(nameInput, true, 'name-feedback');
      }
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      if (emailRegex.test(emailInput.value.trim())) {
        setFieldValidationState(emailInput, true, 'email-feedback');
      }
    });
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      if (messageInput.value.trim().length >= 10) {
        setFieldValidationState(messageInput, true, 'message-feedback');
      }
    });
  }

  // Form Submission Handler
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent page reload

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const messageVal = messageInput ? messageInput.value.trim() : '';

      // Validate all fields
      const isNameValid = nameVal.length >= 2;
      const isEmailValid = emailRegex.test(emailVal);
      const isMessageValid = messageVal.length >= 10;

      setFieldValidationState(nameInput, isNameValid, 'name-feedback');
      setFieldValidationState(emailInput, isEmailValid, 'email-feedback');
      setFieldValidationState(messageInput, isMessageValid, 'message-feedback');

      if (!isNameValid || !isEmailValid || !isMessageValid) {
        // Display validation error banner
        if (formStatusAlert) {
          formStatusAlert.className = 'alert alert-danger mb-4';
          formStatusAlert.innerHTML = `
            <div class="d-flex align-items-center gap-2">
              <i class="fa-solid fa-triangle-exclamation"></i>
              <div>
                <strong>Please check required fields:</strong> Ensure your name, a valid email address, and a message of at least 10 characters are provided.
              </div>
            </div>
          `;
          formStatusAlert.classList.remove('d-none');
        }

        // Focus first invalid input for keyboard accessibility
        if (!isNameValid && nameInput) nameInput.focus();
        else if (!isEmailValid && emailInput) emailInput.focus();
        else if (!isMessageValid && messageInput) messageInput.focus();

        return;
      }

      // If validation succeeds:
      // CRITICAL REQUIREMENT: Clearly explain that this is a front-end demo
      // and do NOT present a deceptive message claiming the email was sent.
      if (formStatusAlert) {
        formStatusAlert.className = 'alert alert-custom-demo mb-4';
        formStatusAlert.innerHTML = `
          <div class="d-flex flex-column gap-2">
            <div class="d-flex align-items-center gap-2">
              <i class="fa-solid fa-circle-check fs-5"></i>
              <strong>Client-Side Validation Passed!</strong>
            </div>
            <p class="mb-1 small">
              Thank you, <strong>${escapeHtml(nameVal)}</strong>! Your input has been validated successfully on the browser.
            </p>
            <div class="p-2 rounded bg-black bg-opacity-25 small text-light">
              <i class="fa-solid fa-info-circle me-1 text-cyan"></i>
              <strong>Backend Delivery Notice:</strong> This website operates entirely on the front end without a server backend. 
              <strong>No email has been sent over the internet.</strong> To receive real messages, you can link this form to 
              <a href="https://formspree.io" target="_blank" rel="noopener" class="text-cyan text-decoration-underline">Formspree</a>, 
              <a href="https://www.emailjs.com" target="_blank" rel="noopener" class="text-cyan text-decoration-underline">EmailJS</a>, 
              or contact directly via 
              <a href="mailto:fathimashafna.placeholder@example.com" class="text-cyan text-decoration-underline">fathimashafna.placeholder@example.com</a>.
            </div>
          </div>
        `;
        formStatusAlert.classList.remove('d-none');
      }

      // Reset form input values
      contactForm.reset();

      // Reset button state
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>Validated &amp; Recorded</span> <i class="fa-solid fa-check ms-2"></i>`;
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
        }, 4000);
      }
    });
  }

  /**
   * Helper function to escape user input and avoid XSS in innerHTML display
   * @param {string} str - Raw input string
   * @returns {string} Sanitized string
   */
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
});
