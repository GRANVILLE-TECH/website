# GRANVILLE-TECH QUICK REFERENCE GUIDE

> **Purpose**: Quick lookup for developers and AI assistants working on the Granville-Tech project.

---

## 📋 PROJECT AT A GLANCE

| Aspect | Details |
|--------|---------|
| **Company** | Granville-Tech (⚠️ NOT Greenville) |
| **Tech Stack** | React 18.3 + Vite 6 + Tailwind 3.4 + Framer Motion |
| **Type** | Single-Page Application (SPA) |
| **Routing** | React Router DOM 7 |
| **Sections** | 9 main sections (Hero → Footer) |
| **External APIs** | EmailJS (contact), Calendly (booking) |

---

## 🎨 DESIGN TOKENS

### Colors
```css
--black:      #121212   /* Primary background */
--darkgray:   #111111   /* Secondary background */
--silver:     #b0b0b0   /* Secondary text */
--white:      #f5f5f5   /* Primary text */
--accent:     #00bcd4   /* Teal accent */
--cta:        #FBBF24   /* Yellow-Amber gradient for buttons */
```

### Typography
```css
Font Family:   "Red Rose" (body), "Orbitron" (logo)
Headings:      text-4xl to text-6xl, font-extrabold
Body:          text-base to text-xl, font-normal/medium
Colors:        text-white (headings), text-silver (body)
```

### Spacing
```css
Section Padding: py-20 sm:py-32, px-6 sm:px-8
Card Spacing:    p-6 sm:p-8
Gaps:            gap-4 sm:gap-6 lg:gap-8
```

### Animations
```javascript
// Entrance
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, ease: "easeOut" }}

// Hover
whileHover={{ scale: 1.05 }}
transition={{ duration: 0.3 }}

// Stagger
transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
```

---

## 📁 FILE STRUCTURE CHEAT SHEET

```
src/
├── components/        # Reusable UI (PascalCase.jsx)
│   ├── Button.jsx
│   ├── CalendlyWidget.jsx
│   ├── Loader.jsx
│   └── navbar.jsx
│
├── pages/            # Sections/Routes (lowercase.jsx)
│   ├── hero.jsx      # Landing
│   ├── about.jsx     # Company info
│   ├── innovations.jsx
│   ├── services.jsx
│   ├── partners.jsx
│   ├── team.jsx
│   ├── booking.jsx
│   ├── contact.jsx
│   ├── ArticlesPage.jsx    # Route pages (PascalCase)
│   └── InnovationsPage.jsx
│
├── assets/           # Images (lowercase_with_underscores)
│   ├── innovations/
│   ├── partners/
│   ├── team/
│   └── values/
│
├── App.jsx           # Main layout
├── main.jsx          # Entry point
└── index.css         # Global styles
```

---

## 🔗 NAVIGATION PATTERNS

### Internal Sections (Hash Links)
```jsx
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#innovations">Innovations</a>
<a href="#services">Services</a>
<a href="#booking">Booking</a>
<a href="#contact">Contact</a>
```

### Internal Routes (React Router)
```jsx
<Link to="/">Home</Link>
<Link to="/articles">Articles</Link>
<Link to="/innovations">Innovations</Link>
```

### External Links
```jsx
<a 
  href="https://example.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  External Site
</a>
```

---

## 🧩 COMPONENT TEMPLATES

### Page Section Component
```jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function SectionName() {
  return (
    <section className="bg-gradient-to-b from-black to-[#111111] text-white py-32 px-6">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-5xl font-extrabold text-center mb-12"
      >
        Section Title
      </motion.h2>
      
      {/* Content */}
    </section>
  );
}
```

### Reusable Component
```jsx
import React from 'react';

const ComponentName = ({ prop1, prop2 = "default" }) => {
  return (
    <div className="...">
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

### Form Component
```jsx
const [formData, setFormData] = useState({
  field1: "",
  field2: ""
});
const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

const validateForm = () => {
  const newErrors = {};
  if (!formData.field1) newErrors.field1 = "Required";
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;
  setIsSubmitting(true);
  // Submit logic
  setIsSubmitting(false);
};
```

---

## 🎯 COMMON PATTERNS

### Image Import & Usage
```jsx
import image from '../assets/category/image_name.webp';

<img 
  src={image} 
  alt="Descriptive alt text" 
  loading="lazy"
  className="w-full h-auto object-cover"
