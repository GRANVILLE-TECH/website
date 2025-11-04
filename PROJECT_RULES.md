# GRANVILLE-TECH PROJECT RULES & CONVENTIONS

> **Purpose**: This document establishes the coding standards, naming conventions, and best practices for the Granville-Tech website project. All contributors and AI coding assistants must follow these rules to maintain consistency and code quality.

---

## 1. FILE NAMING CONVENTIONS

### 1.1 React Components
- **Format**: PascalCase with appropriate extension
- **Examples**:
  - ✅ `Button.jsx` - Reusable UI component
  - ✅ `CalendlyWidget.jsx` - Third-party integration component
  - ✅ `Loader.jsx` - Utility component
  - ❌ `button.jsx` - Incorrect (lowercase)
  - ❌ `Button.js` - Incorrect (use .jsx for React components)

### 1.2 Page Components
- **Format**: lowercase with .jsx extension
- **Location**: `src/pages/`
- **Examples**:
  - ✅ `hero.jsx` - Landing section
  - ✅ `about.jsx` - About page/section
  - ✅ `innovations.jsx` - Innovation section
  - ✅ `ArticlesPage.jsx` - Full page route (exception for standalone pages)
  - ❌ `Hero.jsx` - Incorrect (should be lowercase for page sections)

### 1.3 CSS Files
- **Format**: Match component name, PascalCase.css
- **Examples**:
  - ✅ `Button.css` - Styles for Button component
  - ✅ `index.css` - Global styles
  - ❌ `button-styles.css` - Incorrect (kebab-case not used)

### 1.4 Assets
- **Format**: descriptive_lowercase with underscores
- **Location**: Organized in subdirectories by type
- **Examples**:
  - ✅ `ai_back.jpeg` - Background image
  - ✅ `dominicsir_img.jpeg` - Team member image
  - ✅ `Logo.svg` - Brand logo (exception for brand assets)
  - ❌ `image1.jpg` - Incorrect (not descriptive)
  - ❌ `AI-Background.jpeg` - Incorrect (avoid hyphens, use underscores)

### 1.5 Configuration Files
- **Format**: lowercase with appropriate extension
- **Examples**:
  - ✅ `vite.config.js`
  - ✅ `tailwind.config.js`
  - ✅ `postcss.config.js`
  - ✅ `eslint.config.js`

### 1.6 Directory Names
- **Format**: lowercase, plural for collections
- **Examples**:
  - ✅ `components/` - Reusable components
  - ✅ `pages/` - Page sections and routes
  - ✅ `assets/` - Static resources
  - ✅ `innovations/` - Innovation images
  - ❌ `Components/` - Incorrect (uppercase)

---

## 2. CODING STANDARDS

### 2.1 React Component Structure

**Standard Component Template:**
```jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Third-party imports

import ComponentName from '../components/ComponentName';
// Local component imports

import image from '../assets/image.jpg';
// Asset imports

export default function PageName() {
  // 1. State declarations
  const [state, setState] = useState(initialValue);
  
  // 2. Effects
  useEffect(() => {
    // Effect logic
  }, [dependencies]);
  
  // 3. Event handlers
  const handleEvent = () => {
    // Handler logic
  };
  
  // 4. Render
  return (
    <section className="...">
      {/* Component JSX */}
    </section>
  );
}
```

**Order of Imports:**
1. React and React ecosystem
2. Third-party libraries (framer-motion, lucide-react, etc.)
3. Local components (relative imports)
4. Assets (images, SVGs)

### 2.2 Component Export Style
- **Rule**: Use `export default` for component exports
- **Examples**:
  - ✅ `export default function Hero() { ... }`
  - ✅ `export default Button;`
  - ❌ `export { Hero };` - Avoid named exports for main components

### 2.3 Props Destructuring
- **Rule**: Destructure props in function parameters with defaults
- **Examples**:
  ```jsx
  ✅ const Button = ({ text = "", onClick, className = "" }) => { ... }
  ❌ const Button = (props) => { const text = props.text; ... }
  ```

### 2.4 State Management
- **Rule**: Use `useState` for local state, keep state close to where it's used
- **Examples**:
  ```jsx
  ✅ const [isOpen, setIsOpen] = useState(false);
  ✅ const [formData, setFormData] = useState({ name: "", email: "" });
  ❌ Avoid prop drilling beyond 2 levels - use context or state management library
  ```

