# FreshBloom Garden Services - HTML/CSS/JS Website

This is a complete conversion of the FreshBloom Garden Services website from React to vanilla HTML, CSS, and JavaScript.

## 📁 File Structure

```
/public/
├── index.html              # Home page
├── services.html           # Services page
├── pricing.html            # 🆕 Pricing page
├── about.html              # About page
├── contact.html            # Contact page
├── faq.html                # FAQ page
├── privacy-policy.html     # Privacy Policy
├── terms-conditions.html   # Terms & Conditions
├── disclaimer.html         # Disclaimer
├── cookie-policy.html      # Cookie Policy
├── 404.html                # 404 Not Found page
│
├── styles/
│   ├── main.css           # Main styles (layout, typography, utilities)
│   ├── components.css     # Component styles (header, footer, forms)
│   └── animations.css     # Animation styles and keyframes
│
└── js/
    ├── header.js          # Header component and navigation
    ├── footer.js          # Footer component
    ├── cookie-banner.js   # Cookie consent banner
    ├── quote-form.js      # Quote request form
    └── main.js            # Main utilities and global functions
```

## 🚀 Getting Started

### Option 1: Direct File Access
Simply open any HTML file in your web browser:
- Double-click `index.html` to view the home page
- Navigate between pages using the header navigation

### Option 2: Local Server (Recommended)
For the best experience, serve the files through a local web server:

**Using Python:**
```bash
cd public
python -m http.server 8000
# Visit http://localhost:8000
```

**Using Node.js:**
```bash
cd public
npx http-server
# Visit http://localhost:8080
```

**Using PHP:**
```bash
cd public
php -S localhost:8000
# Visit http://localhost:8000
```

## 📄 Pages (11 Total)

### Main Pages
1. **Home (index.html)** - Hero section with quote form, services overview, testimonials
2. **Services (services.html)** - Detailed service descriptions with images
3. **Pricing (pricing.html)** - 🆕 Pricing plans with comparison table
4. **About (about.html)** - Company story, mission, and values
5. **Contact (contact.html)** - Contact form and business information
6. **FAQ (faq.html)** - Frequently asked questions with accordion interface

### Legal Pages
7. **Privacy Policy (privacy-policy.html)** - Privacy and data protection information
8. **Terms & Conditions (terms-conditions.html)** - Service terms and conditions
9. **Disclaimer (disclaimer.html)** - Legal disclaimer
10. **Cookie Policy (cookie-policy.html)** - Cookie usage information

### Utility Pages
11. **404 (404.html)** - Custom error page

### Helper Pages
12. **image-downloader.html** - 🆕 Helper page to download all images for offline use

## 🎨 Styling

### CSS Files
- **main.css**: Core styles including variables, typography, layout, and utilities
- **components.css**: Header, footer, forms, and UI components
- **animations.css**: Keyframe animations and transition effects

### CSS Variables (Customization)
The website uses CSS custom properties for easy customization. Edit `styles/main.css`:

```css
:root {
  --color-primary: #2F7D32;        /* Primary green */
  --color-secondary: #6ABF69;      /* Secondary green */
  --color-accent: #8D6E63;         /* Brown accent */
  /* ... more variables */
}
```

## 🔧 JavaScript Components

### Header (header.js)
- Responsive navigation
- Mobile menu toggle
- Active page highlighting
- Scroll effects

### Footer (footer.js)
- Dynamic year display
- Social media links
- Site navigation

### Cookie Banner (cookie-banner.js)
- Cookie consent management
- Preferences storage
- Accept/reject functionality

### Quote Form (quote-form.js)
- Form validation
- Real-time input feedback
- Success animations
- Modal integration

### Main Utilities (main.js)
- Scroll reveal animations
- Back to top button
- Accordion functionality
- Modal controls
- Lazy loading
- Counter animations

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✨ Features

### Animations
- Fade-in on scroll
- Hover effects
- Smooth transitions
- Loading states

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states

### Performance
- Lazy loading images
- Optimized CSS
- Minimal JavaScript
- Fast page loads

## 🖼️ Images

All images use Unsplash URLs. In production, you should:
1. Download and host images locally
2. Optimize images for web (compress, resize)
3. Use appropriate formats (WebP, JPEG)
4. Implement lazy loading

## 📞 Contact Information

Update contact details in:
- `js/header.js` (phone number in CTA)
- `js/footer.js` (all contact info)
- All legal pages

Current placeholders:
- **Phone**: (503) 853-5991
- **Email**: info@freshbloomgarden.com
- **Address**: 75 3rd Ave, New York, NY 10003, USA

## 🔒 Legal Pages

All legal pages include:
- Privacy Policy - GDPR compliant
- Terms & Conditions - Service agreement
- Disclaimer - Liability limitations
- Cookie Policy - Cookie usage details

⚠️ **Important**: These are templates. Consult with a legal professional before using in production.

## 🌐 Browser Support

Tested and working on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Conversion Notes

### What Was Converted:
✅ All React components to vanilla JavaScript
✅ Tailwind CSS to custom CSS
✅ React Router to standard HTML links
✅ State management to DOM manipulation
✅ React hooks to event listeners
✅ JSX to HTML templates

### Key Differences from React Version:
- No build process required
- Direct HTML files instead of SPA
- CSS files instead of Tailwind classes
- Vanilla JS instead of React hooks
- No npm dependencies
- No React Router (standard navigation)

## 🚀 Deployment

### Static Hosting
Deploy to any static hosting service:
- **Netlify**: Drag and drop the `/public` folder
- **Vercel**: Import and deploy
- **GitHub Pages**: Push to gh-pages branch
- **AWS S3**: Upload to S3 bucket
- **Cloudflare Pages**: Connect repository

### Server Configuration
For proper 404 handling, configure your server to serve `404.html` for missing pages.

**Example for Apache (.htaccess):**
```apache
ErrorDocument 404 /404.html
```

**Example for Nginx:**
```nginx
error_page 404 /404.html;
```

## 📝 Customization Guide

### 1. Change Colors
Edit CSS variables in `styles/main.css`

### 2. Update Content
Edit HTML files directly - all content is in plain HTML

### 3. Modify Forms
Edit `js/quote-form.js` for form behavior
Edit form HTML in respective pages

### 4. Add New Pages
1. Create new `.html` file
2. Include header/footer scripts
3. Add link to navigation in `js/header.js`

## 🐛 Known Limitations

- No server-side functionality (forms submit client-side only)
- No database integration
- Cookie consent is simulated (no actual tracking)
- Form submissions log to console (needs backend integration)

## 💡 Future Enhancements

Potential improvements:
- Add backend API for form submissions
- Implement real analytics
- Add blog functionality
- Create CMS integration
- Add booking system
- Implement payment processing

## 📞 Support

For questions or issues:
- Review the code comments
- Check browser console for errors
- Ensure all files are in correct directories
- Test with a local server

## 📄 License

This code is provided as-is for the FreshBloom Garden Services project.

---

**Built with ❤️ using HTML, CSS, and JavaScript**

Last updated: March 12, 2026