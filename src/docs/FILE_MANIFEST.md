# Village Values Daycare - Complete File Manifest

**Total Files**: 100+  
**Last Updated**: January 6, 2025

---

## 📂 Core Application Files

### Entry Point
```
/App.tsx                    # Main application with routing logic
```

### Styles
```
/styles/globals.css         # Global styles, Tailwind v4 config, custom CSS
```

---

## 📂 Main Components (`/components`)

### Navigation & Layout
```
Navigation.tsx              # Golden glass nav bar (all pages)
Footer.tsx                  # Footer component (all pages)
BottomNavBar.tsx           # Bottom dock navigation
PageLayout.tsx             # Reusable page layout wrapper
ScrollToTop.tsx            # Scroll to top button
```

### Homepage Components
```
Hero.tsx                   # Hero section with main CTA
Programs.tsx               # Programs overview (3 cards)
OurPromise.tsx            # Our promise section
Testimonials.tsx          # Parent testimonials carousel
BookingForm.tsx           # Brightwheel CTA (homepage)
FoundersNote.tsx          # Founder's message
Newsletter.tsx            # Newsletter signup
SocialFeed.tsx            # Social media feed placeholder
```

### Page Components
```
ProgramsPage.tsx          # Complete Programs page (1,100+ lines)
AboutPage.tsx             # Complete About page (900+ lines)
EnrollPage.tsx            # Complete Enroll page with Brightwheel education
CareerPage.tsx            # Complete Careers page
ResourcesPage.tsx         # Complete Resources page
ContactPage.tsx           # Complete Contact page
```

### Utility Components
```
ProgramCard.tsx           # Individual program card
useInView.ts             # Custom hook for scroll animations
```

### Protected Components
```
figma/ImageWithFallback.tsx   # ⚠️ DO NOT MODIFY - Figma image handler
```

---

## 📂 UI Components (`/components/ui`)

**Note**: These are pre-built shadcn/ui components. Modify with caution.

```
accordion.tsx             # Accordion UI component
alert-dialog.tsx         # Alert dialog modal
alert.tsx                # Alert notifications
aspect-ratio.tsx         # Aspect ratio container
avatar.tsx               # User avatar component
badge.tsx                # Badge/pill component
breadcrumb.tsx           # Breadcrumb navigation
button.tsx               # Button component
calendar.tsx             # Calendar picker
card.tsx                 # Card container
carousel.tsx             # Carousel/slider
chart.tsx                # Chart components
checkbox.tsx             # Checkbox input
collapsible.tsx          # Collapsible sections
command.tsx              # Command menu
context-menu.tsx         # Context menu
dialog.tsx               # Dialog/modal
drawer.tsx               # Drawer component
dropdown-menu.tsx        # Dropdown menu
form.tsx                 # Form wrapper
hover-card.tsx           # Hover card
input-otp.tsx            # OTP input
input.tsx                # Text input
label.tsx                # Form label
menubar.tsx              # Menu bar
navigation-menu.tsx      # Navigation menu
pagination.tsx           # Pagination
popover.tsx              # Popover component
progress.tsx             # Progress bar
radio-group.tsx          # Radio button group
resizable.tsx            # Resizable panels
scroll-area.tsx          # Scrollable area
select.tsx               # Select dropdown
separator.tsx            # Divider line
sheet.tsx                # Sheet/drawer
sidebar.tsx              # Sidebar layout
skeleton.tsx             # Loading skeleton
slider.tsx               # Range slider
sonner.tsx               # Toast notifications
switch.tsx               # Toggle switch
table.tsx                # Data table
tabs.tsx                 # Tab component
textarea.tsx             # Text area input
toggle-group.tsx         # Toggle button group
toggle.tsx               # Toggle button
tooltip.tsx              # Tooltip component
use-mobile.ts            # Mobile detection hook
utils.ts                 # Utility functions
```

---

## 📂 Figma Imports (`/imports`)

