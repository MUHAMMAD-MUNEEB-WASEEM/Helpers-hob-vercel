# Helpers Hub - Branding Information Website

A modern, SEO-friendly branding information website for Helpers Hub built with Next.js, React, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with full responsiveness
- **SEO Optimized**: Built with Next.js for excellent SEO performance
- **Modern UI**: Clean, professional design using Tailwind CSS
- **Brand Colors**: Orange (#FF8C00), Blue (#0052CC), and Green (#22C55E)
- **Multiple Pages**: Home, About, Services, Team, Contact, FAQ, Privacy, and Terms

## Pages

- **Home** (`/`) - Hero section with services overview and call-to-action
- **About** (`/about`) - Organization story, mission, vision, and values
- **Services** (`/services`) - Detailed service offerings and how we work
- **Team** (`/team`) - Meet the leadership team
- **Contact** (`/contact`) - Contact form and office information
- **FAQ** (`/faq`) - Frequently asked questions
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
helpers-hub/
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   ├── services/
│   ├── team/
│   ├── contact/
│   ├── faq/
│   ├── privacy/
│   └── terms/
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── About.tsx           # About section
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

### Colors

Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    orange: '#FF8C00',
    blue: '#0052CC',
    green: '#22C55E',
  },
}
```

### Content

Edit individual page files in the `app/` directory to customize content.

### Logo

Replace the logo placeholder in `components/Navigation.tsx` with your actual logo image.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React 18** - UI library

## SEO Features

- Meta tags for all pages
- Open Graph support
- Semantic HTML structure
- Mobile-responsive design
- Fast page load times with Next.js optimization

## License

This project is proprietary and confidential.

## Support

For questions or support, contact: info@helpershub.org
