# Programs Page Structure Documentation
## For Backend Integration

This document outlines the complete structure of the Programs page (`/components/ProgramsPage.tsx`) with all class names, sections, and data points that can be connected to your backend system.

---

## Page Structure Overview

```
ProgramsPage
├── Header (Sticky Navigation)
├── Hero Section
├── Infant Program Section
├── Toddler Program Section
├── Preschool Program Section
├── Drop-In Care Section
└── Book a Visit Form Section
```

---

## 1. HEADER SECTION

**Container Classes:**
- `bg-[#f5edda] sticky top-0 z-50`
- `max-w-[1440px] mx-auto px-6 md:px-12 py-4`

**Logo Section:**
```html
<div class="flex items-center gap-3">
  <img src={logoImage} alt="Village Values" class="size-10 md:size-12" />
</div>
```

**Navigation Links:**
```html
<nav class="hidden md:flex items-center gap-8 font-['Poppins']">
  <a href="/">Home</a>
  <a href="#infant">Programs</a>
  <a href="#">About</a>
  <a href="#">Enroll</a>
  <a href="#">Careers</a>
  <a href="#">Resources</a>
  <a href="#contact">Contact</a>
</nav>
```

**CTA Button:**
```html
<button class="bg-[#149496] text-white px-6 py-2.5 rounded-full uppercase">
  Book a Visit
</button>
```

---

## 2. HERO SECTION

**Section Classes:** `relative overflow-hidden py-16 md:py-24`

**Container:** `max-w-[1440px] mx-auto px-6 md:px-12`

**Grid Layout:** `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`

### Content Column (Left):
```html
<div>
  <!-- Main Headline -->
  <h1 class="font-['Poppins'] text-[#232e43] mb-6" 
      style="font-size: 56px; line-height: 67.2px">
    Programs built to help your child grow
  </h1>
  
  <!-- Description -->
  <p class="font-['Poppins'] text-[#1e7872] mb-8" 
     style="font-size: 20px; line-height: 32.5px">
    From infants to preschoolers, each program supports learning, 
    safety, and fun...
  </p>
  
  <!-- CTA Button -->
  <a href="#infant" 
     class="inline-flex items-center gap-2 bg-[#149496] text-white 
            px-8 py-4 rounded-full uppercase">
    Explore Programs
  </a>
</div>
```

### Image Column (Right):
```html
<div class="rounded-3xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
  <img src={imgHeroImage} alt="Children playing" 
       class="w-full h-[500px] object-cover" />
</div>
```

**Backend Data Points:**
- `hero_title`: Main headline text
- `hero_description`: Description paragraph
- `hero_cta_text`: CTA button text
- `hero_cta_link`: CTA button link
- `hero_image_url`: Hero image source

---

## 3. INFANT PROGRAM SECTION

**Section ID:** `infant`  
**Section Classes:** `bg-white py-16 md:py-24`

**Container:** `max-w-[1440px] mx-auto px-6 md:px-12`

**Grid Layout:** `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`

### Image Column (Left on desktop):
```html
<div class="order-2 lg:order-1 relative">
  <!-- Main Image -->
  <div class="rounded-3xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
    <img src={imgInfantProgram} alt="Infant Program" 
         class="w-full h-[500px] object-cover" />
  </div>
  
  <!-- Age Badge (Floating) -->
  <div class="absolute -top-6 right-0 bg-[#e5795b] rounded-2xl shadow-lg px-6 py-6">
    <p class="font-['Poppins'] text-white" 
       style="font-size: 20px; line-height: 28px">
      6 months– 12 months
    </p>
  </div>
</div>
```