/>
```

### Responsive Grid
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item, index) => (
    <div key={index}>
      {/* Card content */}
    </div>
  ))}
</div>
```

### Modal/Overlay
```jsx
{isOpen && (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    onClick={handleClose}
  >
    <div 
      className="bg-[#1a1a1a] p-8 rounded-lg max-w-4xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Modal content */}
    </div>
  </motion.div>
)}
```

### Hover Card
```jsx
<motion.div
  whileHover={{ scale: 1.05 }}
  className="bg-[#1e1e1e] rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
>
  {/* Card content */}
</motion.div>
```

---

## 🔌 THIRD-PARTY INTEGRATIONS

### EmailJS (Contact Form)
```javascript
import emailjs from 'emailjs-com';

const response = await emailjs.sendForm(
  'service_7ni88o8',      // Service ID
  'template_i53s3m3',     // Template ID
  formRef.current,        // Form reference
  'vV2ZEovI7Ry_SMesg'    // Public key
);
```

### Calendly Widget
```jsx
import CalendlyWidget from '../components/CalendlyWidget';

<CalendlyWidget 
  url="https://calendly.com/nayebaredominique7/30min"
  style={{ minWidth: "320px", height: "700px" }}
/>
```

### Framer Motion Icons
```jsx
import { Menu, X, ChevronRight } from 'lucide-react';

<Menu className="w-6 h-6" />
<X className="w-6 h-6" />
<ChevronRight className="w-4 h-4" />
```

---

## 📊 DATA STRUCTURES

### Innovation Data
```javascript
{
  title: "Product Name",
  tagline: "Brief tagline",
  description: "Description text",
  image: importedImage,
  ValueProposition: {
    Problem: "Problem statement",
    Solution: "Solution statement",
    KeyBenefits: { benefit1: "text", benefit2: "text" },
    Differentiators: ["diff1", "diff2"]
  },
  KeyComponents: {
    ProblemFocused: {},
    SolutionOriented: {},
    UniqueDifferentiators: {}
  },
  VisionStatement: "Vision text",
  TargetAudience: {
    AudienceName: { Message: "Message text" }
  },
  ValuePropositionStatement: "Full statement"
}
```

### Team Member Data
```javascript
{
  name: "Full Name",
  role: "Job Title",
  bio: "Biography text",
  image: importedImage,
  linkedin: "https://linkedin.com/..."
}
```

### Service Data
```javascript
{
  icon: IconComponent,
  title: "Service Name",
  description: "Description text",
  benefits: ["Benefit 1", "Benefit 2", "Benefit 3"]
}
```

---

## 🛠️ COMMANDS

```bash
# Development
npm run dev              # Start dev server (localhost:5173)

# Building
npm run build            # Production build to dist/
npm run preview          # Preview production build

# Linting
npm run lint             # Check code quality
```

---

## ✅ PRE-COMMIT CHECKLIST

Before committing code:
- [ ] No `console.log()` statements
- [ ] No unused imports or variables
- [ ] `npm run lint` passes
- [ ] All images have `alt` text
- [ ] Forms have validation
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Branding is "Granville-Tech" (not Greenville)
- [ ] Animations are smooth
- [ ] Loading states for async operations

---

## 🚨 COMMON MISTAKES TO AVOID

### ❌ DON'T
```jsx
// Wrong brand name
"Greenville-Tech"

// Missing alt text
<img src={image} />

// Not importing images
<img src="./assets/image.jpg" />

// Uppercase in page filenames
Hero.jsx (in pages/)

// Using div for buttons
<div onClick={handleClick}>Click</div>

// Wrong import order
import image from './assets/img.jpg';
import React from 'react';

// Unused imports
import { g, u } from 'framer-motion';

// No loading state
const handleSubmit = async () => {
  await api.call();
}
```

### ✅ DO
```jsx
// Correct brand name
"Granville-Tech"

// Always include alt text
<img src={image} alt="Description" loading="lazy" />

// Import images properly
import image from '../assets/image.jpg';
<img src={image} />

// Lowercase for page files
hero.jsx (in pages/)

// Use button elements
<button onClick={handleClick}>Click</button>

// Correct import order
import React from 'react';
import { motion } from 'framer-motion';
import image from './assets/img.jpg';

// Remove unused imports
import { motion } from 'framer-motion';

// Always show loading states
const [isSubmitting, setIsSubmitting] = useState(false);
const handleSubmit = async () => {
  setIsSubmitting(true);
  await api.call();
  setIsSubmitting(false);
}
```

