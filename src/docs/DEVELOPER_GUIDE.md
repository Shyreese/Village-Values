# Developer Guide - Village Values Website

Quick reference guide for developers working on the Village Values daycare website.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` (or the port shown in terminal)

## 📋 Essential Commands

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint (if configured)
```

## 🎨 Design Tokens Quick Reference

```scss
// Colors
$teal-primary:    #149496
$teal-hover:      #1e7872
$gold:            #c49a3a
$coral:           #e5795b
$cream:           #f5edda
$navy:            #232e43

// Common Tailwind Classes
bg-[#f5edda]      // Cream background
bg-[#149496]      // Teal background
text-[#232e43]    // Navy text
text-[#149496]    // Teal text (active state)

// Spacing Patterns
py-16 lg:py-24    // Section vertical padding
px-6 lg:px-20     // Container horizontal padding
max-w-[1200px]    // Max content width
```

## 🗂️ File Organization

```
Quick Access:
├── App.tsx                    # 🔀 Routing logic
├── /components
│   ├── Navigation.tsx         # 🏠 Homepage nav
│   ├── [PageName]Page.tsx    # 📄 Individual pages
│   ├── Footer.tsx            # 🦶 Site footer
│   ├── ScrollToTop.tsx       # ⬆️ Back to top button
│   └── BottomNavBar.tsx      # 📱 Bottom nav component
└── /styles
    └── globals.css           # 🎨 Global styles & typography
```

## 🔗 Navigation System

### Adding Navigation to Existing Pages
Every page should have this header structure:

```tsx
function Header() {
  return (
    <header className="bg-[#f5edda] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-5 flex items-center justify-between">
        {/* Logo - goes to homepage */}
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
            window.scrollTo(0, 0);
          }}
          className="cursor-pointer shrink-0 flex items-center gap-3"
        >
          <img src={logoImage} alt="Village Values" className="h-12 w-12 rounded-full" />
          <h1 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-3xl hidden sm:block">
            Village Values
          </h1>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-['Poppins'] text-[#232e43]">
          <a href="/" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo(0, 0); }} 
             className="hover:text-[#149496] transition-colors">
            Home
          </a>
          <a href="#programs" className="hover:text-[#149496] transition-colors">Programs</a>
          <a href="#about" className="hover:text-[#149496] transition-colors">About</a>
          <a href="#enroll" className="hover:text-[#149496] transition-colors">Enroll</a>
          <a href="#careers" className="hover:text-[#149496] transition-colors">Careers</a>
          <a href="#resources" className="hover:text-[#149496] transition-colors">Resources</a>
          <a href="#contact" className="hover:text-[#149496] transition-colors">Contact</a>
        </nav>

        {/* CTA Button */}
        <motion.a
          href="#booking"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#149496] text-white px-6 py-2.5 rounded-full font-['Poppins'] text-base tracking-wider uppercase hover:bg-[#1e7872] transition-colors"
        >
          Book a Visit
        </motion.a>
      </div>
    </header>
  );
}
```

**To highlight the active page:**
Add `text-[#149496]` class to the current page's link:
```tsx
// Example for About page
<a href="#about" className="text-[#149496] hover:text-[#149496] transition-colors">About</a>
```

### Adding a New Page

**1. Create the component file:**
```tsx
// /components/NewPage.tsx
import { motion } from 'motion/react';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { BottomNavBar } from './BottomNavBar';
import logoImage from 'figma:asset/[hash].png';

export function NewPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white overflow-x-hidden"
    >
      <Header />
      {/* Your sections here */}
      <Footer />
      <ScrollToTop />
      <BottomNavBar sections={[
        { id: 'section1', label: 'Section 1' },
        { id: 'section2', label: 'Section 2' }
      ]} />
    </motion.div>
  );
}

function Header() {
  // Use header structure from above
}
```

**2. Add route in App.tsx:**
```tsx
import { NewPage } from './components/NewPage';

// In useEffect hash handler:
else if (hash === '#newpage') {
  setCurrentPage('newpage');
}

// In render logic:
if (currentPage === 'newpage') {
  return <NewPage />;
}
```

**3. Add navigation links:**
Add to all page headers:
```tsx
<a href="#newpage" className="hover:text-[#149496] transition-colors">New Page</a>
```

## 🎭 Animation Patterns

### Standard Fade In (on load)
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
```

### Slide Up (on scroll into view)
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

### Stagger Children
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Button Hover/Tap
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-[#149496] text-white px-6 py-2.5 rounded-full"
>
  Click Me
</motion.button>
```

### Card Lift on Hover
```tsx
<motion.div
  whileHover={{ y: -8 }}
  className="bg-white rounded-xl p-6 shadow-md transition-shadow hover:shadow-xl"
>
```

## 📐 Layout Patterns

### Standard Section
```tsx
<section className="bg-[#f5edda] py-16 lg:py-24 relative overflow-hidden">
  <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
    {/* Section content */}
  </div>
</section>
```

