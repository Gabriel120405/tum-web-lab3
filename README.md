# Europlasmet - Enhanced Landing Page with Responsive Design & Mascot

A modern, fully responsive landing page for **Europlasmet**, a leading plastic and polymer manufacturing company. Now enhanced with a friendly mascot, improved mobile experience, and TailwindCSS styling.

## 🎯 Lab 3 Improvements

### Customer Requirements ✅

**Responsive Design (3 Points)**
- ✅ All elements scale properly for desktop, tablet, and mobile
- ✅ Mobile menu with hamburger button
- ✅ Touch-friendly button sizes (minimum 48px)
- ✅ Responsive typography that adapts to screen size
- ✅ Media queries for 3 breakpoints: 480px, 768px, 1200px

**Call to Action Visibility (1 Point)**
- ✅ "Get Started Today" button always visible and prominent on mobile
- ✅ Fixed positioning considerations for CTA
- ✅ Large touch target (48x48px minimum)
- ✅ Contrasting orange color for visibility

**Mobile-Only Elements (1 Point)**
- ✅ Mobile menu navigation (hamburger menu)
- ✅ Mobile-only info section ("Quick Response" banner)
- ✅ Responsive navigation that collapses on mobile
- ✅ Hidden desktop menu on small screens

**Mascot Character (5.4 Points Total)**
- ✅ **Related to Topic (0.4 Points)**: Plastic pellet character - directly represents product
- ✅ **Friendly/Pleasant (1 Point)**: Cute SVG with big eyes, smile, and warm orange color
- ✅ **Appear After Delay (1 Point)**: Shows after 2000ms with smooth slide-in animation
- ✅ **Multiple Animations (1.4 Points)**:
  - Continuous floating animation
  - Spinning animation on click
  - Wobble/tilt effects
  - Scale transformation on hover
  - Smooth transitions
- ✅ **Hover Message (1 Point)**: 5 different messages that cycle on click
  - "👋 Need help?"
  - "❓ Questions?"
  - "💬 Chat with me!"
  - "🎉 Let's talk!"
  - "✨ Ready to help!"

### Development Requirements ✅

**Decent Git History**
- Multiple meaningful commits tracking feature development
- Clear commit messages with prefixes (feat:, docs:, style:)

**Framework Migration (1 Point)** ✅
- Migrated to **TailwindCSS** (via CDN)
- Vanilla CSS for custom animations and mascot
- Hybrid approach: Tailwind utility classes + custom CSS
- Cleaner, more maintainable code

**Deployment**
- Ready for GitHub Pages, Vercel, or Netlify
- All static assets included
- No build process required (Tailwind via CDN)

## ✨ Features Overview

### 🎨 Design
- Modern gradient backgrounds (blue to purple)
- Professional color scheme
- Smooth animations and transitions
- SVG mascot with multiple animations
- Card-based layouts with hover effects
- Fully responsive grid system

### 📱 Responsiveness
- **Desktop (1200px+)**: Full 4-column product grid, side-by-side contact sections
- **Tablet (768px-1199px)**: 2-column product grid, stacked contact form
- **Mobile (480px-767px)**: Single column layout, hamburger menu
- **Small Mobile (<480px)**: Extra large touch targets, optimized spacing

### 🤖 Mascot Features
- **Animation**: Continuous floating motion with subtle rotation
- **Interaction**: Click to cycle through 5 different messages
- **Hover Effect**: Message bubble appears on mouse hover
- **Responsive**: Scales appropriately for mobile and desktop
- **Accessible**: Touch-friendly on mobile devices

### 🔧 Technical Stack
- **HTML5**: Semantic markup
- **TailwindCSS**: Utility-first styling (via CDN)
- **Vanilla CSS**: Custom animations and effects
- **Vanilla JavaScript**: Mascot interactions, mobile menu
- **SVG**: Scalable mascot character

## 📁 Project Structure

