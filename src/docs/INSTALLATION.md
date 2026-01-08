# Village Values Daycare - Installation Instructions

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```
**Wait time**: 2-5 minutes depending on internet speed

### Step 2: Start Development Server
```bash
npm run dev
```
**Output**: You should see:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

### Step 3: Open in Browser
Open your browser to: **http://localhost:5173/**

**That's it!** 🎉 The website should be running.

---

## 📋 Prerequisites

Before you start, make sure you have:

✅ **Node.js** (version 18.0 or higher)
   - Check version: `node --version`
   - Download: https://nodejs.org/

✅ **npm** (comes with Node.js)
   - Check version: `npm --version`

✅ **VS Code** (recommended)
   - Download: https://code.visualstudio.com/

---

## 🛠️ Detailed Installation

### 1. Extract the ZIP file
```bash
# Extract to your desired location
unzip village-values-daycare.zip
cd village-values-daycare
```

### 2. Open in VS Code
```bash
# From terminal
code .

# Or: Open VS Code → File → Open Folder → Select village-values-daycare
```

### 3. Install Dependencies
```bash
npm install
```

**What this does**:
- Installs React, TypeScript, Tailwind CSS
- Installs Motion (Framer Motion)
- Installs all UI components
- Sets up development tools

**Expected output**:
```
added 345 packages in 45s
```

### 4. Start Development Server
```bash
npm run dev
```

**What this does**:
- Starts Vite development server
- Enables hot module replacement (changes appear instantly)
- Opens on port 5173 by default

---

## 🎯 Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

---

## 📁 Project Structure

```
village-values-daycare/
├── public/              # Static assets
│   └── vite.svg        # Favicon
├── src/
│   └── main.tsx        # App entry point
├── components/         # All React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── ProgramsPage.tsx
│   └── ...
├── imports/           # Figma imports (SVGs, images)
├── styles/
│   └── globals.css    # Global styles + Tailwind
├── App.tsx            # Main app component
├── index.html         # HTML template
├── package.json       # Dependencies
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript config
└── tailwind.config.js # Tailwind config
```

---

## ⚠️ Troubleshooting

### Problem: `npm install` fails
**Solution 1**: Clear npm cache
```bash
npm cache clean --force
npm install
```

**Solution 2**: Delete `node_modules` and try again
```bash
rm -rf node_modules package-lock.json
npm install
```

**Solution 3**: Use different npm registry
```bash
npm config set registry https://registry.npmjs.org/
npm install
```

---

### Problem: Port 5173 already in use
**Solution**: Use a different port
```bash
npm run dev -- --port 3000
```

---

### Problem: Changes not appearing in browser
**Solution 1**: Hard refresh
- Chrome/Edge: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Firefox: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)

**Solution 2**: Clear browser cache
- Chrome: Settings → Privacy → Clear browsing data

**Solution 3**: Restart dev server
```bash
# Press Ctrl + C to stop
# Then run again:
npm run dev
```

---

### Problem: TypeScript errors
**Solution**: Most TypeScript errors won't prevent the app from running. Check the browser console and terminal for actual errors.

---

### Problem: Images not loading
**Solution**: Make sure you're using the Figma asset import scheme correctly:
```tsx
// Correct:
import img from "figma:asset/hash.png"

// Wrong:
import img from "./figma:asset/hash.png"
```

---

## 🏗️ Building for Production

### Create Production Build
```bash
npm run build
```

**What this does**:
- Compiles TypeScript to JavaScript
- Optimizes and minifies code
- Bundles all assets
- Creates `/dist` folder with production files

**Output location**: `/dist` folder

### Preview Production Build
```bash
npm run preview
```

**Opens at**: http://localhost:4173/

### Deploy Production Build
The `/dist` folder contains everything needed for deployment. Upload these files to:
- Netlify
- Vercel
- AWS S3
- Any static hosting service

---

## 🔧 VS Code Extensions (Recommended)

Install these for the best development experience:

1. **ES7+ React/Redux/React-Native snippets**
   - Publisher: dsznajder

2. **Tailwind CSS IntelliSense**
   - Publisher: Bradlc

3. **TypeScript React Code Snippets**
   - Publisher: infeng

4. **Prettier - Code formatter**
   - Publisher: Prettier

5. **ESLint**
   - Publisher: Microsoft

---

## 📱 Testing Responsive Design

### In Browser Dev Tools
1. Open Chrome DevTools: `F12` or `Ctrl + Shift + I`
2. Click device toolbar icon (or `Ctrl + Shift + M`)
3. Select device: iPhone, iPad, etc.

### Recommended Test Devices
- iPhone 12/13/14 (390x844)
- iPad (768x1024)
- Desktop (1920x1080)

---

## 🌐 Testing in Different Browsers

### During Development
Your app will open at: `http://localhost:5173/`

**Test in**:
- Chrome
- Firefox
- Safari (Mac only)
- Edge

### Find Your Local Network Address
```bash
npm run dev -- --host
```

**Output**:
```
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.100:5173/
```

Use the Network URL to test on mobile devices on the same WiFi.

---

## ✅ Success Checklist

After installation, verify:

- [ ] `npm install` completed without errors
- [ ] `npm run dev` starts the server
- [ ] Browser opens to http://localhost:5173/
- [ ] Homepage loads with golden navigation bar
- [ ] All 7 pages are accessible (Home, Programs, About, Enroll, Careers, Resources, Contact)
- [ ] Images are loading
- [ ] Animations are working
- [ ] Console has no critical errors

---

## 🆘 Still Having Issues?

### Check Node Version
```bash
node --version
# Should be v18.0.0 or higher
```

### Check npm Version
```bash
npm --version
# Should be 9.0.0 or higher
```

### Update Node (if needed)
Download latest from: https://nodejs.org/

---

## 📞 Next Steps

After successful installation:

1. ✅ Review **PLACEHOLDER_REPLACEMENTS.md** for required updates
2. ✅ Replace Brightwheel URLs
3. ✅ Update contact information
4. ✅ Test all forms and links
5. ✅ Run `npm run build` to test production build

---

## 🎉 You're Ready to Develop!

The development environment is now set up and running.

**Happy coding!** 🚀

---

**Need Help?**
- Check HANDOFF_GUIDE.md for complete documentation
- Check QUICK_START.md for quick reference
- Check PLACEHOLDER_REPLACEMENTS.md for required updates