---

## 📚 DOCUMENTATION LINKS

- **Project Rules**: `PROJECT_RULES.md` - Complete coding standards
- **Data Model**: `DATA_MODEL.md` - Database schemas and API contracts
- **ERD Visual**: `ERD_VISUAL.md` - Visual database diagrams
- **This Guide**: `QUICK_REFERENCE.md` - Quick lookup reference

---

## 🔍 FINDING THINGS

### Where is X located?

| What | Location |
|------|----------|
| Navbar | `src/components/navbar.jsx` |
| Hero section | `src/pages/hero.jsx` |
| Innovations data | `src/pages/innovations.jsx` (line 13-342) |
| Services data | `src/pages/services.jsx` (line 60-119) |
| Contact form | `src/pages/contact.jsx` |
| EmailJS config | `src/pages/contact.jsx` (line 72-76) |
| Calendly URL | `src/pages/booking.jsx` (line 12) |
| Global styles | `src/index.css` |
| Tailwind config | `tailwind.config.js` |
| Color palette | `tailwind.config.js` (line 9-14) |
| Button styles | `src/components/Button.css` |
| Innovation images | `src/assets/innovations/` |
| Logo | `src/assets/Logo.svg` |

---

## 🎨 TAILWIND UTILITY QUICK REF

### Layout
```
flex, grid, hidden, block, inline-block
items-center, items-start, items-end
justify-center, justify-between, justify-start
```

### Spacing
```
p-4, px-6, py-8, pt-4, pb-4
m-4, mx-auto, my-6, mt-4, mb-4
gap-4, gap-x-4, gap-y-4
space-x-4, space-y-4
```

### Sizing
```
w-full, w-1/2, w-auto, w-32
h-full, h-screen, h-auto, h-64
max-w-4xl, min-h-screen
```

### Typography
```
text-base, text-lg, text-xl, text-2xl, text-4xl
font-normal, font-medium, font-semibold, font-bold, font-extrabold
text-left, text-center, text-right
```

### Colors
```
text-white, text-silver, text-black
bg-black, bg-[#111111], bg-gradient-to-b
from-black, to-[#111111]
border-gray-300, border-silver
```

### Effects
```
rounded-lg, rounded-xl, rounded-full
shadow-md, shadow-lg
opacity-70, opacity-80
transition-all, duration-300
hover:scale-105, hover:bg-gray-300
```

### Responsive
```
sm:text-xl, md:text-2xl, lg:text-4xl
sm:grid-cols-2, lg:grid-cols-3
hidden, sm:block, lg:flex
```

---

## 🔐 ENVIRONMENT VARIABLES (Future)

```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/dbname

# EmailJS (currently hardcoded)
VITE_EMAILJS_SERVICE_ID=service_7ni88o8
VITE_EMAILJS_TEMPLATE_ID=template_i53s3m3
VITE_EMAILJS_PUBLIC_KEY=vV2ZEovI7Ry_SMesg

# Calendly
VITE_CALENDLY_URL=https://calendly.com/nayebaredominique7/30min

# API
VITE_API_BASE_URL=http://localhost:3000/api
```

---

## 🆘 TROUBLESHOOTING

### Images not loading?
- Check import path is correct (`../assets/...`)
- Ensure image file exists in assets folder
- Verify filename matches exactly (case-sensitive)

### Animations not working?
- Ensure `framer-motion` is imported
- Check `whileInView` is used (not just `animate`)
- Verify `initial` and `whileInView` props are present

### Form not submitting?
- Check EmailJS credentials are correct
- Ensure `formRef` is attached to `<form>`
- Verify validation is not blocking submission
- Check browser console for errors

### Tailwind classes not applying?
- Ensure class names are correct (no typos)
- Check `tailwind.config.js` for custom classes
- Verify file is in `content` array in config
- Clear cache and restart dev server

### Build failing?
- Run `npm run lint` to check for errors
- Remove unused imports
- Check for syntax errors
- Ensure all imported files exist

---

## 📞 CONTACT & SUPPORT

- **Project Owner**: Dominique Nayebare
- **Email**: nayebaredominique7@gmail.com
- **LinkedIn**: https://www.linkedin.com/company/granvilletek/
- **Calendly**: https://calendly.com/nayebaredominique7/30min

---

**Version**: 1.0.0  
**Last Updated**: November 4, 2025  
**Format**: Quick Reference & Cheat Sheet