### Content Column (Right on desktop):
```html
<div class="order-1 lg:order-2">
  <!-- Program Title -->
  <h2 class="font-['Poppins'] text-[#232e43] mb-4" 
      style="font-size: 40px; line-height: 52px">
    Infant Program
  </h2>
  
  <!-- Description -->
  <p class="font-['Poppins'] text-[#1e7872] mb-8" 
     style="font-size: 18px; line-height: 29.25px">
    Our infant program provides a calm, safe, and nurturing environment...
  </p>
  
  <!-- Features Grid (2x2) -->
  <div class="grid grid-cols-2 gap-4 mb-8">
    <!-- Feature Card 1: Sleep -->
    <div class="bg-[#f5edda] rounded-2xl p-6">
      <svg class="w-8 h-8 mb-4"><!-- Icon --></svg>
      <h3 class="font-['Poppins'] text-[#232e43] mb-2" 
          style="font-size: 20px; line-height: 28px">Sleep</h3>
      <p class="font-['Poppins'] text-[#1e7872] text-sm">
        Personalized sleep schedules
      </p>
    </div>
    
    <!-- Feature Card 2: Play -->
    <div class="bg-[#f5edda] rounded-2xl p-6">
      <svg class="w-8 h-8 mb-4"><!-- Icon --></svg>
      <h3 class="font-['Poppins'] text-[#232e43] mb-2" 
          style="font-size: 20px; line-height: 28px">Play</h3>
      <p class="font-['Poppins'] text-[#1e7872] text-sm">
        Age-appropriate sensory activities
      </p>
    </div>
    
    <!-- Feature Card 3: Care -->
    <div class="bg-[#f5edda] rounded-2xl p-6">
      <svg class="w-8 h-8 mb-4"><!-- Icon --></svg>
      <h3 class="font-['Poppins'] text-[#232e43] mb-2" 
          style="font-size: 20px; line-height: 28px">Care</h3>
      <p class="font-['Poppins'] text-[#1e7872] text-sm">
        Attentive care and bonding
      </p>
    </div>
    
    <!-- Feature Card 4: Monitoring -->
    <div class="bg-[#f5edda] rounded-2xl p-6">
      <svg class="w-8 h-8 mb-4"><!-- Icon --></svg>
      <h3 class="font-['Poppins'] text-[#232e43] mb-2" 
          style="font-size: 20px; line-height: 28px">Monitoring</h3>
      <p class="font-['Poppins'] text-[#1e7872] text-sm">
        Constant supervision and safety
      </p>
    </div>
  </div>
  
  <!-- CTA Button -->
  <button class="bg-[#149496] text-white px-8 py-4 rounded-full uppercase">
    Book a Visit
  </button>
</div>
```

**Backend Data Points:**
```json
{
  "infant_program": {
    "age_range": "6 months– 12 months",
    "title": "Infant Program",
    "description": "Our infant program provides...",
    "image_url": "path/to/infant-image.png",
    "features": [
      {
        "icon": "sleep-icon",
        "title": "Sleep",
        "description": "Personalized sleep schedules"
      },
      {
        "icon": "play-icon",
        "title": "Play",
        "description": "Age-appropriate sensory activities"
      },
      {
        "icon": "care-icon",
        "title": "Care",
        "description": "Attentive care and bonding"
      },
      {
        "icon": "monitoring-icon",
        "title": "Monitoring",
        "description": "Constant supervision and safety"
      }
    ],
    "cta_text": "Book a Visit",
    "cta_link": "#contact"
  }
}
```

---

## 4. TODDLER PROGRAM SECTION

**Section ID:** `toddler`  
**Section Classes:** `bg-[#f5edda] py-16 md:py-24`

**Container:** `max-w-[1440px] mx-auto px-6 md:px-12`

**Grid Layout:** `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`

### Content Column (Left):
```html
<div>
  <!-- Age Badge -->
  <div class="inline-block bg-[#f6d33a] rounded-full px-4 py-2 mb-6">
    <p class="font-['Poppins'] text-[#232e43]">1–3 years</p>
  </div>
  
  <!-- Program Title -->
  <h2 class="font-['Poppins'] text-[#232e43] mb-4" 
      style="font-size: 40px; line-height: 52px">
    Toddler Program
  </h2>
  
  <!-- Description -->
  <p class="font-['Poppins'] text-[#1e7872] mb-8" 
     style="font-size: 18px; line-height: 29.25px">
    Our toddler program is designed for curious little explorers...
  </p>
  
  <!-- Daily Activities Card -->
  <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
    <!-- Card Header -->
    <div class="flex items-center gap-3 mb-6">
      <svg width="24" height="24"><!-- Icon --></svg>
      <h3 class="font-['Poppins'] text-[#232e43]" 
          style="font-size: 28px; line-height: 39.2px">
        Daily Activities
      </h3>
    </div>
    
    <!-- Activities List -->
    <ul class="space-y-3">
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 rounded-full bg-[#149496]"></div>
        <p class="font-['Poppins'] text-[#1e7872]">
          Guided play and exploration
        </p>
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 rounded-full bg-[#149496]"></div>
        <p class="font-['Poppins'] text-[#1e7872]">
          Social skills development
        </p>
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 rounded-full bg-[#149496]"></div>
        <p class="font-['Poppins'] text-[#1e7872]">
          Motor skills activities
        </p>
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 rounded-full bg-[#149496]"></div>
        <p class="font-['Poppins'] text-[#1e7872]">
          Music and movement
        </p>
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 rounded-full bg-[#149496]"></div>
        <p class="font-['Poppins'] text-[#1e7872]">
          Creative arts and crafts
        </p>
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 rounded-full bg-[#149496]"></div>
        <p class="font-['Poppins'] text-[#1e7872]">
          Story time and language building
        </p>
      </li>
    </ul>
  </div>
  
  <!-- CTA Button -->
  <button class="bg-[#149496] text-white px-8 py-4 rounded-full uppercase">
    Learn More
  </button>
</div>
```

