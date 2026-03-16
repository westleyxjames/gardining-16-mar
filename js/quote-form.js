// Quote Form Component
(function() {
  const quoteFormHTML = `
    <div class="quote-form">
      <div class="quote-form-content">
        <div class="quote-form-header">
          <div class="quote-form-badge">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            <span>Limited Time - Free Consultation</span>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
          </div>
          <h3 class="quote-form-title">Get Your Free Quote Today</h3>
          <p class="quote-form-subtitle">
            Join 500+ satisfied homeowners who transformed their gardens with FreshBloom
          </p>
          
          <div class="quote-form-benefits">
            <div class="quote-form-benefit">
              <div class="quote-form-benefit-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <span class="quote-form-benefit-text">24-Hour Response</span>
            </div>
            <div class="quote-form-benefit">
              <div class="quote-form-benefit-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <span class="quote-form-benefit-text">100% Free - No Obligation</span>
            </div>
            <div class="quote-form-benefit">
              <div class="quote-form-benefit-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <span class="quote-form-benefit-text">Expert Consultation</span>
            </div>
          </div>
        </div>

        <form id="quoteForm">
          <div class="form-group">
            <label for="name" class="form-label" id="nameLabel">Full Name *</label>
            <div class="form-input-wrapper">
              <svg class="form-input-icon" id="nameIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <input type="text" id="name" class="form-input" placeholder="John Doe" required>
              <svg class="form-input-success" id="nameCheck" style="display: none;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>

          <div class="form-group">
            <label for="email" class="form-label" id="emailLabel">Email Address *</label>
            <div class="form-input-wrapper">
              <svg class="form-input-icon" id="emailIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <input type="email" id="email" class="form-input" placeholder="john@example.com" required>
              <svg class="form-input-success" id="emailCheck" style="display: none;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>

          <div class="form-group">
            <label for="phone" class="form-label" id="phoneLabel">Phone Number *</label>
            <div class="form-input-wrapper">
              <svg class="form-input-icon" id="phoneIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <input type="tel" id="phone" class="form-input" placeholder="(555) 123-4567" required>
              <svg class="form-input-success" id="phoneCheck" style="display: none;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>

          <div class="form-group">
            <label for="service" class="form-label">Service Needed *</label>
            <div class="form-select-wrapper">
              <select id="service" class="form-select" required>
                <option value="">Select a service</option>
                <option value="garden-maintenance">🌿 Garden Maintenance</option>
                <option value="lawn-care">🌱 Lawn Care Services</option>
                <option value="landscaping">🌳 Landscaping & Garden Design</option>
                <option value="seasonal-cleanup">🍂 Seasonal Yard Cleanup</option>
                <option value="other">💬 Other / Not Sure</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="message" class="form-label" id="messageLabel">Project Details (Optional)</label>
            <div class="form-input-wrapper">
              <svg class="form-input-icon form-textarea-icon" id="messageIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
              <textarea id="message" class="form-input form-textarea" placeholder="Tell us about your garden project, square footage, special requirements..." rows="4"></textarea>
            </div>
          </div>

          <div class="form-group">
            <div class="form-checkbox-wrapper">
              <input type="checkbox" id="consent" class="form-checkbox" required>
              <label for="consent" class="form-checkbox-label">
                I agree to the 
                <a href="privacy-policy.html">Privacy Policy</a> and 
                <a href="terms-conditions.html">Terms & Conditions</a> 
                and consent to being contacted regarding my request. *
              </label>
            </div>
          </div>

          <div class="form-stats">
            <div class="form-stats-content">
              <div class="form-stat-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span>500+ Happy Clients</span>
              </div>
              <div class="form-stat-divider"></div>
              <div class="form-stat-item">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <span>4.9★ Rating</span>
              </div>
            </div>
          </div>

          <div class="form-submit-wrapper">
            <div class="form-submit-glow"></div>
            <button type="submit" class="form-submit">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Get My Free Quote Now
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>

          <div class="form-footer">
            <p class="form-footer-security">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              Your information is 100% secure and will never be shared
            </p>
            <p class="form-footer-response">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Average response time: Under 2 hours
            </p>
          </div>
        </form>
      </div>
    </div>
  `;

  function initQuoteForm() {
    const form = document.getElementById('quoteForm');
    if (!form) return;

    // Form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    // Labels and icons
    const nameLabel = document.getElementById('nameLabel');
    const emailLabel = document.getElementById('emailLabel');
    const phoneLabel = document.getElementById('phoneLabel');
    const messageLabel = document.getElementById('messageLabel');

    const nameIcon = document.getElementById('nameIcon');
    const emailIcon = document.getElementById('emailIcon');
    const phoneIcon = document.getElementById('phoneIcon');
    const messageIcon = document.getElementById('messageIcon');

    // Check marks
    const nameCheck = document.getElementById('nameCheck');
    const emailCheck = document.getElementById('emailCheck');
    const phoneCheck = document.getElementById('phoneCheck');

    // Focus/blur handlers
    function addFocusHandlers(input, label, icon) {
      input.addEventListener('focus', function() {
        label.classList.add('focused');
        icon.classList.add('focused');
      });

      input.addEventListener('blur', function() {
        label.classList.remove('focused');
        icon.classList.remove('focused');
      });
    }

    addFocusHandlers(nameInput, nameLabel, nameIcon);
    addFocusHandlers(emailInput, emailLabel, emailIcon);
    addFocusHandlers(phoneInput, phoneLabel, phoneIcon);
    addFocusHandlers(messageInput, messageLabel, messageIcon);

    // Validation handlers
    nameInput.addEventListener('input', function() {
      if (this.value.trim()) {
        nameCheck.style.display = 'block';
      } else {
        nameCheck.style.display = 'none';
      }
    });

    emailInput.addEventListener('input', function() {
      if (this.value.includes('@')) {
        emailCheck.style.display = 'block';
      } else {
        emailCheck.style.display = 'none';
      }
    });

    phoneInput.addEventListener('input', function() {
      const phoneNumber = this.value.replace(/\D/g, '');
      if (phoneNumber.length >= 10) {
        phoneCheck.style.display = 'block';
      } else {
        phoneCheck.style.display = 'none';
      }
    });

    // Form submission
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        service: document.getElementById('service').value,
        message: messageInput.value,
        consent: document.getElementById('consent').checked
      };

      if (!formData.consent) {
        alert('Please agree to the Privacy Policy and Terms & Conditions.');
        return;
      }

      // Simulate form submission
      console.log('Form submitted:', formData);
      alert('Thank you for your request! We\'ll contact you shortly at ' + (formData.email || formData.phone));

      // Reset form
      form.reset();
      nameCheck.style.display = 'none';
      emailCheck.style.display = 'none';
      phoneCheck.style.display = 'none';
    });
  }

  // Insert quote form and initialize
  document.addEventListener('DOMContentLoaded', function() {
    const quoteFormContainer = document.getElementById('quote-form-container');
    if (quoteFormContainer) {
      quoteFormContainer.innerHTML = quoteFormHTML;
      initQuoteForm();
    }
  });

  // Export for use in other pages
  window.QuoteForm = {
    html: quoteFormHTML,
    init: initQuoteForm
  };
})();
