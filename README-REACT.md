# BHOWMIKA - React SPA

A modern React Single Page Application (SPA) built with Vite, replacing the original PHP website.

## Features

- **React 18** - Latest React version with hooks
- **Vite** - Ultra-fast build tool and dev server
- **React Router v6** - Client-side routing for all pages
- **React Helmet Async** - SEO meta tags management
- **Bootstrap 5** - Responsive UI framework
- **Font Awesome 6** - Icon library
- **SEO Optimized** - All pages have proper meta tags and structured data

## Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Navigation component
│   ├── Footer.jsx        # Footer component
│   └── SEOHelmet.jsx     # SEO meta tags component
├── pages/
│   ├── Home.jsx          # Homepage
│   ├── About.jsx         # About page
│   ├── Product.jsx       # Products page
│   ├── Gallery.jsx       # Gallery page
│   ├── Service.jsx       # Services page
│   └── Contact.jsx       # Contact page
├── App.jsx               # Main app component with routing
└── main.jsx              # App entry point
```

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
This will start the development server at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```
Output will be in the `dist/` folder

### 4. Preview Production Build
```bash
npm run preview
```

## Available Pages

- **Home** (`/`) - Homepage with banner and product showcase
- **About** (`/about`) - Company info and mission
- **Products** (`/product`) - Product catalog
- **Gallery** (`/gallery`) - Portfolio and image gallery
- **Services** (`/service`) - Services offered
- **Contact** (`/contact`) - Contact form and information

## SEO Features

- ✅ Dynamic meta tags for each page
- ✅ Open Graph (OG) tags for social sharing
- ✅ Twitter Card meta tags
- ✅ JSON-LD organization schema
- ✅ Canonical URLs
- ✅ Responsive and accessible design

## Converting from PHP to React

### Key Changes:

1. **Routing**: Instead of separate PHP files, React Router handles navigation
2. **Components**: PHP includes (header, footer) are now React components
3. **SEO**: `react-helmet-async` replaces PHP meta tag generation
4. **Form Handling**: React state manages form data
5. **Assets**: All static assets (CSS, JS, images) work the same way

### Configuration Files:

- **index.html** - Single entry point (replaces separate .php files)
- **vite.config.js** - Build configuration
- **package.json** - Dependencies and scripts

## Deployment

### For Production:
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes

### For Laragon:
1. Keep the `assets` folder as is
2. Point Laragon to the root directory
3. Access via `http://localhost/bhowmika/`

## Technologies Used

- React 18
- Vite
- React Router v6
- React Helmet Async
- Bootstrap 5
- Font Awesome 6
- JavaScript ES6+

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 BHOWMIKA. All rights reserved.

## Support

For questions or issues, contact: akhilkalladikode774@gmail.com