### Image Column (Right):
```html
<div class="rounded-3xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
  <img src={imgToddlerProgram} alt="Toddler Program" 
       class="w-full h-[600px] object-cover" />
</div>
```

**Backend Data Points:**
```json
{
  "toddler_program": {
    "age_range": "1–3 years",
    "badge_color": "#f6d33a",
    "title": "Toddler Program",
    "description": "Our toddler program is designed...",
    "image_url": "path/to/toddler-image.png",
    "daily_activities": [
      "Guided play and exploration",
      "Social skills development",
      "Motor skills activities",
      "Music and movement",
      "Creative arts and crafts",
      "Story time and language building"
    ],
    "cta_text": "Learn More",
    "cta_link": "#contact"
  }
}
```

---

## 5. PRESCHOOL PROGRAM SECTION

**Section ID:** `preschool`  
**Section Classes:** `bg-white py-16 md:py-24`

**Container:** `max-w-[1440px] mx-auto px-6 md:px-12`

### Header (Centered):
```html
<div class="text-center mb-16">
  <!-- Age Badge -->
  <div class="inline-block bg-[#149496] rounded-full px-4 py-2 mb-6">
    <p class="font-['Poppins'] text-white">3–5 years</p>
  </div>
  
  <!-- Title -->
  <h2 class="font-['Poppins'] text-[#232e43] mb-4" 
      style="font-size: 40px; line-height: 52px">
    Preschool Program
  </h2>
  
  <!-- Description -->
  <p class="font-['Poppins'] text-[#1e7872] max-w-3xl mx-auto" 
     style="font-size: 20px; line-height: 28px">
    Our preschool program prepares children for kindergarten...
  </p>
</div>
```

### Content Grid (2 columns):

**Left Column - Curriculum Highlights:**
```html
<div>
  <h3 class="font-['Poppins'] text-[#232e43] mb-6" 
      style="font-size: 28px; line-height: 39.2px">
    Curriculum Highlights
  </h3>
  
  <div class="space-y-6">
    <!-- Curriculum Card 1: Letters & Literacy -->
    <div class="bg-[#f5edda] rounded-2xl p-6 flex gap-4">
      <div class="bg-[#149496] rounded-2xl p-3 h-fit">
        <svg width="24" height="24"><!-- Icon --></svg>
      </div>
      <div>
        <h4 class="font-['Poppins'] text-[#232e43] mb-2" 
            style="font-size: 20px; line-height: 28px">
          Letters & Literacy
        </h4>
        <p class="font-['Poppins'] text-[#1e7872] text-sm">
          Pre-reading skills and letter recognition
        </p>
      </div>
    </div>
    
    <!-- Curriculum Card 2: Numbers & Math -->
    <div class="bg-[#f5edda] rounded-2xl p-6 flex gap-4">
      <div class="bg-[#149496] rounded-2xl p-3 h-fit">
        <svg width="24" height="24"><!-- Icon --></svg>
      </div>
      <div>
        <h4 class="font-['Poppins'] text-[#232e43] mb-2" 
            style="font-size: 20px; line-height: 28px">
          Numbers & Math
        </h4>
        <p class="font-['Poppins'] text-[#1e7872] text-sm">
          Counting, patterns, and early math concepts
        </p>
      </div>
    </div>
    
    <!-- Curriculum Card 3: Science & Discovery -->
    <div class="bg-[#f5edda] rounded-2xl p-6 flex gap-4">
      <div class="bg-[#149496] rounded-2xl p-3 h-fit">
        <svg width="24" height="24"><!-- Icon --></svg>
      </div>
      <div>
        <h4 class="font-['Poppins'] text-[#232e43] mb-2" 
            style="font-size: 20px; line-height: 28px">
          Science & Discovery
        </h4>
        <p class="font-['Poppins'] text-[#1e7872] text-sm">
          Hands-on experiments and sensory learning
        </p>
      </div>
    </div>
    
    <!-- Curriculum Card 4: Arts & Creativity -->
    <div class="bg-[#f5edda] rounded-2xl p-6 flex gap-4">
      <div class="bg-[#149496] rounded-2xl p-3 h-fit">
        <svg width="24" height="24"><!-- Icon --></svg>
      </div>
      <div>
        <h4 class="font-['Poppins'] text-[#232e43] mb-2" 
            style="font-size: 20px; line-height: 28px">
          Arts & Creativity
        </h4>
        <p class="font-['Poppins'] text-[#1e7872] text-sm">
          Self-expression through art, music, and drama
        </p>
      </div>
    </div>
  </div>
  
  <!-- CTA Button -->
  <button class="mt-8 bg-[#e5795b] text-white px-8 py-4 rounded-full uppercase">
    Book a Visit
  </button>
</div>
```

