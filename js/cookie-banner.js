// Cookie Banner Component
(function() {
  const cookieBannerHTML = `
    <div class="cookie-banner" id="cookieBanner">
      <div class="cookie-banner-container">
        <div class="cookie-banner-content">
          <div class="cookie-banner-title">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Cookie Notice</span>
          </div>
          <p class="cookie-banner-text">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies. 
            <a href="cookie-policy.html">Learn more</a>
          </p>
        </div>
        <div class="cookie-banner-buttons">
          <button class="cookie-banner-btn cookie-banner-btn-primary" id="acceptCookies">
            Accept All
          </button>
          <button class="cookie-banner-btn cookie-banner-btn-secondary" id="rejectCookies">
            Reject Non-Essential
          </button>
        </div>
      </div>
    </div>
  `;

  // Cookie management functions
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
  }

  function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function initCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptButton = document.getElementById('acceptCookies');
    const rejectButton = document.getElementById('rejectCookies');

    // Check if user has already made a choice
    const cookieConsent = getCookie('cookieConsent');

    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(function() {
        cookieBanner.classList.add('show');
      }, 1000);
    }

    // Accept cookies
    if (acceptButton) {
      acceptButton.addEventListener('click', function() {
        setCookie('cookieConsent', 'accepted', 365);
        cookieBanner.classList.remove('show');
        
        // Here you would initialize analytics, tracking, etc.
        console.log('Cookies accepted');
      });
    }

    // Reject cookies
    if (rejectButton) {
      rejectButton.addEventListener('click', function() {
        setCookie('cookieConsent', 'rejected', 365);
        cookieBanner.classList.remove('show');
        
        console.log('Non-essential cookies rejected');
      });
    }
  }

  // Insert cookie banner and initialize
  document.addEventListener('DOMContentLoaded', function() {
    const cookieBannerContainer = document.getElementById('cookie-banner');
    if (cookieBannerContainer) {
      cookieBannerContainer.innerHTML = cookieBannerHTML;
      initCookieBanner();
    }
  });
})();