### 2.5 Styling Conventions

**Tailwind CSS Guidelines:**
- **Primary Approach**: Use Tailwind utility classes
- **Order**: Layout → Spacing → Typography → Colors → Effects → Responsive
- **Examples**:
  ```jsx
  ✅ className="flex items-center px-6 py-3 text-lg text-white bg-black rounded-lg hover:bg-gray-300 transition-all duration-300 sm:text-xl"
  ❌ className="bg-black text-white flex items-center rounded-lg px-6 py-3" // Wrong order
  ```

**Custom CSS Rules:**
- Use custom CSS only for complex animations or component-specific styles
- Place custom CSS in separate .css file matching component name
- Use CSS variables for theme values

**Color Palette (Strictly Enforced):**
```css
--color-black: #121212
--color-darkgray: #111111
--color-silver: #b0b0b0
--color-white: #f5f5f5
--color-accent: #00bcd4
--color-border: #333333
```

### 2.6 Animation Standards

**Framer Motion Patterns:**
```jsx
// Standard entrance animation
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  {/* Content */}
</motion.div>

// Hover animation
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>
```

**Animation Timing:**
- Entrance: 0.5-1s duration
- Hover: 0.3s duration
- Stagger delays: 0.1-0.3s between items
- Easing: `easeOut` for entrances, `easeInOut` for interactions

### 2.7 Image Optimization
- **Format Priority**: WebP > JPEG > PNG
- **Lazy Loading**: Add `loading="lazy"` attribute to all images
- **Alt Text**: Always provide descriptive alt text
- **Examples**:
  ```jsx
  ✅ <img src={image} alt="Dominique Nayebare - CEO & CTO" loading="lazy" />
  ❌ <img src={image} /> // Missing alt and loading attributes
  ```

### 2.8 Responsive Design
- **Breakpoints** (Tailwind defaults):
  - `sm:` 640px
  - `md:` 768px
  - `lg:` 1024px
  - `xl:` 1280px
- **Mobile-First**: Write base styles for mobile, use breakpoints for larger screens
- **Example**:
  ```jsx
  ✅ className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
  ❌ className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl" // Wrong order
  ```

### 2.9 Accessibility Standards
- **Semantic HTML**: Use proper HTML5 elements (`<nav>`, `<section>`, `<header>`, `<footer>`)
- **ARIA Labels**: Add `aria-label` to icon buttons and interactive elements
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Focus States**: Maintain visible focus indicators
- **Examples**:
  ```jsx
  ✅ <button aria-label="Close Modal" onClick={handleClose}>×</button>
  ✅ <nav className="...">...</nav>
  ❌ <div onClick={handleClick}>Click me</div> // Should be button
  ```

