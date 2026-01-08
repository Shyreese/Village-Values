# Component Reference - Village Values Website

Complete reference for all components in the Village Values website.

## 📑 Table of Contents

- [Navigation Components](#navigation-components)
- [Layout Components](#layout-components)
- [Page Components](#page-components)
- [Section Components](#section-components)
- [UI Components](#ui-components)

---

## Navigation Components

### Navigation.tsx
**Purpose:** Main navigation bar for homepage  
**Location:** `/components/Navigation.tsx`  
**Used in:** Homepage (App.tsx)

**Features:**
- Sticky positioning (follows user on scroll)
- Logo and site title
- Navigation links to all pages
- "Book a Visit" CTA button
- Responsive (hides nav links on mobile)

**Props:** None

**Structure:**
```tsx
<nav className="sticky top-0 z-50">
  <Logo />
  <NavLinks />
  <CTAButton />
</nav>
```

---

### ScrollToTop.tsx
**Purpose:** Back to top button that appears when user scrolls down  
**Location:** `/components/ScrollToTop.tsx`  
**Used in:** All pages

**Features:**
- Appears after scrolling 300px
- Smooth scroll to top
- Animated entrance/exit
- Fixed position (bottom right)

**Props:** None

**Behavior:**
```tsx
// Shows when scrollY > 300
{isVisible && (
  <button onClick={scrollToTop}>
    <ChevronUp />
  </button>
)}
```

---

### BottomNavBar.tsx
**Purpose:** Bottom navigation bar with section quick links  
**Location:** `/components/BottomNavBar.tsx`  
**Used in:** All pages

**Features:**
- Sticky bottom positioning
- Scrolls to specific sections on page
- Customizable sections per page
- Responsive layout

**Props:**
```tsx
interface Props {
  sections: Array<{
    id: string;        // Section ID to scroll to
    label: string;     // Display text
  }>;
}
```

**Usage:**
```tsx
<BottomNavBar 
  sections={[
    { id: 'hero', label: 'Welcome' },
    { id: 'about', label: 'About' }
  ]} 
/>
```

---

## Layout Components

### Footer.tsx
**Purpose:** Site-wide footer with links and contact info  
**Location:** `/components/Footer.tsx`  
**Used in:** All pages

**Sections:**
1. Logo and description
2. Quick links
3. Contact information
4. Social media links
5. Copyright notice

**Props:** None

**Structure:**
```tsx
<footer className="bg-[#232e43]">
  <FooterContent>
    <LogoSection />
    <QuickLinks />
    <ContactInfo />
    <SocialLinks />
  </FooterContent>
  <Copyright />
</footer>
```

---

## Page Components

### ProgramsPage.tsx
**Purpose:** Full programs page  
**Location:** `/components/ProgramsPage.tsx`  
**Route:** `#programs`

**Sections:**
1. Header (with "Programs" highlighted)
2. Hero Section
3. Programs Grid (5 age groups)
4. Daily Schedule
5. Learning Approach
6. Book a Visit CTA
7. Footer

**Internal Functions:**
- `Header()` - Page header with navigation
- `HeroSection()` - Page hero
- `ProgramsGrid()` - Program cards
- `DailySchedule()` - Schedule timeline
- `LearningApproach()` - Approach cards
- `BookVisitCTA()` - Call to action

---

### AboutPage.tsx
**Purpose:** Full about page  
**Location:** `/components/AboutPage.tsx`  
**Route:** `#about`

**Sections:**
1. Header (with "About" highlighted)
2. Hero Section
3. Our Story
4. Our Mission
5. Meet the Team
6. Our Environment (with hover animations)
7. Why Choose Us
8. Connect Section
9. Book a Visit CTA
10. Footer

**Key Features:**
- Environment boxes with hover animations
- Team member cards with images
- Mission statement with decorative elements

---

### EnrollPage.tsx
**Purpose:** Enrollment information page  
**Location:** `/components/EnrollPage.tsx`  
**Route:** `#enroll`

**Sections:**
1. Header (with "Enroll" highlighted)
2. Hero Section
3. How Enrollment Works (4 steps)
4. Programs & Tuition
5. What We Provide
6. Schedule & Hours
7. Book a Visit CTA
8. Footer

**Data Structures:**
```tsx
// Enrollment steps
const steps = [
  { num: '01', title: 'Fill out interest form', description: '...', icon: 'form' },
  { num: '02', title: 'Book a visit', description: '...', icon: 'calendar' },
  // etc.
];

// Tuition rates
const tuitionRates = [
  { program: 'Infants', fullTime: '$1,200/mo', partTime: '$800/mo' },
  // etc.
];
```

---

### CareerPage.tsx
**Purpose:** Careers page  
**Location:** `/components/CareerPage.tsx`  
**Route:** `#careers`

**Sections:**
1. Header (with "Careers" highlighted)
2. Hero Section
3. Why Work With Us
4. Open Positions
5. What We Offer (benefits)
6. How to Apply
7. Footer

**Features:**
- Job listing cards
- Benefit icons with descriptions
- Application process steps

---

### ResourcesPage.tsx
**Purpose:** Resources and support page  
**Location:** `/components/ResourcesPage.tsx`  
**Route:** `#resources`

**Sections:**
1. Header (with "Resources" highlighted)
2. Hero Section (with search)
3. Resource Categories
4. FAQ Section
5. Footer

**State Management:**
```tsx
const [searchQuery, setSearchQuery] = useState('');
const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
```

**Features:**
- Search functionality to filter resources
- Expandable FAQ accordion
- Category filtering
- Download links for resources

---

### ContactPage.tsx
**Purpose:** Contact page with form  
**Location:** `/components/ContactPage.tsx`  
**Route:** `#contact`

**Sections:**
1. Header (with "Contact" highlighted)
2. Hero Section
3. Contact Form (with topic selection)
4. Contact Information
5. Hours of Operation
6. Research & Resource Department
7. Footer

**State Management:**
```tsx
const [selectedTopic, setSelectedTopic] = useState('');
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  message: ''
});
```

**Form Topics:**
- Tours & Visits
- Enrollment
- Programs
- General Questions

---

## Section Components (Homepage)

### Hero.tsx
**Purpose:** Homepage hero section  
**Location:** `/components/Hero.tsx`

**Features:**
- Large headline
- Subheadline
- CTA buttons
- Decorative background elements
- Fade-in animation

**Structure:**
```tsx
<section className="relative overflow-hidden bg-[#f5edda] pt-32">
  <DecorativeElements />
  <HeroContent>
    <Badge />
    <Headline />
    <Description />
    <CTAButtons />
  </HeroContent>
</section>
```

---

### FoundersNote.tsx
**Purpose:** Founder's message section  
**Location:** `/components/FoundersNote.tsx`

**Features:**
- Founder image
- Personal message
- Signature
- Decorative elements

**Layout:**
- Two-column on desktop
- Single column on mobile
- Image on left, text on right

---

### OurPromise.tsx
**Purpose:** Promise/values section  
**Location:** `/components/OurPromise.tsx`

**Features:**
- 4 promise cards
- Icons for each promise
- Hover animations on cards

**Promise Structure:**
```tsx
const promises = [
  { icon: Heart, title: 'Nurture & Care', description: '...' },
  { icon: Users, title: 'Community', description: '...' },
  { icon: Lightbulb, title: 'Learning', description: '...' },
  { icon: Shield, title: 'Safety', description: '...' }
];
```

---

### Programs.tsx
**Purpose:** Programs preview section  
**Location:** `/components/Programs.tsx`

**Features:**
- Program cards (5 age groups)
- Age range and brief description
- "Learn More" links
- Grid layout

**Program Data:**
```tsx
const programs = [
  { title: 'Infants', age: '6 weeks - 12 months', description: '...' },
  { title: 'Toddlers', age: '1 - 2 years', description: '...' },
  // etc.
];
```

---

### Testimonials.tsx
**Purpose:** Parent testimonials section  
**Location:** `/components/Testimonials.tsx`

**Features:**
- Testimonial cards
- Parent names and photos
- Star ratings
- Carousel/slider (3 columns on desktop)

**Testimonial Structure:**
```tsx
const testimonials = [
  { 
    name: 'Sarah Johnson',
    text: 'Amazing experience...',
    rating: 5,
    image: '...'
  },
  // etc.
];
```

---

### BookingForm.tsx
**Purpose:** Visit booking form  
**Location:** `/components/BookingForm.tsx`

**Features:**
- Form fields (name, email, phone, preferred date)
- Form validation
- Submit button
- Success/error states

**Form Fields:**
```tsx
const fields = {
  name: string,
  email: string,
  phone: string,
  preferredDate: string,
  message: string
};
```

---

### Newsletter.tsx
**Purpose:** Newsletter signup section  
**Location:** `/components/Newsletter.tsx`

**Features:**
- Email input field
- Subscribe button
- Description text
- Success message

**Simple Form:**
```tsx
<form onSubmit={handleSubmit}>
  <input type="email" placeholder="Your email" />
  <button>Subscribe</button>
</form>
```

---

### SocialFeed.tsx
**Purpose:** Social media feed section  
**Location:** `/components/SocialFeed.tsx`

**Features:**
- Social media post cards
- Image gallery
- Engagement stats (likes, comments)
- Link to social profiles

**Post Structure:**
```tsx
const posts = [
  {
    image: '...',
    caption: '...',
    likes: 234,
    comments: 12,
    platform: 'instagram'
  },
  // etc.
];
```

---

## UI Components

### ImageWithFallback.tsx
**Purpose:** Image component with fallback handling  
**Location:** `/components/figma/ImageWithFallback.tsx`  
**Status:** Protected file (do not modify)

**Usage:**
```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback 
  src="https://example.com/image.jpg"
  alt="Description"
  className="w-full h-64 object-cover"
/>
```

**Features:**
- Automatic fallback to placeholder
- Error handling
- Loading states
- Same API as `<img>` tag

---

## Common Patterns

### Section Wrapper Pattern
```tsx
function SectionName() {
  return (
    <section 
      id="section-name" 
      className="bg-[color] py-16 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Content */}
      </div>
    </section>
  );
}
```

### Card Component Pattern
```tsx
function Card({ title, description, icon }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
    >
      <Icon className="w-12 h-12 text-[#149496] mb-4" />
      <h3 className="font-['Poppins'] text-[#232e43] mb-2">{title}</h3>
      <p className="font-['Poppins'] text-[#1e7872]">{description}</p>
    </motion.div>
  );
}
```

### Animated Section Pattern
```tsx
function AnimatedSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Content */}
    </motion.div>
  );
}
```

---

## Component Dependencies

### All Pages Import:
- `motion` from 'motion/react'
- `Footer` from './Footer'
- `ScrollToTop` from './ScrollToTop'
- `BottomNavBar` from './BottomNavBar'
- Logo image from `figma:asset/[hash].png`

### Common Icons (from lucide-react):
- `ChevronUp` - Back to top button
- `ChevronDown` - Dropdowns, accordions
- `Heart` - Love/care icon
- `Users` - Community/team icon
- `Phone` - Contact icon
- `Mail` - Email icon
- `MapPin` - Location icon
- `Clock` - Hours/time icon
- `Check` - Checkmarks
- `X` - Close buttons

---

## Reusable Component Examples

### How to Extract a Reusable Component

**Before (repeated code):**
```tsx
// In multiple places
<div className="bg-white rounded-xl p-6 shadow-md">
  <h3>{title}</h3>
  <p>{description}</p>
</div>
```

**After (reusable component):**
```tsx
// /components/Card.tsx
export function Card({ title, description, children }: CardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="font-['Poppins'] text-[#232e43] mb-2">{title}</h3>
      <p className="font-['Poppins'] text-[#1e7872]">{description}</p>
      {children}
    </div>
  );
}

// Usage
import { Card } from './components/Card';

<Card title="Title" description="Description">
  <button>Action</button>
</Card>
```

---

## Component Best Practices

### ✅ DO:
- Keep components small and focused
- Use meaningful names
- Extract reusable patterns
- Add TypeScript types for props
- Use consistent spacing patterns
- Document complex logic

### ❌ DON'T:
- Create giant monolithic components
- Hardcode values that might change
- Duplicate code across components
- Forget to add keys in lists
- Mix too many concerns in one component

---

## Quick Component Checklist

When creating a new component:

- [ ] Named clearly (e.g., `CallToActionSection` not `CTA`)
- [ ] Has TypeScript types for props
- [ ] Uses consistent spacing (`py-16 lg:py-24`)
- [ ] Includes animations where appropriate
- [ ] Responsive on all screen sizes
- [ ] Uses design system colors
- [ ] Follows existing patterns
- [ ] Exported properly
- [ ] Imported in parent component
- [ ] Tested in browser

---

**Component Reference Complete** - For implementation details, see individual component files.
