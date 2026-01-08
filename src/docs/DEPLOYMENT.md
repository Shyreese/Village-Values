# Deployment Guide - Village Values Website

This guide covers deploying the Village Values website to production.

## 🎯 Pre-Deployment Checklist

### Code Quality
- [ ] All pages load without errors
- [ ] No console errors in browser
- [ ] All navigation links work correctly
- [ ] Active page highlighting works on all pages
- [ ] Sticky navigation works on all pages
- [ ] Back to Top button appears and functions
- [ ] Bottom navigation scrolls to correct sections
- [ ] All animations trigger properly

### Responsive Testing
- [ ] Test on mobile (375px - 768px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (1024px+)
- [ ] Test on actual devices (iOS, Android)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

### Performance
- [ ] Images are optimized
- [ ] No unnecessary console.logs
- [ ] Build completes without warnings
- [ ] Bundle size is reasonable

### Content
- [ ] All text is spelled correctly
- [ ] All images have alt text
- [ ] Contact information is accurate
- [ ] All links point to correct destinations

## 🏗️ Build Process

### Production Build

```bash
# Install dependencies
npm install

# Create production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `/dist` folder.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel:**
- Zero configuration for React apps
- Automatic HTTPS
- Global CDN
- Free tier available
- Excellent performance

**Steps:**

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
# From project root
vercel

# Or for production
vercel --prod
```

3. **Configure (if needed):**
Create `vercel.json` in root:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

4. **Custom Domain:**
- Go to Vercel dashboard
- Add domain in project settings
- Follow DNS configuration instructions

**Deployment URL:**
- Preview: `https://village-values-[hash].vercel.app`
- Production: `https://villagevalues.com` (with custom domain)

---

### Option 2: Netlify

**Why Netlify:**
- Great for static sites
- Automatic HTTPS
- Form handling built-in
- Free tier available

**Steps:**

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Deploy:**
```bash
# Build first
npm run build

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

3. **Configure:**
Create `netlify.toml` in root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

4. **Via GitHub (Alternative):**
- Push code to GitHub
- Connect repository in Netlify dashboard
- Configure build settings:
  - Build command: `npm run build`
  - Publish directory: `dist`

---

### Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json:**
```json
{
  "homepage": "https://yourusername.github.io/village-values",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Configure Vite:**
Update `vite.config.js`:
```js
export default {
  base: '/village-values/'
}
```

4. **Deploy:**
```bash
npm run deploy
```

5. **Enable in GitHub:**
- Go to repository settings
- Scroll to "GitHub Pages"
- Select `gh-pages` branch
- Save

---

### Option 4: Traditional Web Hosting

**For shared hosting (cPanel, etc.):**

1. **Build the project:**
```bash
npm run build
```

2. **Upload files:**
- Upload entire `dist` folder contents to your web root (usually `public_html` or `www`)
- Do NOT upload `node_modules`, `src`, or other dev files

3. **Configure .htaccess** (for Apache):
Create `.htaccess` in web root:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

4. **Test:**
Visit your domain and verify all pages work.

---

### Option 5: AWS S3 + CloudFront

**For enterprise deployments:**

1. **Build:**
```bash
npm run build
```

2. **Create S3 Bucket:**
- Name: `village-values-website`
- Enable static website hosting
- Upload `dist` folder contents

3. **Set Bucket Policy:**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::village-values-website/*"
    }
  ]
}
```

4. **Create CloudFront Distribution:**
- Origin: Your S3 bucket
- Enable HTTPS
- Set default root object: `index.html`
- Add custom error page: 404 → `/index.html` (for routing)

5. **Configure Domain:**
- Add CNAME record pointing to CloudFront distribution
- Add SSL certificate in AWS Certificate Manager

---

## 🌐 Environment Configuration

### Environment Variables

If you need environment variables (API keys, etc.):

1. **Create `.env` file:**
```env
VITE_API_URL=https://api.villagevalues.com
VITE_CONTACT_EMAIL=info@villagevalues.com
```

2. **Use in code:**
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

3. **Production setup:**
- Vercel: Add in dashboard under "Environment Variables"
- Netlify: Add in dashboard under "Environment Variables"
- Others: Follow platform-specific instructions

⚠️ **Never commit `.env` files with real credentials!**

---

## 🔒 Security Considerations

### Before Deployment:

1. **Remove console.logs:**
```bash
# Search for console.log statements
grep -r "console.log" src/
```

2. **Check for hardcoded credentials:**
- Search for API keys
- Search for passwords
- Search for email addresses (if sensitive)

3. **Enable HTTPS:**
All major platforms (Vercel, Netlify) enable HTTPS automatically.

4. **Set Security Headers:**
Add to `vercel.json` or `netlify.toml`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

---

## 📊 Performance Optimization

### Before Deployment:

1. **Optimize Images:**
- Compress images to WebP format if possible
- Ensure images aren't larger than needed
- Use appropriate dimensions

2. **Code Splitting:**
Already handled by Vite build process.

3. **Enable Compression:**
Most platforms enable gzip/brotli automatically.

4. **Check Bundle Size:**
```bash
npm run build

# Check dist folder size
du -sh dist/
```

Target: < 5MB for entire dist folder

---

## 🔄 Continuous Deployment

### GitHub Actions (Automated Deploy)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

**Setup:**
1. Get Vercel token from account settings
2. Add secrets to GitHub repository settings
3. Push to main branch → automatic deployment

---

## 🧪 Post-Deployment Testing

After deployment, verify:

### Functionality
- [ ] All pages load correctly
- [ ] Navigation works (all links)
- [ ] Forms submit (if applicable)
- [ ] Images load
- [ ] Animations work
- [ ] Mobile menu works (if implemented)

### Performance
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Check page load time (aim for < 3 seconds)
- [ ] Verify on slow 3G connection

### SEO
- [ ] Title tags correct
- [ ] Meta descriptions present
- [ ] Images have alt text
- [ ] Sitemap present (if applicable)

### Cross-Browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome)

---

## 📱 Custom Domain Setup

### DNS Configuration

**For most domain registrars:**

1. **Vercel:**
   - Add A records: `76.76.21.21`
   - Add CNAME: `cname.vercel-dns.com`

2. **Netlify:**
   - Add A record: `75.2.60.5`
   - Add CNAME: `[your-site].netlify.app`

3. **Verify:**
   - Changes may take up to 48 hours
   - Use `dig yourdomain.com` to check propagation

---

## 🐛 Troubleshooting Deployment Issues

### Build Fails

**Error: Module not found**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: Out of memory**
```bash
# Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Routes Don't Work (404 errors)

- Ensure platform is configured for SPA routing
- Check `.htaccess`, `vercel.json`, or `netlify.toml`
- Verify all routes redirect to `index.html`

### Images Not Loading

- Check image paths are correct in production
- Verify `figma:asset` imports work in build
- Check file permissions if using traditional hosting

### Slow Load Times

- Enable compression (gzip/brotli)
- Use CDN
- Optimize images
- Check bundle size
- Enable caching headers

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html

---

## ✅ Final Checklist

Before going live:

- [ ] All functionality tested
- [ ] Responsive on all devices
- [ ] No console errors
- [ ] Performance optimized
- [ ] Security headers set
- [ ] HTTPS enabled
- [ ] Custom domain configured
- [ ] Contact information verified
- [ ] Backup of code in version control
- [ ] Monitoring set up (optional)

---

**Your site is ready to launch! 🚀**