### 2.10 Form Handling
- **Validation**: Always validate on client-side before submission
- **Error Messages**: Display inline, descriptive error messages
- **Loading States**: Show loading indicators during async operations
- **Pattern**:
  ```jsx
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required.";
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

## 3. DIRECTORY STRUCTURE CONVENTIONS

### 3.1 Standard Project Structure
```
website/
├── public/                      # Static assets served directly
│   └── vite.svg                # Favicon and public assets
├── src/                        # Source code
│   ├── assets/                 # Images, fonts, static resources
│   │   ├── innovations/        # Innovation project images
│   │   ├── partners/           # Partner logos
│   │   ├── values/             # Core value images
│   │   └── [other images]      # Misc images
│   ├── components/             # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   ├── CalendlyWidget.jsx
│   │   ├── Loader.jsx
│   │   └── navbar.jsx
│   ├── pages/                  # Page sections and routes
│   │   ├── hero.jsx            # Landing section
│   │   ├── about.jsx           # About section
│   │   ├── innovations.jsx     # Innovations section
│   │   ├── services.jsx        # Services section
│   │   ├── partners.jsx        # Partners section
│   │   ├── booking.jsx         # Booking section
│   │   ├── contact.jsx         # Contact section
│   │   ├── ArticlesPage.jsx    # Articles route page
│   │   └── InnovationsPage.jsx # Innovations route page
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── index.html                  # HTML entry point
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── eslint.config.js            # ESLint configuration
└── README.md                   # Project documentation
```

### 3.2 Asset Organization Rules

**Rule 1: Group by Type**
- Each asset type gets its own subdirectory
- Use plural names: `innovations/`, `partners/`, `team/`, `values/`

**Rule 2: Naming Pattern**
- Format: `{descriptor}_{type}.{ext}`
- Examples: `dominicsir_img.jpeg`, `echo_sign.jpg`, `oneness.webp`

**Rule 3: Format Selection**
- **Photos/Images**: WebP (primary), JPEG (fallback)
- **Logos**: SVG (primary), PNG with transparency (fallback)
- **Icons**: SVG only

### 3.3 Component Organization

**Reusable Components** (`src/components/`):
- UI primitives (Button, Input, Card)
- Third-party integrations (CalendlyWidget)
- Shared utilities (Loader, Modal)

**Page Components** (`src/pages/`):
- Section components for single-page layout (hero, about, etc.)
- Full page routes (ArticlesPage, InnovationsPage)

### 3.4 File Colocation
- **CSS with Component**: If component needs custom CSS, place it in same directory
  - `Button.jsx` + `Button.css`
- **Assets with Pages**: Keep page-specific assets in appropriate subdirectory

---

## 4. ROUTING AND NAVIGATION PROTOCOLS

### 4.1 Navigation Patterns

**Single-Page Sections (Hash Navigation):**
- Use `#` anchor links for main page sections
- Pattern: `href="#sectionname"` (lowercase, no spaces)
- Examples:
  ```jsx
  ✅ <a href="#home">Home</a>
  ✅ <a href="#about">About</a>
  ✅ <a href="#innovations">Innovations</a>
  ❌ <a href="#Home">Home</a> // Uppercase not allowed
  ```

**Multi-Page Routes (React Router):**
- Use `/route` pattern for separate pages
- Define in `main.jsx` with `<Route>` components
- Examples:
  ```jsx
  ✅ <Route path="/" element={<App />} />
  ✅ <Route path="/articles" element={<ArticlesPage />} />
  ✅ <Route path="/innovations" element={<InnovationsPage />} />
  ```

**Smooth Scrolling:**
- Enabled globally via CSS: `html { scroll-behavior: smooth; }`
- Use `scrollIntoView({ behavior: "smooth" })` for programmatic scrolling

### 4.2 Link Types

**Internal Section Links:**
```jsx
<a href="#contact" className="...">Contact Us</a>
```

**Internal Route Links:**
```jsx
<Link to="/articles" className="...">Read Articles</Link>
```

**External Links:**
```jsx
<a 
  href="https://example.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="..."
>
  Visit Site
</a>
```

### 4.3 Dynamic Title Management
- Update `document.title` based on current section/route
- Pattern implemented in `navbar.jsx`:
  ```jsx
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#home') document.title = 'Home - Granville-Tech';
      // ... other sections
    };
    window.addEventListener('hashchange', handleHashChange);
  }, []);
  ```

---

## 5. TESTING AND QUALITY PROTOCOLS

### 5.1 Pre-Commit Checklist
Before committing code, verify:
- [ ] No console.log statements in production code
- [ ] No unused imports or variables
- [ ] All images have alt text
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Forms validated and error handling implemented
- [ ] Loading states for async operations
- [ ] No ESLint errors or warnings
- [ ] Code follows naming conventions

### 5.2 Component Testing Checklist
For each new component:
- [ ] Renders without errors
- [ ] Props validated and documented
- [ ] Default props provided where appropriate
- [ ] Responsive across breakpoints
- [ ] Animations work smoothly
- [ ] Accessible (keyboard navigation, ARIA labels)
- [ ] Loading states implemented
- [ ] Error states handled

### 5.3 Form Testing Protocol
For forms:
- [ ] Client-side validation works
- [ ] Error messages display correctly
- [ ] Success messages display correctly
- [ ] Loading state during submission
- [ ] Form clears after successful submission
- [ ] Email/external service integration tested
- [ ] Dropdown/select elements keyboard accessible

### 5.4 Performance Testing
- [ ] Images optimized (WebP format, compressed)
- [ ] Lazy loading enabled on images
- [ ] No unnecessary re-renders
- [ ] Build size checked (`npm run build`)
- [ ] Page load time < 3 seconds
- [ ] Animations run at 60fps

