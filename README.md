# 🚀 Caleb Monteiro - Portfolio Website

<div align="center">
  <img src="public/demo.gif" alt="Portfolio Demo" width="600px" />
  <p align="center">
    A modern, responsive portfolio website showcasing my journey as a Computer Science and Engineering student.
    <br />
    <a href="https://your-portfolio-url.com">View Demo</a>
    ·
    <a href="https://github.com/yourusername/caleb-portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/yourusername/caleb-portfolio/issues">Request Feature</a>
  </p>
</div>

## ✨ Features

- 🎨 Modern and clean design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive for all devices
- 🎭 Smooth animations using Framer Motion
- 🔄 Interactive project cards with hover effects
- 📜 Dynamic experience timeline
- 🎯 Smooth scrolling navigation
- 📄 Downloadable resume
- 🎨 Customizable color schemes
- 🔍 SEO optimized

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [React Scroll](https://github.com/fisshy/react-scroll) - Smooth scrolling

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

```bash
# Check Node.js version
node --version

# Check npm version
npm --version
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/caleb-portfolio.git
```

2. Navigate to project directory
```bash
cd caleb-portfolio
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 📁 Project Structure

```
caleb-portfolio/
├── public/
│   ├── profile.jpg
│   ├── resume.pdf
│   ├── favicon.ico
│   ├── logo192.png
│   └── projects/
│       ├── course-scheduler.jpg
│       ├── voice-assistant.jpg
│       ├── review-genie.jpg
│       └── econet.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   └── ThemeToggle.js
│   ├── context/
│   │   └── ThemeContext.js
│   ├── App.js
│   └── index.js
└── tailwind.config.js
```

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: {
    light: '#ffffff',  // Light mode background
    dark: '#0A192F',   // Dark mode background
  },
  secondary: {
    light: '#007AFF',  // Light mode accent
    dark: '#64FFDA',   // Dark mode accent
  },
  // ... other colors
}
```

### Adding Projects

Edit `src/components/Projects.js`:

```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/...',
    external: 'https://project-url.com'
  },
  // ... more projects
];
```

### Required Images

1. **Profile Picture** (`public/profile.jpg`)
   - Professional headshot
   - Recommended size: 400x400px
   - Format: JPG/PNG

2. **Project Screenshots** (`public/projects/`)
   - High-quality screenshots of your projects
   - Recommended size: 1200x675px (16:9)
   - Format: JPG/PNG

3. **Resume** (`public/resume.pdf`)
   - Your latest resume
   - Format: PDF

4. **Logo/Favicon** (`public/favicon.ico`, `public/logo192.png`)
   - Your personal logo or initials
   - Sizes: 16x16, 32x32, 192x192

## 🌟 Adding Animations

The website includes several types of animations:

1. **Page Load Animations**
   - Staggered fade-in effects
   - Smooth upward transitions

2. **Hover Effects**
   - Scale transforms
   - Color transitions
   - Morphing shapes

3. **Scroll Animations**
   - Fade-in on scroll
   - Slide-in elements

To add custom animations, use Framer Motion:

```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Your content */}
</motion.div>
```

## 📱 Responsive Design

The website is fully responsive across all devices:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

1. Build the project
```bash
npm run build
```

2. Deploy to your preferred platform:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

Caleb Monteiro - [cmontei@rockets.utoledo.edu](mailto:cmontei@rockets.utoledo.edu)

LinkedIn - [linkedin.com/in/calebmonteiro](https://linkedin.com/in/calebmonteiro)

Project Link: [https://github.com/yourusername/caleb-portfolio](https://github.com/yourusername/caleb-portfolio)

---

<div align="center">
  Made with ❤️ by Caleb Monteiro
</div> 