### SVG Vector Files
```
svg-03b0ljplgr.ts        # Vector graphics paths
svg-34qkhcxsxe.ts        # Careers page vectors
svg-4f1mwowt5h.ts        # Resources page vectors
svg-5eq722ur0f.ts        # Contact page vectors
svg-5etd43a2t9.ts        # House vector
svg-84pa6cpod5.ts        # Tree vector
svg-8iy3x6elu4.ts        # Homepage vectors
svg-9p6g9itbjb.ts        # About page vectors
svg-cagmn7iq8h.ts        # Vector graphics
svg-cqjhf6dnru.ts        # Vector graphics
svg-djgq00ppfz.ts        # Enroll page vectors
svg-dnxsc6clny.ts        # Vector graphics
svg-dzmv0f9n6o.ts        # Vector graphics
svg-fdvvg9e4yv.ts        # Vector graphics
svg-iqrtxbsms4.ts        # Vector graphics
svg-iw6a9dx0mr.ts        # Vector graphics
svg-js3y2l02vb.ts        # Programs page vectors
svg-keqvt1t3dn.ts        # New vectors
svg-m43v9m7s58.ts        # Vector graphics
svg-mdar2e208t.ts        # Vector graphics
svg-n15349y8je.ts        # Booking form vectors
svg-na88d9mshn.ts        # Vector graphics
svg-oy6vrragej.ts        # Moon vector
svg-p9daff6dvk.ts        # Vector graphics
svg-rrsmrznphl.ts        # Vector graphics
svg-t3ovlu8fzf.ts        # Vector graphics
svg-ty95wsf6gy.ts        # Vector graphics
svg-uj2p21gynf.ts        # Vector graphics
svg-v0v0r198aq.ts        # Vector graphics
svg-wdrfn5ycx.ts         # Vector graphics
svg-xy35jqcyjl.ts        # Vector graphics
```

### Original Figma Component Exports
```
AboutPage.tsx            # Original Figma About export
BookVisitCta2.tsx       # Original booking CTA
CareerPage.tsx          # Original Figma Careers export
CareersContact.tsx      # Original careers contact
ChildcareEducation.tsx  # Original childcare education
ContactUsPage.tsx       # Original Figma Contact export
DownloadsForms.tsx      # Original downloads section
EnrollPage.tsx          # Original Figma Enroll export
Footer-15-5742.tsx      # Original footer
Header.tsx              # Original header
HomePage.tsx            # Original Figma Home export
Hours.tsx               # Original hours section
LocalCommunityServices.tsx  # Original community services
ParentResources.tsx     # Original parent resources
ProgramsBottomDock.tsx  # Original bottom dock
ProgramsPage-13-599.tsx # Original programs variant
ProgramsPage.tsx        # Original Figma Programs export
ResearchContact.tsx     # Original research contact
ResourcePage.tsx        # Original resource page
ResourcesContact.tsx    # Original resources contact
ResourcesHero.tsx       # Original resources hero
ScrollToTop.tsx         # Original scroll component
Vector-1-2518.tsx       # Vector component
Vector-1-2525.tsx       # Vector component
Vector.tsx              # Vector component
VectorFlower1.tsx       # Flower vector
VectorGrass1.tsx        # Grass vector
VectorHouse3.tsx        # House vector
VectorMoon1.tsx         # Moon vector
VectorMoon5.tsx         # Moon variant
VectorMountain1.tsx     # Mountain vector
VectorTree2.tsx         # Tree vector
VectorTree4.tsx         # Tree variant
```

**Note**: Original Figma imports are kept for reference but are NOT used in production. The `/components` folder contains the final, production-ready versions.

---

## 📂 Documentation Files

```
README.md               # Project overview
HANDOFF_GUIDE.md       # Complete handoff documentation (NEW)
QUICK_START.md         # Quick start guide (NEW)
FILE_MANIFEST.md       # This file (NEW)
COMPONENTS.md          # Component documentation
DEPLOYMENT.md          # Deployment instructions
DEVELOPER_GUIDE.md     # Development guidelines
PROGRAMS_PAGE_STRUCTURE.md  # Programs page structure
Attributions.md        # Image attributions
guidelines/Guidelines.md    # Design guidelines
```

---

## 🖼️ Image Assets

### Figma Asset Import Scheme
All images use the special `figma:asset/[hash]` import scheme:

```typescript
// Example usage:
import heroImage from 'figma:asset/63e301fbec260b5ace96d0f4cde75e071b58afd1.png';
```

**Important**: This is a virtual module scheme, NOT a file path. Do not prefix with `./` or `../`.

### Key Images Used
```
Logo: 812e68f0e38eb12d17187ac3fd565ef3be28e713.png
Homepage Hero: 63e301fbec260b5ace96d0f4cde75e071b58afd1.png
Infant Program: 40c81052a73fb88a1608e98df07b890338611765.png
Toddler Program: 2c4d841bf9cc9df2bf98c494766e795cd8d967e0.png
Preschool Program: d18c5a1435a5c3802f7bfaac4a63c39da81a8929.png
About Hero: ba59090be9c12b8024e88e8ac3c5681bf0d086f9.png
Careers Hero: 8702622d69c2aceacd807bbafaed4805316594ff.png
[+ many more]
```