### 5.5 Browser Compatibility
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### 5.6 Manual Testing Scenarios

**Navigation Flow:**
1. Load homepage → Verify loader displays
2. Click each navbar link → Verify smooth scroll
3. Click mobile menu → Verify toggle works
4. Test all CTAs → Verify correct navigation

**Form Submission:**
1. Submit empty form → Verify validation errors
2. Submit invalid email → Verify email validation
3. Submit valid form → Verify success message
4. Check EmailJS dashboard → Verify email received

**Interactive Elements:**
1. Click innovation card → Verify modal opens
2. Navigate modal pages → Verify slider works
3. Close modal → Verify modal closes
4. Test Calendly widget → Verify booking flow

---

## 6. TOOL USAGE FOR AGENT TASKS

### 6.1 Development Commands

**Start Development Server:**
```bash
npm run dev
# Starts Vite dev server on http://localhost:5173
```

**Build for Production:**
```bash
npm run build
# Creates optimized production build in dist/
```

**Preview Production Build:**
```bash
npm run preview
# Serves production build locally
```

**Lint Code:**
```bash
npm run lint
# Runs ESLint on all source files
```

### 6.2 AI Assistant Guidelines

**When Creating New Components:**
1. Check existing components for similar patterns
2. Follow component template structure (Section 2.1)
3. Use consistent naming conventions
4. Include animations following established patterns
5. Ensure responsive design

**When Modifying Existing Code:**
1. Maintain existing code style
2. Don't change working animations without reason
3. Keep color scheme consistent
4. Preserve accessibility features
5. Test changes across breakpoints

**When Adding Assets:**
1. Optimize images before adding (WebP preferred)
2. Place in appropriate subdirectory
3. Use descriptive filenames
4. Add to imports with correct path
5. Include alt text in JSX

**When Debugging:**
1. Check browser console for errors
2. Verify ESLint output
3. Check network tab for failed requests
4. Test responsive design in DevTools
5. Verify animations in slower network conditions

### 6.3 Third-Party Integrations

**EmailJS (Contact Form):**
- Service ID: `service_7ni88o8`
- Template ID: `template_i53s3m3`
- Public Key: `vV2ZEovI7Ry_SMesg`
- Usage: `emailjs.sendForm(serviceId, templateId, formRef, publicKey)`

**Calendly (Booking):**
- URL: `https://calendly.com/nayebaredominique7/30min`
- Widget Script: `https://assets.calendly.com/assets/external/widget.js`
- Usage: Embedded inline widget or popup

**Framer Motion:**
- Use for all animations
- Follow established patterns (Section 2.6)
- Keep animations subtle and performant

---

## 7. DATA HANDLING CONVENTIONS

### 7.1 Static Data Storage

**Innovation Data:**
- Location: `src/pages/innovations.jsx`
- Format: JavaScript array of objects
- Structure:
  ```javascript
  const innovationInfo = [
    {
      title: "Product Name",
      tagline: "Brief tagline",
      description: "Short description",
      ValueProposition: { ... },
      KeyComponents: { ... },
      VisionStatement: "...",
      TargetAudience: { ... },
      ValuePropositionStatement: "..."
    }
  ];
  ```

**Services Data:**
- Location: `src/pages/services.jsx`
- Format: JavaScript array using `useMemo`
- Structure:
  ```javascript
  const services = React.useMemo(() => [
    {
      icon: IconComponent,
      title: "Service Name",
      description: "Description",
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"]
    }
  ], []);
  ```

### 7.2 Form Data Handling

**State Structure:**
```javascript
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: ""
});
```

**Update Pattern:**
```javascript
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};
```

**Validation Pattern:**
```javascript
const validateForm = () => {
  const newErrors = {};
  
  if (!formData.field) {
    newErrors.field = "Field is required.";
  } else if (/* validation condition */) {
    newErrors.field = "Validation error message.";
  }
  
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```

### 7.3 Image Asset Mapping

**Pattern:**
```javascript
// Import images
import image1 from '../assets/category/image1.webp';
import image2 from '../assets/category/image2.webp';

// Create mapping object
const imageMapping = {
  "Key 1": image1,
  "Key 2": image2
};

// Map data with images
const dataWithImages = data.map(item => ({
  ...item,
  image: imageMapping[item.title]
}));
```