**Right Column - Image:**
```html
<div class="relative">
  <!-- Main Image -->
  <div class="rounded-3xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
    <img src={imgPreschoolProgram} alt="Preschool Program" 
         class="w-full h-[600px] object-cover" />
  </div>
  
  <!-- Floating Badge -->
  <div class="absolute bottom-12 -left-6 bg-[#c49a3a] rounded-2xl shadow-lg px-6 py-6">
    <p class="font-['Poppins'] text-white" 
       style="font-size: 20px; line-height: 28px">
      Kindergarten Ready!
    </p>
  </div>
</div>
```

**Backend Data Points:**
```json
{
  "preschool_program": {
    "age_range": "3–5 years",
    "badge_color": "#149496",
    "title": "Preschool Program",
    "description": "Our preschool program prepares children...",
    "image_url": "path/to/preschool-image.png",
    "floating_badge_text": "Kindergarten Ready!",
    "floating_badge_color": "#c49a3a",
    "curriculum": [
      {
        "icon": "letters-icon",
        "title": "Letters & Literacy",
        "description": "Pre-reading skills and letter recognition"
      },
      {
        "icon": "math-icon",
        "title": "Numbers & Math",
        "description": "Counting, patterns, and early math concepts"
      },
      {
        "icon": "science-icon",
        "title": "Science & Discovery",
        "description": "Hands-on experiments and sensory learning"
      },
      {
        "icon": "arts-icon",
        "title": "Arts & Creativity",
        "description": "Self-expression through art, music, and drama"
      }
    ],
    "cta_text": "Book a Visit",
    "cta_link": "#contact"
  }
}
```

---

## 6. DROP-IN CARE SECTION

**Section ID:** `drop-in`  
**Section Classes:** `bg-[#f5edda] py-16 md:py-24`

**Container:** `max-w-[1440px] mx-auto px-6 md:px-12`

### Header (Centered):
```html
<div class="text-center mb-16">
  <!-- Badge -->
  <div class="inline-block bg-[#e5795b] rounded-full px-4 py-2 mb-6">
    <p class="font-['Poppins'] text-white">Flexible Care</p>
  </div>
  
  <!-- Title -->
  <h2 class="font-['Poppins'] text-[#232e43] mb-4" 
      style="font-size: 40px; line-height: 52px">
    Drop-In Care
  </h2>
  
  <!-- Description -->
  <p class="font-['Poppins'] text-[#1e7872] max-w-3xl mx-auto" 
     style="font-size: 20px; line-height: 28px">
    Life happens, and we're here for you...
  </p>
</div>
```

### Feature Cards Grid (3 columns):
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
  <!-- Feature Card 1: Flexible Hours -->
  <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
    <div class="bg-[#149496] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
      <svg width="32" height="32"><!-- Clock Icon --></svg>
    </div>
    <h3 class="font-['Poppins'] text-[#232e43] mb-3" 
        style="font-size: 20px; line-height: 28px">
      Flexible Hours
    </h3>
    <p class="font-['Poppins'] text-[#1e7872] text-sm">
      Available Monday–Friday, 7 AM – 6 PM
    </p>
  </div>
  
  <!-- Feature Card 2: Book Ahead -->
  <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
    <div class="bg-[#149496] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
      <svg width="32" height="32"><!-- Calendar Icon --></svg>
    </div>
    <h3 class="font-['Poppins'] text-[#232e43] mb-3" 
        style="font-size: 20px; line-height: 28px">
      Book Ahead
    </h3>
    <p class="font-['Poppins'] text-[#1e7872] text-sm">
      Reserve your spot 24 hours in advance
    </p>
  </div>
  
  <!-- Feature Card 3: Same Quality Care -->
  <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
    <div class="bg-[#149496] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
      <svg width="32" height="32"><!-- Shield Icon --></svg>
    </div>
    <h3 class="font-['Poppins'] text-[#232e43] mb-3" 
        style="font-size: 20px; line-height: 28px">
      Same Quality Care
    </h3>
    <p class="font-['Poppins'] text-[#1e7872] text-sm">
      All our programs maintain the same high standards
    </p>
  </div>
