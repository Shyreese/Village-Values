# Placeholder Replacements - Action Required

**Priority**: 🔴 CRITICAL - Must complete before production deployment

---

## 1. Brightwheel URLs

### Current State
All Brightwheel links currently use placeholder: `href="#brightwheel"`

### What to Replace
Replace `#brightwheel` with your actual Brightwheel enrollment/booking URL

### Files to Update

#### `/components/BookingForm.tsx`
**Line ~186**
```tsx
// BEFORE:
<motion.a
  href="#brightwheel"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="inline-block w-full md:w-auto bg-[#e5795b] text-white px-12 py-4 rounded-2xl hover:bg-[#d66d4f] transition-colors shadow-lg"
>
  Go to Brightwheel
</motion.a>

// AFTER:
<motion.a
  href="https://schools.mybrightwheel.com/your-school-id"  // Replace with actual URL
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="inline-block w-full md:w-auto bg-[#e5795b] text-white px-12 py-4 rounded-2xl hover:bg-[#d66d4f] transition-colors shadow-lg"
>
  Go to Brightwheel
</motion.a>
```

#### `/components/ProgramsPage.tsx`
**Line ~476** (in BookAVisit function)
```tsx
// BEFORE:
<motion.a
  href="#brightwheel"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="inline-block w-full md:w-auto bg-[#e5795b] text-white px-12 py-4 rounded-full font-['Poppins'] uppercase tracking-wider hover:bg-[#d66b4d] transition-colors shadow-lg"
>
  Book on Brightwheel
</motion.a>

// AFTER:
<motion.a
  href="https://schools.mybrightwheel.com/your-school-id"  // Replace with actual URL
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="inline-block w-full md:w-auto bg-[#e5795b] text-white px-12 py-4 rounded-full font-['Poppins'] uppercase tracking-wider hover:bg-[#d66b4d] transition-colors shadow-lg"
>
  Book on Brightwheel
</motion.a>
```

#### `/components/AboutPage.tsx`
**Line ~822** (in BookAVisit function)
```tsx
// Same replacement as ProgramsPage.tsx
```

#### `/components/EnrollPage.tsx`
**Multiple locations** - Search for all instances of `href="#brightwheel"`

#### `/components/ContactPage.tsx`
**Multiple locations** - Search for all instances of `href="#brightwheel"`

### Quick Find & Replace
```bash
# Search for all instances:
grep -r '#brightwheel' /components/

# Count instances:
grep -r '#brightwheel' /components/ | wc -l
```

---

## 2. Contact Information

### Current Placeholders
```
Address: 123 Main Street, Anytown, ST 12345
Phone: (555) 123-4567
Email: hello@villagevalues.com
Email (Careers): careers@villagevalues.com
```

### Files to Update

#### `/components/ContactPage.tsx`
**Search for:**
- `123 Main Street`
- `Anytown, ST 12345`
- `(555) 123-4567`
- `hello@villagevalues.com`

**Replace with** your actual:
- Street address
- City, State, ZIP
- Phone number
- Email address

#### `/components/Footer.tsx`
**Same placeholders** - Update in footer contact section

#### `/components/CareerPage.tsx`
**Search for:**
- `careers@villagevalues.com`

#### `/components/AboutPage.tsx`
**Footer section** - Same contact info

#### `/components/ResourcesPage.tsx`
**Footer section** - Same contact info

---

## 3. Google Maps Embed

### Current State
Placeholder map section in ContactPage.tsx

### What to Do

#### `/components/ContactPage.tsx`
**Find:** Location & Hours section

**Current Code:**
```tsx
<div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
  <p className="font-['Poppins'] text-gray-500">Google Maps Embed Here</p>
</div>
```

**Replace with:**
```tsx
<div className="bg-gray-200 rounded-2xl h-96 overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Village Values Daycare Location"
  ></iframe>
</div>
```

**How to get Google Maps embed code:**
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address
3. Click "Share" button
4. Click "Embed a map" tab
5. Copy the iframe code
6. Extract the `src` URL from the iframe
7. Use that URL in the code above

---

## 4. Social Media Links

### Current State
All social links use placeholder: `href="#"`

### Files to Update

#### All Page Footers
**Search for:** Social media icon links in footer

**Current:**
```tsx
<a href="#" className="text-white/60 hover:text-white transition-colors">
  <FacebookIconSmall />
</a>
<a href="#" className="text-white/60 hover:text-white transition-colors">
  <InstagramIconSmall />
</a>
<a href="#" className="text-white/60 hover:text-white transition-colors">
  <TwitterIconSmall />
</a>
```