### Section with Decorative Elements
```tsx
<section className="bg-white py-16 lg:py-24 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-10 left-10 w-32 h-32 opacity-50">
    <DecorativeIcon />
  </div>
  
  <div className="max-w-[1200px] mx-auto px-6 lg:px-20 relative z-10">
    {/* Content */}
  </div>
</section>
```

### Grid Layouts
```tsx
{/* 2 columns on md, 3 on lg */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item) => (
    <div key={item.id}>{/* Card */}</div>
  ))}
</div>

{/* 2 columns on lg, 4 on xl */}
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
  {items.map((item) => (
    <div key={item.id}>{/* Card */}</div>
  ))}
</div>
```

## 🖼️ Image Handling

### Figma Assets
```tsx
// Raster images (PNG, JPG) - use figma:asset scheme
import heroImage from "figma:asset/abc123def456.png";

// SVG imports - use relative path
import decorativeSvg from "./imports/svg-xyz789";

// Usage
<img src={heroImage} alt="Description" />
<DecorativeSvgComponent />
```

### New Images (not from Figma)
```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback 
  src="https://example.com/image.jpg"
  alt="Description"
  className="w-full h-64 object-cover rounded-xl"
/>
```

## 🎯 Common Tasks

### Update a Section's Content
1. Find the component file (e.g., `/components/AboutPage.tsx`)
2. Locate the section function (e.g., `OurStorySection()`)
3. Update the content within the JSX
4. Save - hot reload will update automatically

### Change a Color
1. Search for the hex code (e.g., `#149496`)
2. Replace with new color
3. Or update in multiple places if it's a theme color

### Add a New Section to a Page
```tsx
// 1. Create section function
function NewSection() {
  return (
    <section id="new-section" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Poppins'] text-[#232e43] text-4xl text-center mb-12"
        >
          New Section Title
        </motion.h2>
        {/* Content */}
      </div>
    </section>
  );
}

// 2. Add to page render
export function AboutPage() {
  return (
    <motion.div>
      <Header />
      {/* existing sections */}
      <NewSection />
      <Footer />
      <ScrollToTop />
      <BottomNavBar sections={[...]} />
    </motion.div>
  );
}

// 3. Add to BottomNavBar (if needed)
<BottomNavBar sections={[
  // existing sections
  { id: 'new-section', label: 'New Section' }
]} />
```

### Modify Bottom Navigation
Update the `sections` prop in each page:
```tsx
<BottomNavBar 
  sections={[
    { id: 'section-id', label: 'Display Name' },
    { id: 'another-section', label: 'Another Name' }
  ]} 
/>
```
The `id` must match the section's `id` attribute for smooth scrolling.

## 🔍 Debugging Tips

### Navigation Not Working
- Check hash change handler in `App.tsx`
- Verify route condition matches hash
- Check browser console for errors

### Animations Not Triggering
- Ensure Motion component is imported
- Check `viewport={{ once: true }}` is set for scroll animations
- Verify parent has `overflow: visible` or `overflow: hidden` as needed

### Styles Not Applying
- Check Tailwind class spelling
- Verify custom classes are in `/styles/globals.css`
- Check for conflicting classes
- Clear browser cache

### Images Not Loading
- Verify `figma:asset` import path is correct
- Check SVG import path is relative
- Look for console errors about missing files

## 🚨 Common Mistakes to Avoid

❌ **DON'T:**
```tsx
// Don't use font size/weight classes
<h1 className="text-4xl font-bold">Title</h1>

// Don't create tailwind.config.js
// (uses Tailwind v4 with config in CSS)

// Don't use inline styles
<div style={{ color: '#149496' }}>

// Don't forget viewport prop for scroll animations
<motion.div whileInView={{ opacity: 1 }}>
```

✅ **DO:**
```tsx
// Use semantic HTML with global styles
<h1 className="font-['Poppins'] text-[#232e43]">Title</h1>

// Use Tailwind classes for colors
<div className="text-[#149496]">

// Include viewport for scroll animations
<motion.div 
  whileInView={{ opacity: 1 }} 
  viewport={{ once: true }}
>
```

## 📞 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Page not routing | Check hash handler in `App.tsx` useEffect |
| Nav not sticky | Ensure `sticky top-0 z-50` classes present |
| Active page not highlighted | Add `text-[#149496]` to current page link |
| Back to top not working | Check `ScrollToTop` component is imported |
| Bottom nav not scrolling | Verify section IDs match BottomNavBar sections |
| Animations jerky | Check parent elements have `overflow-hidden` |
| Build failing | Run `npm install` to ensure dependencies installed |

## 📚 Additional Resources

- [Motion Documentation](https://motion.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons/)
- [React Docs](https://react.dev/)

## 🎓 Best Practices

1. **Always test responsive** - Check mobile, tablet, desktop
2. **Use semantic HTML** - `<section>`, `<nav>`, `<header>`, `<footer>`
3. **Maintain consistency** - Follow existing patterns
4. **Comment complex logic** - Help future developers
5. **Keep functions small** - One section per function when possible
6. **Use meaningful names** - Clear variable and function names
7. **Test before committing** - Ensure no console errors

---

**Quick Reference Complete** - For full details, see `README.md`
