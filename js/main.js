// Main JavaScript - Utilities and Global Functions

// Smooth scroll to quote form
function scrollToQuoteForm() {
  const quoteForm = document.getElementById('quote-form-container');
  if (quoteForm) {
    quoteForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Scroll reveal animation
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
  
  if (revealElements.length === 0) return;

  const revealOnScroll = function() {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // Check if element is in viewport
      if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
        element.classList.add('revealed');
      }
    });
  };

  // Initial check
  revealOnScroll();

  // Check on scroll
  window.addEventListener('scroll', revealOnScroll);
}

// Back to top button
function initBackToTop() {
  // Create back to top button
  const backToTop = document.createElement('button');
  backToTop.innerHTML = `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 1.5rem; height: 1.5rem;">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  `;
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background: linear-gradient(to bottom right, var(--color-primary), var(--color-secondary));
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 999;
    transition: all 0.3s ease;
  `;

  document.body.appendChild(backToTop);

  // Show/hide on scroll
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  });

  // Scroll to top on click
  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Hover effect
  backToTop.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
  });

  backToTop.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
}

// Lazy load images
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Form validation helper
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10;
}

// Accordion functionality
function initAccordions() {
  const accordions = document.querySelectorAll('[data-accordion]');
  
  accordions.forEach(accordion => {
    const trigger = accordion.querySelector('[data-accordion-trigger]');
    const content = accordion.querySelector('[data-accordion-content]');
    
    if (trigger && content) {
      trigger.addEventListener('click', function() {
        const isOpen = accordion.classList.contains('open');
        
        // Close all accordions if this is part of a group
        const group = accordion.closest('[data-accordion-group]');
        if (group) {
          group.querySelectorAll('[data-accordion]').forEach(item => {
            item.classList.remove('open');
            const itemContent = item.querySelector('[data-accordion-content]');
            if (itemContent) {
              itemContent.style.maxHeight = '0';
            }
          });
        }
        
        // Toggle this accordion
        if (!isOpen) {
          accordion.classList.add('open');
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          accordion.classList.remove('open');
          content.style.maxHeight = '0';
        }
      });
    }
  });
}

// Modal functionality
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// Initialize modal close buttons
function initModals() {
  const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  
  modalCloseButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modalId = this.closest('[data-modal]').id;
      closeModal(modalId);
    });
  });
  
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', function() {
      const modalId = this.closest('[data-modal]').id;
      closeModal(modalId);
    });
  });
  
  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const openModals = document.querySelectorAll('[data-modal].show');
      openModals.forEach(modal => closeModal(modal.id));
    }
  });
}

// Testimonial carousel (if needed)
function initCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;
  
  const track = carousel.querySelector('[data-carousel-track]');
  const slides = carousel.querySelectorAll('[data-carousel-slide]');
  const prevButton = carousel.querySelector('[data-carousel-prev]');
  const nextButton = carousel.querySelector('[data-carousel-next]');
  
  if (!track || slides.length === 0) return;
  
  let currentIndex = 0;
  
  function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
  
  if (prevButton) {
    prevButton.addEventListener('click', function() {
      currentIndex = Math.max(0, currentIndex - 1);
      updateCarousel();
    });
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', function() {
      currentIndex = Math.min(slides.length - 1, currentIndex + 1);
      updateCarousel();
    });
  }
  
  // Auto-play (optional)
  setInterval(function() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 5000);
}

// Parallax effect
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  window.addEventListener('scroll', function() {
    parallaxElements.forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      const yPos = -(window.pageYOffset * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Counter animation
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  
  const animateCounter = function(counter) {
    const target = parseInt(counter.dataset.counter);
    const duration = parseInt(counter.dataset.duration) || 2000;
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = function() {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  };
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        animateCounter(entry.target);
      }
    });
  });
  
  counters.forEach(counter => counterObserver.observe(counter));
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', function() {
  initScrollReveal();
  initBackToTop();
  initLazyLoading();
  initAccordions();
  initModals();
  initCounters();
  
  console.log('FreshBloom Garden Services - Website Loaded');
});

// Export functions for global use
window.scrollToQuoteForm = scrollToQuoteForm;
window.openModal = openModal;
window.closeModal = closeModal;
window.validateEmail = validateEmail;
window.validatePhone = validatePhone;