**Replace with:**
```tsx
<a 
  href="https://facebook.com/YourPageName" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/60 hover:text-white transition-colors"
>
  <FacebookIconSmall />
</a>
<a 
  href="https://instagram.com/YourUsername" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/60 hover:text-white transition-colors"
>
  <InstagramIconSmall />
</a>
<a 
  href="https://twitter.com/YourUsername" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/60 hover:text-white transition-colors"
>
  <TwitterIconSmall />
</a>
```

**Files with footer:**
- `/components/Footer.tsx`
- `/components/ProgramsPage.tsx`
- `/components/AboutPage.tsx`
- `/components/EnrollPage.tsx`
- `/components/CareerPage.tsx`
- `/components/ResourcesPage.tsx`
- `/components/ContactPage.tsx`

---

## 5. Newsletter Signup

### Current State
Form prevents default submission, no backend integration

### What to Do

#### `/components/Newsletter.tsx`

**Current:**
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Newsletter signup:', email);
  setEmail('');
};
```

**Options:**

**Option A: Mailchimp**
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('YOUR_MAILCHIMP_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    
    if (response.ok) {
      toast.success('Thanks for subscribing!');
      setEmail('');
    }
  } catch (error) {
    toast.error('Something went wrong. Please try again.');
  }
};
```

**Option B: ConvertKit**
```tsx
// Similar to Mailchimp, use ConvertKit API endpoint
```

**Option C: Custom Backend**
```tsx
// POST to your own API endpoint
```

---

## 6. Career Application Form

### Current State
File upload input without backend handler

### What to Do

#### `/components/CareerPage.tsx`

**Current:**
```tsx
<input
  type="file"
  accept=".pdf,.doc,.docx"
  className="..."
/>
```

**Needs:**
1. Backend endpoint to receive file uploads
2. Form data handling
3. Email notification system

**Example Integration:**
```tsx
const [resumeFile, setResumeFile] = useState<File | null>(null);

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
    setResumeFile(e.target.files[0]);
  }
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const formData = new FormData();
  formData.append('firstName', firstName);
  formData.append('lastName', lastName);
  formData.append('email', email);
  if (resumeFile) {
    formData.append('resume', resumeFile);
  }
  
  try {
    const response = await fetch('/api/careers/apply', {
      method: 'POST',
      body: formData
    });
    
    if (response.ok) {
      toast.success('Application submitted successfully!');
    }
  } catch (error) {
    toast.error('Failed to submit application.');
  }
};
```

---

## 7. Contact Form

### Current State
Form prevents default, no backend integration

### What to Do

#### `/components/ContactPage.tsx`

**Similar to Newsletter and Career forms**

**Options:**
- Formspree (easiest)
- EmailJS
- Custom backend endpoint
- Netlify Forms (if deploying to Netlify)

**Example with Formspree:**
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* Keep existing form fields */}
</form>
```

---

## 8. Download Links (Resources Page)

### Current State
PDF downloads use `#` placeholder

### What to Do

#### `/components/ResourcesPage.tsx`

**Current:**
```tsx
<a href="#" download className="...">
  Download PDF
</a>
```

**Replace with:**
```tsx
<a 
  href="/pdfs/enrollment-packet.pdf" 
  download 
  className="..."
  target="_blank"
  rel="noopener noreferrer"
>
  Download PDF
</a>
```

**You'll need to:**
1. Create a `/public/pdfs/` folder
2. Add your actual PDF files
3. Update all download links

---

## Quick Replacement Script

```bash
# Find all placeholders
echo "=== Brightwheel URLs ==="
grep -rn '#brightwheel' components/

echo "\n=== Contact Info ==="
grep -rn '555.*123.*4567' components/
grep -rn '123 Main Street' components/

echo "\n=== Social Media ==="
grep -rn 'href="#"' components/ | grep -i social

echo "\n=== Google Maps ==="
grep -rn 'Google Maps Embed Here' components/
```

---

## Completion Checklist

- [ ] Replace all Brightwheel URLs (`#brightwheel`)
- [ ] Update street address
- [ ] Update phone number  
- [ ] Update email addresses
- [ ] Add Google Maps embed
- [ ] Update Facebook URL
- [ ] Update Instagram URL
- [ ] Update Twitter URL
- [ ] Connect newsletter form
- [ ] Connect contact form
- [ ] Connect career application form
- [ ] Upload PDF files
- [ ] Update PDF download links
- [ ] Test all forms
- [ ] Test all external links
- [ ] Verify all links open in new tabs where appropriate

---

**Priority Order:**
1. 🔴 Brightwheel URLs (most critical)
2. 🔴 Contact information
3. 🟡 Google Maps
4. 🟡 Social media links
5. 🟢 Forms integration
6. 🟢 PDF downloads

---

**After Replacement:**
Run a final search to ensure no placeholders remain:
```bash
grep -rn '#brightwheel\|555.*123.*4567\|123 Main Street\|href="#"' components/
```

If this returns no results, you're good to go! ✅