---

## 📦 Package Dependencies

### Required Packages
```json
{
  "react": "latest",
  "react-dom": "latest",
  "typescript": "latest",
  "tailwindcss": "4.0",
  "motion": "latest",
  "lucide-react": "latest",
  "sonner": "2.0.3",
  "react-slick": "latest",
  "react-hook-form": "7.55.0"
}
```

### Special Import Requirements
- `react-hook-form@7.55.0` - Must use version-specific import
- `sonner@2.0.3` - Must use version-specific import for toast
- `motion/react` - New package name (formerly framer-motion)

---

## 🔍 File Usage by Page

### Homepage (`/`)
```
App.tsx
Navigation.tsx
Hero.tsx
Programs.tsx
OurPromise.tsx
Testimonials.tsx
BookingForm.tsx
FoundersNote.tsx
Newsletter.tsx
SocialFeed.tsx
Footer.tsx
```

### Programs Page (`#programs`)
```
App.tsx
Navigation.tsx
ProgramsPage.tsx
BottomNavBar.tsx
Footer.tsx
```

### About Page (`#about`)
```
App.tsx
Navigation.tsx
AboutPage.tsx
BottomNavBar.tsx
Footer.tsx
```

### Enroll Page (`#enroll`)
```
App.tsx
Navigation.tsx
EnrollPage.tsx
BottomNavBar.tsx
Footer.tsx
```

### Careers Page (`#careers`)
```
App.tsx
Navigation.tsx
CareerPage.tsx
BottomNavBar.tsx
Footer.tsx
```

### Resources Page (`#resources`)
```
App.tsx
Navigation.tsx
ResourcesPage.tsx
BottomNavBar.tsx
Footer.tsx
```

### Contact Page (`#contact`)
```
App.tsx
Navigation.tsx
ContactPage.tsx
BottomNavBar.tsx
Footer.tsx
```

---

## 🚫 Files to NEVER Modify

```
/components/figma/ImageWithFallback.tsx
```

This is a protected system file that handles Figma asset loading. Modifying it may break image loading across the entire site.

---

## 📝 Files Requiring Updates Before Launch

### 🔴 CRITICAL Updates Needed

1. **Brightwheel URL Replacements**
   ```
   /components/BookingForm.tsx (line ~186)
   /components/ProgramsPage.tsx (line ~476)
   /components/AboutPage.tsx (line ~822)
   /components/EnrollPage.tsx (multiple)
   /components/ContactPage.tsx (multiple)
   ```

2. **Contact Information**
   ```
   /components/ContactPage.tsx
   /components/Footer.tsx
   /components/CareerPage.tsx
   /components/AboutPage.tsx
   /components/ResourcesPage.tsx
   ```

3. **Google Maps Embed**
   ```
   /components/ContactPage.tsx
   ```

4. **Social Media Links**
   ```
   /components/Footer.tsx (all page footers)
   ```

---

## 📊 File Statistics

| Category | Count |
|----------|-------|
| Main Components | 20+ |
| UI Components | 45+ |
| SVG Vector Files | 30+ |
| Figma Imports | 35+ |
| Documentation | 8 |
| **Total Files** | **100+** |

---

## 🔄 Version Control Notes

### Files Added in Latest Update (Jan 6, 2025)
- `HANDOFF_GUIDE.md`
- `QUICK_START.md`
- `FILE_MANIFEST.md`

### Recent Major Changes
- Replaced all enrollment forms with Brightwheel CTAs
- Added Brightwheel education section to EnrollPage.tsx
- Updated all "Book a Visit" sections to direct to Brightwheel
- Removed "(Variable Hours)" from operating hours across all pages
- Fixed navigation button sizing on CareerPage.tsx

---

## 📞 Support

For questions about specific files, refer to:
- **Component details**: See COMPONENTS.md
- **Setup/deployment**: See DEPLOYMENT.md
- **Code guidelines**: See DEVELOPER_GUIDE.md
- **Quick reference**: See QUICK_START.md

---

**Last Updated**: January 6, 2025  
**Manifest Version**: 1.0  
**Project Status**: ✅ Production Ready
