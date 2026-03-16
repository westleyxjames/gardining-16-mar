// Header Component
(function() {
  const headerHTML = `
    <div class="header">
      <div class="header-container">
        <a href="index.html" class="header-logo">
          <div class="header-logo-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <span>FreshBloom</span>
        </a>

        <nav class="header-nav">
          <a href="index.html" class="header-nav-link" data-page="index">Home</a>
          <a href="services.html" class="header-nav-link" data-page="services">Services</a>
          <a href="pricing.html" class="header-nav-link" data-page="pricing">Pricing</a>
          <a href="about.html" class="header-nav-link" data-page="about">About</a>
          <a href="faq.html" class="header-nav-link" data-page="faq">FAQ</a>
          <a href="contact.html" class="header-nav-link" data-page="contact">Contact</a>
        </nav>

        <div class="header-cta">
          <a href="tel:5038535991" class="btn btn-primary">
            <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            (503) 853-5991
          </a>
        </div>

        <button class="header-mobile-toggle" id="mobile-menu-toggle" aria-label="Toggle menu">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div class="header-mobile-menu" id="mobile-menu">
        <nav>
          <a href="index.html" class="header-mobile-menu-link" data-page="index">Home</a>
          <a href="services.html" class="header-mobile-menu-link" data-page="services">Services</a>
          <a href="pricing.html" class="header-mobile-menu-link" data-page="pricing">Pricing</a>
          <a href="about.html" class="header-mobile-menu-link" data-page="about">About</a>
          <a href="faq.html" class="header-mobile-menu-link" data-page="faq">FAQ</a>
          <a href="contact.html" class="header-mobile-menu-link" data-page="contact">Contact</a>
          <a href="tel:5038535991" class="btn btn-primary" style="margin-top: 1rem;">
            <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Call (503) 853-5991
          </a>
        </nav>
      </div>
    </div>
  `;

  // Insert header into page
  document.addEventListener('DOMContentLoaded', function() {
    const headerElement = document.getElementById('main-header');
    if (headerElement) {
      headerElement.innerHTML = headerHTML;
      initHeader();
    }
  });

  function initHeader() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
      });
    }

    // Set active page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.header-nav-link, .header-mobile-menu-link');
    
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('data-page') + '.html';
      if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
      }
    });

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
      }

      lastScroll = currentScroll;
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!event.target.closest('.header-mobile-menu') && !event.target.closest('.header-mobile-toggle')) {
          mobileMenu.classList.remove('active');
        }
      }
    });
  }
})();