</div>
```

### Requirements Card:
```html
<div class="bg-[#f5edda] border-2 border-[#c49a3a] rounded-2xl p-8 mb-8">
  <h3 class="font-['Poppins'] text-[#232e43] mb-6" 
      style="font-size: 28px; line-height: 39.2px">
    What You Need to Know
  </h3>
  
  <ul class="space-y-3">
    <li class="flex items-start gap-3">
      <svg class="w-5 h-5 mt-0.5 shrink-0"><!-- Check Icon --></svg>
      <p class="font-['Poppins'] text-[#1e7872]">
        Children must be between 6 months and 5 years old
      </p>
    </li>
    <li class="flex items-start gap-3">
      <svg class="w-5 h-5 mt-0.5 shrink-0"><!-- Check Icon --></svg>
      <p class="font-['Poppins'] text-[#1e7872]">
        All required forms and immunization records must be on file
      </p>
    </li>
    <li class="flex items-start gap-3">
      <svg class="w-5 h-5 mt-0.5 shrink-0"><!-- Check Icon --></svg>
      <p class="font-['Poppins'] text-[#1e7872]">
        Limited spots available each day — reserve early
      </p>
    </li>
    <li class="flex items-start gap-3">
      <svg class="w-5 h-5 mt-0.5 shrink-0"><!-- Check Icon --></svg>
      <p class="font-['Poppins'] text-[#1e7872]">
        Snacks and meals provided
      </p>
    </li>
  </ul>
</div>
```

### CTA Button:
```html
<div class="text-center">
  <button class="inline-flex items-center gap-2 bg-[#149496] text-white 
                 px-8 py-4 rounded-full uppercase">
    <svg width="20" height="20"><!-- Phone Icon --></svg>
    Contact for Availability
  </button>
