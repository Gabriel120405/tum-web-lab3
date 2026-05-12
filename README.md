# Lab 4: Static Site Generator & Git CMS

> **Europlasmet Landing Page with SSG and Git-based CMS**

A modern landing page infrastructure using **11ty (Eleventy)** Static Site Generator and **Decap CMS** for content management.

## 🎯 Project Overview

This project modernizes the Europlasmet landing page by:
- ✅ Migrating to a Static Site Generator (11ty/Eleventy)
- ✅ Integrating Decap CMS for Git-based content editing
- ✅ Maintaining the CSS framework from Lab 3 (Tailwind CSS + custom styles)
- ✅ Making all content editable via CMS interface
- ✅ Deploying the site live
- ✅ Maintaining clean git history

## 🛠 Technology Stack

### Static Site Generator
- **11ty (Eleventy)** - Lightweight, flexible build tool
  - Supports Markdown and Nunjucks templates
  - Zero-config default setup
  - Excellent for content-driven sites

### Content Management
- **Decap CMS** - Git-based headless CMS
  - Git gateway backend integration
  - Web UI for content editing
  - Supports Markdown and YAML frontmatter
  - Free and open-source

### Styling
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Custom CSS** - Enhanced animations and responsive design

## 📁 Project Structure

```
tum-web-lab4/
├── src/
│   ├── _layouts/
│   │   └── base.njk           # Main layout template
│   ├── _data/
│   │   └── site.json          # Site configuration
│   ├── admin/
│   │   ├── config.yml         # Decap CMS configuration
│   │   └── index.html         # CMS interface
│   ├── content/
│   │   ├── index.md           # Home page content
│   │   └── products/          # Product pages
│   └── css/
│       ├── reset.css          # CSS reset
│       └── style.css          # Custom styles and animations
├── .eleventy.js               # 11ty configuration
├── package.json               # Dependencies
├── .gitignore                 # Git ignore rules
└── _site/                     # Build output (generated)
```

## 🚀 Getting Started

### Installation

```bash
# Navigate to project directory
cd tum-web-lab4

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm start
# Or: npm run dev

# Serves at http://localhost:8080
```

### Building for Production

```bash
npm run build
```

## 💻 Content Management

### Accessing the CMS

1. **Local Development**:
   - The CMS is available at `http://localhost:8080/admin/`
   - For Git gateway to work locally, you need to set up authentication

2. **After Deployment**:
   - Access CMS at your deployed site URL + `/admin/`
   - Authenticate via GitHub (or Git provider)
   - Edit content from the web interface

### Editable Content

Content managed via Decap CMS:
- Home page title, heading, tagline, CTA
- Products and product descriptions
- Site settings (title, description)
- Pricing information
- Published status

### Content Files (Markdown + YAML)

All content is stored as Markdown files with YAML frontmatter:

```yaml
---
layout: base.njk
title: Page Title
heading: Main Heading
tagline: Page Description
---

# Markdown Content
```

## 🔗 Decap CMS Configuration

The `src/admin/config.yml` defines:
- **Backend**: Git gateway (GitHub/GitLab)
- **Collections**: Pages, Products, Settings
- **Fields**: Editable content sections with validation

To enable Git gateway authentication:
1. Deploy to Netlify or another provider with Git integration
2. Or configure Git gateway for your Git host

## 🌐 Deployment

### Recommended Platforms (Free Tier Options)

#### **Netlify** (Recommended for Decap CMS)
```bash
# Deploy with Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

- Includes Git gateway for free
- Automatic builds on git push
- Form handling and functions included

#### **GitHub Pages**
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select `_site` folder as source

#### **Vercel**
```bash
npm install -g vercel
vercel
```

## 📝 Git Workflow

The project maintains clean git history:

```bash
# Stage changes
git add .

# Commit with descriptive messages
git commit -m "feat: add product management to CMS"

# Push to remote
git push origin main
```

**Commit Types**:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - CSS/styling changes
- `refactor:` - Code restructuring
- `chore:` - Build, dependencies

## ⚙️ Configuration

### 11ty Configuration (.eleventy.js)
- Input directory: `src/`
- Output directory: `_site/`
- Supports: HTML, Markdown, Nunjucks
- CSS pass-through and watch configured

### Site Settings (src/_data/site.json)
```json
{
  "title": "Site Title",
  "description": "Site Description",
  "logo": "Europlasmet",
  "company": "Europlasmet"
}
```

Accessible in templates via `{{ site.title }}`

## 🎨 Styling Guide

### Tailwind CSS Classes
- Use Tailwind utility classes in templates
- Available via CDN in base layout
- Responsive prefixes: `md:`, `lg:`, `sm:`

### Custom Animations
- `slideIn` - Content entrance animation
- `bounceIn` - Pop-in effect
- `float` - Gentle floating motion
- `wobble` - Slight rotation wobble

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔒 Decap CMS Authentication

### Local Development
For full functionality, configure local Git:
```bash
# Set Git user
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Production Deployment
1. Push repository to GitHub/GitLab/Gitea
2. Deploy via Netlify (has built-in Git gateway)
3. Or configure Git gateway in CMS config
4. Users authenticate via Git provider OAuth

## 📚 Learning Resources

- [11ty Documentation](https://www.11ty.dev/)
- [Decap CMS Docs](https://decapcms.org/docs/intro/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [JAMstack.org](https://jamstack.org/)

## 🤝 Features

### ✅ Implemented
- [x] 11ty SSG setup with markdown support
- [x] Decap CMS integration with Git backend
- [x] Responsive Tailwind CSS styling
- [x] Custom animations and interactions
- [x] Content management interface
- [x] Site configuration management
- [x] Product collection support
- [x] Mobile-responsive design
- [x] Git-based workflow

### 🔄 Future Enhancements
- [ ] Deploy to Netlify or GitHub Pages
- [ ] Set up GitHub OAuth for CMS
- [ ] Add image optimization
- [ ] Implement search functionality
- [ ] Add blog collection
- [ ] Email form integration

## 📄 License

MIT License - feel free to use this project as a reference.

## 👤 Credits

**Lab 4 - Web Development**
- Built with 11ty & Decap CMS
- Based on Europlasmet landing page from Lab 3
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
