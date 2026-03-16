# 📥 Download Guide - FreshBloom Garden Services

## How to Download and Use Offline

This guide explains how to download the website files and make them work offline with images.

---

## 🚀 Quick Download

### Option 1: Download Entire Public Folder
1. Download all files in the `/public` folder
2. Keep the folder structure intact:
```
public/
├── index.html
├── pricing.html (NEW!)
├── services.html
├── about.html
├── contact.html
├── faq.html
├── privacy-policy.html
├── terms-conditions.html
├── disclaimer.html
├── cookie-policy.html
├── 404.html
├── styles/
│   ├── main.css
│   ├── components.css
│   └── animations.css
└── js/
    ├── header.js
    ├── footer.js
    ├── cookie-banner.js
    ├── quote-form.js
    └── main.js
```

### Option 2: Download as ZIP
1. Select all files in `/public` folder
2. Create a ZIP archive
3. Extract on your computer
4. Open `index.html` in a browser

---

## 🖼️ Image Handling

### Current Setup (Online Only)
Currently, all images use **Unsplash URLs**. These require an internet connection to load.

### Making Images Work Offline

#### Method 1: Download Images (Recommended)

1. **Create an images folder:**
```
public/
└── images/
    ├── hero-garden.jpg
    ├── service-maintenance.jpg
    ├── service-lawn.jpg
    ├── service-landscaping.jpg
    ├── service-cleanup.jpg
    ├── about-garden.jpg
    └── testimonial-gardens/
```

2. **Download images from Unsplash:**
   - Open each page in your browser
   - Right-click on images
   - Save as with appropriate names
   - Place in `/public/images/` folder

3. **Update HTML files to use local images:**

**Example for index.html:**
```html
<!-- OLD (requires internet): -->
<img src="https://images.unsplash.com/photo-1584107430473..." alt="Beautiful Garden">

<!-- NEW (works offline): -->
<img src="images/hero-garden.jpg" alt="Beautiful Garden">
```

#### Method 2: Use Placeholder Images

If you don't need the exact Unsplash images, you can use solid color placeholders:

```html
<!-- Simple colored placeholder -->
<div style="width: 100%; height: 400px; background: linear-gradient(135deg, #2F7D32, #6ABF69); border-radius: 1rem;"></div>
```

#### Method 3: Download Images Automatically