</div>
```

**Backend Data Points:**
```json
{
  "drop_in_care": {
    "badge_text": "Flexible Care",
    "badge_color": "#e5795b",
    "title": "Drop-In Care",
    "description": "Life happens, and we're here for you...",
    "features": [
      {
        "icon": "clock-icon",
        "title": "Flexible Hours",
        "description": "Available Monday–Friday, 7 AM – 6 PM"
      },
      {
        "icon": "calendar-icon",
        "title": "Book Ahead",
        "description": "Reserve your spot 24 hours in advance"
      },
      {
        "icon": "shield-icon",
        "title": "Same Quality Care",
        "description": "All our programs maintain the same high standards"
      }
    ],
    "requirements": [
      "Children must be between 6 months and 5 years old",
      "All required forms and immunization records must be on file",
      "Limited spots available each day — reserve early",
      "Snacks and meals provided"
    ],
    "cta_text": "Contact for Availability",
    "cta_link": "#contact"
  }
}
```

---

## 7. BOOK A VISIT FORM SECTION

**Section ID:** `contact`  
**Section Classes:** `bg-[#149496] py-16 md:py-24`

**Container:** `max-w-[600px] mx-auto px-6`

### Form Structure:
```html
<div class="bg-white rounded-3xl shadow-xl p-8 md:p-12">
  <!-- Form Title -->
  <h2 class="font-['Poppins'] text-[#232e43] text-center mb-8" 
      style="font-size: 40px; line-height: 52px">
    Book a Visit
  </h2>
  
  <form class="space-y-6">
    <!-- Name Field -->
    <div>
      <label class="block font-['Poppins'] text-[#232e43] mb-2">
        Parent/Guardian Name
      </label>
      <input type="text" 
             name="parent_name"
             class="w-full px-4 py-3 rounded-lg border border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-[#149496]" 
             placeholder="Your name" />
    </div>
    
    <!-- Email Field -->
    <div>
      <label class="block font-['Poppins'] text-[#232e43] mb-2">
        Email
      </label>
      <input type="email" 
             name="email"
             class="w-full px-4 py-3 rounded-lg border border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-[#149496]" 
             placeholder="your@email.com" />
    </div>
    
    <!-- Phone Field -->
    <div>
      <label class="block font-['Poppins'] text-[#232e43] mb-2">
        Phone
      </label>
      <input type="tel" 
             name="phone"
             class="w-full px-4 py-3 rounded-lg border border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-[#149496]" 
             placeholder="(555) 555-5555" />
    </div>
    
    <!-- Program Selection -->
    <div>
      <label class="block font-['Poppins'] text-[#232e43] mb-2">
        Program Interest
      </label>
      <select name="program_interest"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 
                     focus:outline-none focus:ring-2 focus:ring-[#149496]">
        <option>Select a program</option>
        <option value="infant">Infant Program (6-12 months)</option>
        <option value="toddler">Toddler Program (1-3 years)</option>
        <option value="preschool">Preschool Program (3-5 years)</option>
        <option value="drop-in">Drop-In Care</option>
      </select>
    </div>
    
    <!-- Message Field -->
    <div>
      <label class="block font-['Poppins'] text-[#232e43] mb-2">
        Message
      </label>
      <textarea name="message"
                rows="4"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-[#149496]" 
                placeholder="Tell us a bit about your child..."></textarea>
    </div>
    
    <!-- Submit Button -->
    <button type="submit" 
            class="w-full bg-[#e5795b] text-white py-4 rounded-full 
                   uppercase hover:bg-[#d66b4d] transition-colors">
      Schedule Visit
    </button>
  </form>
</div>
```

**Form Field Names for Backend:**
- `parent_name`: Parent/Guardian name
- `email`: Contact email
- `phone`: Contact phone number
- `program_interest`: Selected program (infant/toddler/preschool/drop-in)
- `message`: Additional message/comments

---

## BRAND COLORS REFERENCE

```css
--teal-primary: #149496
--teal-hover: #1e7872
--gold: #C49A3A
--coral: #E5795B
--coral-hover: #d66b4d
--cream: #F5EDDA
--navy: #232e43
--yellow: #F6D33A
```

---

## TYPOGRAPHY

**Font Family:** `Poppins` (from Google Fonts)

**Font Sizes:**
- Hero Title: 56px / line-height: 67.2px
- Section Titles: 40px / line-height: 52px
- Subsection Titles: 28px / line-height: 39.2px
- Card Titles: 20px / line-height: 28px
- Body Text: 18px / line-height: 29.25px
- Small Text: 14px / line-height: 20px

---

## SPACING SYSTEM

**Section Padding:** `py-16 md:py-24` (4rem mobile, 6rem desktop)

**Container Max Width:** `max-w-[1440px]`

**Container Padding:** `px-6 md:px-12` (1.5rem mobile, 3rem desktop)

**Grid Gaps:** `gap-12` (3rem), `gap-6` (1.5rem), `gap-4` (1rem), `gap-3` (0.75rem)

---

## ANIMATION CLASSES

All sections use Motion (Framer Motion) for animations:

**Initial State:**
```javascript
initial={{ opacity: 0, y: 30 }}
```

**Animate State:**
```javascript
animate={{ opacity: 1, y: 0 }}
```

**Transition:**
```javascript
transition={{ duration: 0.6 }}
```

**Viewport Settings:**
```javascript
viewport={{ once: true }}
```

---

## RESPONSIVE BREAKPOINTS

- **Mobile:** Default (< 768px)
- **Tablet:** `md:` (≥ 768px)
- **Desktop:** `lg:` (≥ 1024px)

**Grid Responsive Pattern:**
```
grid-cols-1        /* Mobile: 1 column */
lg:grid-cols-2     /* Desktop: 2 columns */
md:grid-cols-3     /* Tablet+: 3 columns */
```

---

## API ENDPOINT SUGGESTIONS

For your backend team to integrate, consider these endpoints:

```
GET  /api/programs              - Get all programs
GET  /api/programs/:id          - Get specific program details
POST /api/contact/book-visit    - Submit booking form
GET  /api/programs/infant       - Get infant program data
GET  /api/programs/toddler      - Get toddler program data
GET  /api/programs/preschool    - Get preschool program data
GET  /api/programs/drop-in      - Get drop-in care data
```

---

## FILE LOCATION

**Component:** `/components/ProgramsPage.tsx`  
**Route:** `#programs` (hash-based routing via App.tsx)

---

This structure allows your backend team to create a CMS or API that can dynamically populate all content while maintaining the exact design system and layout.
