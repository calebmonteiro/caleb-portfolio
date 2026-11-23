# Caleb Monteiro — Portfolio

A responsive, story-led portfolio built with React. The site focuses on the context behind each role, work performed, and lessons learned, alongside projects, technical tools, and ways to get in touch.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
git clone https://github.com/calebmonteiro/caleb-portfolio.git
cd caleb-portfolio
npm install
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000). Create an optimized production build with:

```bash
npm run build
```

## Project structure

```text
src/
  App.js
  index.css
  components/
    Navbar.js       Responsive section navigation
    Hero.js         Intro and social links
    Experience.js   Selectable experience stories
    Projects.js     Filterable project and case study cards
    Skills.js       Interactive skills matrix
    Contact.js      Email and profile links
    Footer.js
public/
  images/           Project and experience imagery
```

## Updating content

- Edit the `experiences` array in `src/components/Experience.js` to update role stories, dates, context, work, and learning notes.
- Edit the `projects` array and `filters` in `src/components/Projects.js` to add case studies. Keep project scale and outcomes specific to results you can substantiate.
- Edit the `groups` array in `src/components/Skills.js` to update tools and the context in which you used them.
- Update contact URLs in `src/components/Hero.js` and `src/components/Contact.js`.
- Adjust the color palette, typography, layout, and responsive breakpoints in `src/index.css`.

The public site intentionally does not include a resume PDF or resume download link.

## Deployment

Build with `npm run build`, then deploy the generated `build/` directory to a static host such as GitHub Pages, Netlify, or Vercel. The existing `npm run deploy` script publishes the build to the repository's `gh-pages` branch when configured for GitHub Pages.
