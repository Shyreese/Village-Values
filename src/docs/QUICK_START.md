# Village Values Daycare - Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to `http://localhost:3000`

---

## ⚠️ BEFORE DEPLOYMENT - Replace Placeholders

### 1. Brightwheel URL (CRITICAL)
**Search for**: `href="#brightwheel"`

**Replace in these files**:
- `/components/BookingForm.tsx`
- `/components/ProgramsPage.tsx`
- `/components/AboutPage.tsx`
- `/components/EnrollPage.tsx`
- `/components/ContactPage.tsx`

**Replace with**: Your actual Brightwheel enrollment URL

---

### 2. Contact Information
**Update in**:
- `/components/ContactPage.tsx`
- `/components/Footer.tsx`
- All page footers

**Replace**:
- Address: `123 Main Street, Anytown, ST 12345`
- Phone: `(555) 123-4567`
- Email: `hello@villagevalues.com`

---

### 3. Google Maps
**File**: `/components/ContactPage.tsx`
**Search for**: `<!-- Google Maps Embed -->`
**Action**: Add your actual Google Maps embed code

---

### 4. Social Media Links
**Files**: Footer on all pages
**Search for**: `href="#"`
**Replace**: Facebook, Instagram, Twitter links

---

## 📄 Pages Overview

| Page | URL | Status |
|------|-----|--------|
| Homepage | `/` | ✅ Complete |
| Programs | `#programs` | ✅ Complete |
| About | `#about` | ✅ Complete |
| Enroll | `#enroll` | ✅ Complete |
| Careers | `#careers` | ✅ Complete |
| Resources | `#resources` | ✅ Complete |
| Contact | `#contact` | ✅ Complete |

---

## 🎨 Design System Quick Reference

### Colors
```css
Teal:   #149496
Gold:   #C49A3A
Coral:  #E5795B
Cream:  #F5EDDA
Navy:   #232e43
```

### Font
- **Poppins** (all weights via Google Fonts)

### Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

---

## 📦 Key Dependencies

```json
{
  "react": "latest",
  "motion": "latest",
  "tailwindcss": "4.0",
  "lucide-react": "latest",
  "sonner": "2.0.3"
}
```

---

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production Build
npm run build

# Preview Production Build
npm run preview
```

---

## 📚 Full Documentation

- **HANDOFF_GUIDE.md** - Complete handoff documentation
- **COMPONENTS.md** - Component details
- **DEPLOYMENT.md** - Deployment instructions
- **DEVELOPER_GUIDE.md** - Developer guidelines

---

## ✅ Pre-Launch Checklist

- [ ] Replace Brightwheel URLs
- [ ] Update contact info
- [ ] Add Google Maps
- [ ] Update social links
- [ ] Test all forms
- [ ] Test mobile responsive
- [ ] Run performance audit
- [ ] Add analytics

---

**Questions?** See HANDOFF_GUIDE.md for complete details.

**Status**: ✅ Ready for Production (after placeholder replacement)
