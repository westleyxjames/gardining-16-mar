# 🚀 Quick Start Guide - FreshBloom Garden Services

## Getting Started in 3 Steps

### Step 1: Navigate to the Public Folder
```bash
cd public
```

### Step 2: Start a Local Server
Choose one of these methods:

**Python (Easiest):**
```bash
python -m http.server 8000
```
Then open: http://localhost:8000

**Node.js:**
```bash
npx http-server
```
Then open: http://localhost:8080

**PHP:**
```bash
php -S localhost:8000
```
Then open: http://localhost:8000

### Step 3: View in Browser
Open your browser and navigate to the local server URL!

---

## 📁 What's Where

### HTML Pages (Open any in browser)
- `index.html` - Home page ⭐ START HERE
- `services.html` - Services
- `about.html` - About Us
- `contact.html` - Contact
- `faq.html` - FAQ
- Legal pages: privacy-policy, terms-conditions, disclaimer, cookie-policy
- `404.html` - Error page

### Styles
- `styles/main.css` - Core styles
- `styles/components.css` - UI components
- `styles/animations.css` - Animations

### Scripts
- `js/header.js` - Navigation
- `js/footer.js` - Footer
- `js/quote-form.js` - Quote form
- `js/cookie-banner.js` - Cookie consent
- `js/main.js` - Utilities

---

## 🎨 Quick Customization

### Change Colors
Edit `styles/main.css`:
```css
:root {
  --color-primary: #2F7D32;    /* Your color here */
  --color-secondary: #6ABF69;  /* Your color here */
  --color-accent: #8D6E63;     /* Your color here */
}
```

### Update Contact Info
Edit these files:
- `js/header.js` - Phone in header
- `js/footer.js` - All footer contact info
- Update on all pages as needed

### Change Content
Just open any HTML file and edit the text directly!

---

## 📝 Common Tasks

### Add a New Page
1. Copy an existing HTML file
2. Update the content
3. Add link in `js/header.js`

### Change Images
Replace Unsplash URLs with your own:
```html
<!-- Find this -->
<img src="https://images.unsplash.com/..." alt="...">

<!-- Replace with -->
<img src="images/your-image.jpg" alt="...">
```

### Modify Form Behavior
Edit `js/quote-form.js` - look for the `submit` event handler

---

## 🚀 Deploy to Production

### Option 1: Netlify (Easiest)
1. Go to netlify.com
2. Drag and drop the `/public` folder
3. Done! Your site is live

### Option 2: Vercel
1. Go to vercel.com
2. Import this project
3. Deploy!

### Option 3: GitHub Pages
1. Push to GitHub
2. Go to repository settings
3. Enable GitHub Pages
4. Select `/public` as source

### Option 4: Any Static Host
Upload the entire `/public` folder to:
- AWS S3
- Cloudflare Pages
- Firebase Hosting
- Render
- Surge

---

## ✅ Pre-Launch Checklist

- [ ] Test all pages work
- [ ] Update contact information
- [ ] Replace placeholder images
- [ ] Test forms
- [ ] Check mobile view
- [ ] Review legal pages
- [ ] Test in different browsers

---

## 🐛 Troubleshooting

### Pages not loading?
- Make sure you're using a local server (not just opening files)
- Check console for JavaScript errors
- Verify all files are in correct folders

### Styles not showing?
- Check CSS file paths in HTML
- Clear browser cache
- Inspect element to see if styles are loading

### Forms not working?
- Open browser console
- Forms currently log to console (need backend for real submissions)
- Check validation messages

### Mobile menu not opening?
- Check JavaScript console for errors
- Verify header.js is loading
- Try refreshing the page

---

## 💡 Tips

1. **Always use a local server** - Don't just open HTML files directly
2. **Test on mobile** - Use browser dev tools device mode
3. **Check console** - Press F12 to see any errors
4. **Backup before changes** - Copy files before editing
5. **Use browser dev tools** - Inspect element to debug styles

---

## 📚 Resources

### Documentation
- `README.md` - Complete documentation
- `CHECKLIST.md` - Testing checklist
- `CONVERSION-COMPLETE.md` - Conversion summary

### Learn More
- HTML: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- CSS: [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- JavaScript: [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🎯 Next Steps

1. ✅ You're reading this - great!
2. → Start local server
3. → Open index.html in browser
4. → Explore all pages
5. → Customize as needed
6. → Deploy to production

---

## 📞 Quick Reference

### Phone
Update in: header.js, footer.js, all contact pages

### Email  
Update in: footer.js, legal pages, contact page

### Address
Update in: footer.js, legal pages, contact page

### Social Media
Update in: footer.js

---

**Ready to launch! 🚀**

Have questions? Check README.md for detailed information.