### 7.4 LocalStorage Usage
- Not currently implemented
- If needed, use for:
  - User preferences (theme, language)
  - Form draft saving
  - Session persistence
- Pattern:
  ```javascript
  // Save
  localStorage.setItem('key', JSON.stringify(data));
  
  // Retrieve
  const data = JSON.parse(localStorage.getItem('key') || '{}');
  ```

### 7.5 API Integration Guidelines
- All external API calls should have error handling
- Show loading states during async operations
- Display user-friendly error messages
- Example (EmailJS):
  ```javascript
  try {
    const response = await emailjs.sendForm(/* params */);
    setSuccessMessage("Success!");
  } catch (error) {
    setSuccessMessage("Failed. Please try again.");
  }
  ```

---

## 8. COMMON PITFALLS AND ENFORCEMENT

### 8.1 Branding Consistency

**CRITICAL: Brand Name**
- ✅ Correct: "Granville-Tech" or "Granville"
- ❌ Wrong: "Greenville-Tech", "Greenville", "GranvilleTech"

**Enforcement:**
- Search and replace all instances before committing
- Update document titles in navbar.jsx
- Verify footer text
- Check HTML meta tags

### 8.2 Image Path Issues

**Common Mistakes:**
```jsx
❌ <img src="./assets/image.jpg" /> // Relative path won't work
❌ <img src={require('../assets/image.jpg')} /> // Require not needed in Vite
✅ import image from '../assets/image.jpg'; <img src={image} />
```

**Enforcement:**
- Always import images as modules
- Use correct relative paths from component location
- Verify images load in development before committing

### 8.3 Unused Imports and Variables

**Examples:**
```jsx
❌ import { g, u } from 'framer-motion/client'; // Unused imports
❌ const [unused, setUnused] = useState(false); // Unused state
```

**Enforcement:**
- Run ESLint before committing
- Remove any grayed-out imports in VSCode
- Clean up commented-out code

### 8.4 Animation Performance

**Pitfalls:**
```jsx
❌ Animating width/height (causes layout reflow)
❌ Too many elements animating simultaneously
❌ Infinite animations on hidden elements
```

**Best Practices:**
```jsx
✅ Animate transform and opacity (GPU-accelerated)
✅ Use will-change: transform for complex animations
✅ Stagger animations with delays
✅ Use whileInView for scroll-triggered animations
```

### 8.5 Responsive Design Failures

**Common Issues:**
- Text overflow on mobile
- Images not scaling properly
- Fixed widths breaking layout
- Horizontal scroll on mobile

**Solutions:**
```jsx
✅ Use max-w-* for containers
✅ Add responsive text sizes (text-base sm:text-lg md:text-xl)
✅ Test in DevTools responsive mode
✅ Add overflow-hidden to parent containers
```

### 8.6 Form Validation Mistakes

**Pitfalls:**
```jsx
❌ No validation before submission
❌ Validation only on submit (not on change)
❌ Generic error messages ("Invalid input")
❌ No loading state during submission
```

**Best Practices:**
```jsx
✅ Validate on change and on submit
✅ Specific error messages ("Email address is invalid. Please enter a valid email.")
✅ Clear errors when user starts typing
✅ Disable submit button during submission
```

### 8.7 Accessibility Violations

**Common Mistakes:**
```jsx
❌ <div onClick={handleClick}>Click</div> // Not keyboard accessible
❌ <img src={img} /> // Missing alt text
❌ <button>×</button> // Icon without label
❌ Low contrast text colors
```

**Fixes:**
```jsx
✅ <button onClick={handleClick}>Click</button>
✅ <img src={img} alt="Descriptive text" />
✅ <button aria-label="Close">×</button>
✅ Use color contrast checker (4.5:1 minimum)
```

### 8.8 Git Commit Standards

**Message Format:**
```
<type>: <description>

[optional body]

Types: feat, fix, docs, style, refactor, test, chore
```

**Examples:**
```
✅ feat: add contact form validation
✅ fix: correct branding from Greenville to Granville
✅ style: improve mobile responsiveness on hero section
✅ refactor: extract innovation data to separate file
❌ "fixed stuff"
❌ "update"
```

### 8.9 Code Review Checklist