I've created a helper HTML file that lists all image URLs. Create `image-downloader.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Image URL List</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 2rem; max-width: 1000px; margin: 0 auto; }
    h1 { color: #2F7D32; }
    .image-item { margin: 2rem 0; padding: 1rem; background: #f5f5f5; border-radius: 8px; }
    .image-item h3 { margin: 0 0 0.5rem 0; color: #333; }
    .image-item a { color: #2F7D32; word-break: break-all; }
    .image-item img { max-width: 100%; height: auto; margin-top: 1rem; border-radius: 4px; }
    .download-btn { display: inline-block; margin-top: 0.5rem; padding: 0.5rem 1rem; background: #2F7D32; color: white; text-decoration: none; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>FreshBloom - Image Download List</h1>
  <p>Right-click each image below and select "Save image as..." to download.</p>

  <div class="image-item">
    <h3>Hero Section - Garden Landscape</h3>
    <p><strong>Suggested filename:</strong> hero-garden.jpg</p>
    <a href="https://images.unsplash.com/photo-1584107430473-c2cf12e0e7f6?w=1920" target="_blank">Open full size</a>
    <img src="https://images.unsplash.com/photo-1584107430473-c2cf12e0e7f6?w=800" alt="Hero Garden">
  </div>

  <div class="image-item">
    <h3>Service - Garden Maintenance</h3>
    <p><strong>Suggested filename:</strong> service-maintenance.jpg</p>
    <a href="https://images.unsplash.com/photo-1765822019705-e13a02ea9bae?w=1080" target="_blank">Open full size</a>
    <img src="https://images.unsplash.com/photo-1765822019705-e13a02ea9bae?w=800" alt="Garden Maintenance">
  </div>

  <div class="image-item">
    <h3>Service - Lawn Care</h3>
    <p><strong>Suggested filename:</strong> service-lawn.jpg</p>
    <a href="https://images.unsplash.com/photo-1598814710826-1bed2fd08c2e?w=1080" target="_blank">Open full size</a>
    <img src="https://images.unsplash.com/photo-1598814710826-1bed2fd08c2e?w=800" alt="Lawn Care">
  </div>

  <div class="image-item">
    <h3>Service - Landscaping</h3>
    <p><strong>Suggested filename:</strong> service-landscaping.jpg</p>
    <a href="https://images.unsplash.com/photo-1772040942277-b194d9d0b648?w=1080" target="_blank">Open full size</a>
    <img src="https://images.unsplash.com/photo-1772040942277-b194d9d0b648?w=800" alt="Landscaping">
  </div>

  <div class="image-item">
    <h3>Service - Seasonal Cleanup</h3>
    <p><strong>Suggested filename:</strong> service-cleanup.jpg</p>
    <a href="https://images.unsplash.com/photo-1733286125300-b4c5563295ad?w=1080" target="_blank">Open full size</a>
    <img src="https://images.unsplash.com/photo-1733286125300-b4c5563295ad?w=800" alt="Seasonal Cleanup">
  </div>

  <div class="image-item">
    <h3>About - Beautiful Garden</h3>
    <p><strong>Suggested filename:</strong> about-garden.jpg</p>
    <a href="https://images.unsplash.com/photo-1766187797240-d7fb7b0f9ec9?w=1080" target="_blank">Open full size</a>
    <img src="https://images.unsplash.com/photo-1766187797240-d7fb7b0f9ec9?w=800" alt="Beautiful Garden">
  </div>

  <h2 style="margin-top: 3rem;">After Downloading All Images</h2>
  <ol>
    <li>Create an <code>images/</code> folder in the <code>public/</code> directory</li>
    <li>Place all downloaded images in that folder</li>
    <li>Update each HTML file to use local paths (e.g., <code>images/hero-garden.jpg</code>)</li>
    <li>Or use the provided search-and-replace script below</li>
  </ol>

  <h2 style="margin-top: 2rem;">Quick Find & Replace</h2>
  <p>Use your code editor to find and replace these URLs:</p>
  <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto;">
Find: https://images.unsplash.com/photo-1584107430473-c2cf12e0e7f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBnYXJkZW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzMzMjUwMzgyfDA&ixlib=rb-4.1.0&q=80&w=1080
Replace: images/hero-garden.jpg

Find: https://images.unsplash.com/photo-1765822019705-e13a02ea9bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBtYWludGVuYW5jZSUyMHBydW5pbmclMjBwbGFudHN8ZW58MXx8fHwxNzczMzM0NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080
Replace: images/service-maintenance.jpg

... (repeat for all images)
  </pre>
</body>
</html>
```

---

## 📋 Complete Image List

### Home Page (index.html)
1. **Hero Background**: hero-garden.jpg
2. **Service 1**: service-maintenance.jpg
3. **Service 2**: service-lawn.jpg
4. **Service 3**: service-landscaping.jpg
5. **Service 4**: service-cleanup.jpg

### Services Page (services.html)
- Same as home page services

### About Page (about.html)
1. **Story Section**: about-garden.jpg

### Other Pages
- Contact, FAQ, Pricing, Legal pages: No images needed

---

## 🔧 Testing Offline

After downloading:

1. **Disconnect from internet** (optional but recommended for testing)
2. **Open index.html** in your browser
3. **Check if:**
   - ✅ All styles load correctly
   - ✅ Navigation works between pages
   - ✅ JavaScript functionality works
   - ⚠️ Images show if downloaded to images/ folder
   - ⚠️ Images won't show if still using Unsplash URLs

---

## 🎨 Alternative: Use SVG Placeholders

If you don't want to download images, you can use SVG pattern placeholders. Add this to your HTML:

```html
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2F7D32;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6ABF69;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#grad)" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
        fill="white" font-size="24" font-family="Arial">
    Beautiful Garden
  </text>
</svg>
```

---

## 📦 Recommended Download Package Structure

```
FreshBloom-Website/
├── index.html
├── pricing.html (NEW!)
├── services.html
├── about.html
├── contact.html
├── faq.html
├── privacy-policy.html
├── terms-conditions.html
├── disclaimer.html
├── cookie-policy.html
├── 404.html
├── README.md
├── DOWNLOAD-GUIDE.md (this file)
├── styles/
│   ├── main.css
│   ├── components.css
│   └── animations.css
├── js/
│   ├── header.js
│   ├── footer.js
│   ├── cookie-banner.js
│   ├── quote-form.js
│   └── main.js
└── images/ (create this and add downloaded images)
    ├── hero-garden.jpg
    ├── service-maintenance.jpg
    ├── service-lawn.jpg
    ├── service-landscaping.jpg
    ├── service-cleanup.jpg
    └── about-garden.jpg
```

---

## ⚡ Quick Start After Download

1. Extract files to a folder
2. Open folder in your code editor (VS Code, Sublime, etc.)
3. Right-click on `index.html` → Open with → Your browser
4. Or use Live Server extension in VS Code

---

## 🌐 Deployment Ready

These files can be uploaded to any static hosting:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub and deploy
- **GitHub Pages**: Push to repository
- **AWS S3**: Upload as static website
- **Any web host**: Upload via FTP to public_html

---

## ✅ Checklist Before Going Live

- [ ] Download or replace all images
- [ ] Test all pages load correctly
- [ ] Test navigation works
- [ ] Test forms (connect to backend)
- [ ] Update contact information
- [ ] Review legal pages with lawyer
- [ ] Test on mobile devices
- [ ] Test in different browsers
- [ ] Set up domain and SSL
- [ ] Configure 404 handling

---

## 🆘 Troubleshooting

### Images Not Showing
- ✅ Check image paths are correct
- ✅ Verify images are in correct folder
- ✅ Check file names match exactly (case-sensitive)
- ✅ Verify image file extensions (.jpg, .png)

### Styles Not Loading
- ✅ Check CSS file paths
- ✅ Verify all CSS files exist in styles/ folder
- ✅ Clear browser cache

### JavaScript Not Working
- ✅ Open browser console (F12)
- ✅ Check for JavaScript errors
- ✅ Verify all JS files in js/ folder
- ✅ Check file paths in HTML

---

**Last Updated:** March 12, 2026
**Status:** Ready for download and deployment!

## 🎉 You're All Set!

Your FreshBloom website is now ready to download, customize, and deploy!