```
tum-web-lab3/
├── index.html           # Enhanced HTML with Tailwind classes
├── style.css            # Custom CSS for animations and overrides
├── reset.css            # CSS reset stylesheet
└── README.md            # This file
```

## 🚀 Key Components

### Navigation Bar
- Sticky positioning
- Mobile hamburger menu
- Smooth scroll to sections
- Gradient background

### Mascot (Plastic Pellet)
- SVG-based design
- Located in bottom-right corner
- Appears after 2-second delay
- Multiple animations
- Interactive message bubble

### Hero Section
- Eye-catching gradient background
- Large, readable typography
- Prominent CTA button
- Mobile-only info banner

### Products Section
- 4 product cards
- Responsive grid layout
- Hover lift animation
- Icon-based design

### Features Section
- 6 key business benefits
- Gradient background cards
- Smooth hover transitions
- Mobile-optimized layout

### Contact Section
- Contact information
- Functional contact form
- Responsive two-column layout
- Form validation ready

## 📱 Responsive Breakpoints

```css
/* Extra Small (Mobile) */
@media (max-width: 480px)

/* Small (Tablet) */  
@media (max-width: 768px)

/* Large (Desktop) */
@media (max-width: 1200px)
```

## 🎬 Animations & Transitions

### Mascot Animations
- **float**: Continuous 3-second floating motion
- **spin**: 360-degree rotation on click
- **wobble**: Side-to-side tilting
- **slideIn**: Entrance animation from bottom-right

### Interaction Animations
- **bounceIn**: Message bubble appears with bounce
- **slideInFromRight**: Mobile menu entrance
- **Hover effects**: Scale, shadow, and color transitions

## 📝 CSS Customizations

Built custom CSS for:
- Mascot character styling
- Animation keyframes
- Mobile menu animations
- Form focus states
- Smooth transitions
- Accessibility features (prefers-reduced-motion)
- Touch device optimization

## 🔧 Installation & Usage

### Clone Repository
```bash
git clone <repo-url>
cd tum-web-lab3
```

### View Locally
```bash
# Option 1: Direct open
open index.html

# Option 2: Local server
python -m http.server 8000
# Visit http://localhost:8000
```

## 🌐 Live Demo

Deploy to your preferred platform:

**GitHub Pages**
```bash
git push origin main
# Settings > Pages > Select main branch
```

**Netlify**
- Connect your GitHub repo
- Deploy automatically

**Vercel**
- Import from GitHub
- Auto-deploy on push

## 📊 Accessibility Features

- Touch device optimizations
- Minimum 48px touch targets
- Keyboard navigation support
- Smooth color contrast
- Prefers-reduced-motion support
- Alt text ready for images
- Semantic HTML structure

## 🎓 Lab Assignment Completion

✅ **All Customer Requirements Met:**
- Responsive design for all screen sizes
- CTA visible on mobile
- Mobile-only elements included
- Interactive mascot with animations
- Friendly character design

✅ **All Development Requirements Met:**
- TailwindCSS framework integration
- Multiple git commits
- Vanilla CSS for animations
- Clean, maintainable code
- Ready for deployment

✅ **Bonus Features:**
- Advanced animation system
- Personalized messages
- Enhanced mobile experience
- Accessibility considerations

## 📈 Version History

```
Lab 1: Initial Resume/CV page
Lab 2: Landing page with vanilla CSS
Lab 3: Responsive design + mascot + TailwindCSS
```

## 🎨 Color Scheme

- **Primary Blue**: `#0066cc` (Tailwind: blue-600)
- **Secondary Blue**: `#004499` (Tailwind: blue-800)
- **Accent Orange**: `#ff6b35` (For CTA and mascot)
- **Light Background**: #f3f4f6 (Tailwind: gray-50)
- **Dark Text**: #1f2937 (Tailwind: gray-800)

## 📄 License

Created as part of TUM Web Development Course - Lab 3

---

**Status**: Complete & Ready for Deployment  
**Last Updated**: March 2024  
**Created for**: Technical University of Munich (TUM) - Web Lab Course