Before merging:
- [ ] No console.log or commented code
- [ ] ESLint passes with no errors
- [ ] Branding is consistent (Granville-Tech)
- [ ] All images have alt text
- [ ] Forms have validation and error handling
- [ ] Responsive design tested
- [ ] Animations are smooth and performant
- [ ] No unused imports or variables
- [ ] Loading states for async operations
- [ ] Links work correctly (internal and external)
- [ ] Color scheme follows brand guidelines
- [ ] Code follows established patterns

### 8.10 Dependency Management

**Adding Dependencies:**
```bash
# Always use npm (not yarn or pnpm)
npm install package-name

# For dev dependencies
npm install -D package-name
```

**Before Adding:**
- Check if functionality already exists
- Verify package is actively maintained
- Check bundle size impact
- Ensure license compatibility

**Current Dependencies (Don't Remove):**
- React ecosystem: react, react-dom, react-router-dom
- Animation: framer-motion
- Icons: lucide-react, react-icons
- Styling: tailwindcss
- Forms: emailjs-com, @emailjs/browser
- Other: swiper (if used), animate.css

---

## 9. BRAND GUIDELINES

### 9.1 Official Naming
- **Company Name**: Granville-Tech
- **Short Name**: Granville
- **Never Use**: Greenville, GranvilleTech, granville-tech

### 9.2 Color Palette
```css
Primary Colors:
- Black: #121212 (backgrounds)
- Dark Gray: #111111 (secondary backgrounds)
- Silver: #b0b0b0 (secondary text)
- White: #f5f5f5 (primary text)

Accent Colors:
- Teal: #00bcd4 (accents, hover states)
- Yellow-Amber: Gradient from #FBBF24 to #F59E0B (CTAs)

Neutral Colors:
- Border Gray: #333333
- Gray-300: #d1d5db
```

### 9.3 Typography
- **Primary Font**: Red Rose (serif) - Body text
- **Logo Font**: Orbitron (sans-serif) - Branding
- **Headings**: Extrabold (800), sizes 4xl-6xl
- **Body**: Regular (400) or Medium (500), sizes base-xl

### 9.4 Imagery Style
- Dark, professional aesthetic
- AI/technology themed
- WebP format for performance
- High contrast with text overlays

### 9.5 Tone of Voice
- Professional but approachable
- Innovation-focused
- Technical but clear
- Future-oriented
- Empowering

---

## 10. MAINTENANCE PROTOCOLS

### 10.1 Regular Updates
- Weekly: Check for security updates
- Monthly: Review and update dependencies
- Quarterly: Performance audit
- Yearly: Major version updates

### 10.2 Backup Strategy
- Git repository is source of truth
- Tag releases: `v1.0.0`, `v1.1.0`, etc.
- Document breaking changes in commits

### 10.3 Documentation
- Update this file when adding new patterns
- Document complex components inline
- Keep README.md current
- Add JSDoc comments for utility functions

### 10.4 Asset Management
- Periodically audit unused images
- Optimize images when adding new ones
- Maintain organized folder structure
- Remove deprecated assets

---

## SUMMARY CHECKLIST

Use this quick reference when developing:

**File Creation:**
- [ ] Correct naming convention (PascalCase for components, lowercase for pages)
- [ ] Correct extension (.jsx for React, .css for styles)
- [ ] Placed in correct directory

**Component Development:**
- [ ] Imports in correct order
- [ ] Default export used
- [ ] Props destructured with defaults
- [ ] Animations follow patterns
- [ ] Responsive classes included
- [ ] Accessibility attributes added

**Styling:**
- [ ] Tailwind classes in correct order
- [ ] Brand colors used
- [ ] Responsive breakpoints tested
- [ ] Hover states defined

**Data Handling:**
- [ ] State initialized correctly
- [ ] Validation implemented
- [ ] Error handling included
- [ ] Loading states shown

**Testing:**
- [ ] Renders without errors
- [ ] Responsive on all devices
- [ ] Animations smooth
- [ ] Forms validate correctly
- [ ] Links work properly

**Before Commit:**
- [ ] No console.log statements
- [ ] No unused imports
- [ ] ESLint passes
- [ ] Branding consistent
- [ ] Images optimized

---

**Version**: 1.0.0  
**Last Updated**: November 4, 2025  
**Maintained By**: Granville-Tech Development Team

