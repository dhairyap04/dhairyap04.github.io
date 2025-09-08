# Dhairya Prajapati - Portfolio Website

A modern, futuristic portfolio website built with React, TypeScript, and Tailwind CSS. This website showcases my skills, projects, and experience as a software developer and engineering intern candidate.

## 🚀 Features

- **Modern Design**: Futuristic UI with glassmorphism effects and neon accents
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets
- **SEO Ready**: Meta tags, structured data, and accessibility features
- **Contact Form**: EmailJS integration for contact form functionality

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion, React Intersection Observer
- **Routing**: React Router DOM
- **Email**: EmailJS for contact form
- **SEO**: React Helmet Async
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/dhairyap04/dhairyap04.github.io.git
cd dhairyap04.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

### Personal Information

Update your personal information in `src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Subtitle",
  bio: "Your bio...",
  location: "Your Location",
  email: "your.email@example.com",
  github: "your-github-username",
  linkedin: "your-linkedin-username",
  resumeUrl: "/resume.pdf",
};
```

### Projects

Add your projects in the `projects` array in `src/data/portfolio.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description",
    longDescription: "Detailed project description",
    image: "/path/to/image",
    technologies: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/your-username/project",
    liveUrl: "https://your-project.com",
    category: "fullstack",
    featured: true,
  },
];
```

### Skills

Update your skills in the `skills` array in `src/data/portfolio.ts`:

```typescript
export const skills: Skill[] = [
  { name: "React", level: 85, category: "frontend", icon: "⚛️" },
  { name: "TypeScript", level: 75, category: "frontend", icon: "🔷" },
  // Add more skills...
];
```

### Experience

Update your experience and education in the `experience` array in `src/data/portfolio.ts`:

```typescript
export const experience: Experience[] = [
  {
    id: 1,
    title: "Your Position",
    company: "Company Name",
    location: "Location",
    startDate: "Start Date",
    endDate: "End Date",
    description: ["Description point 1", "Description point 2"],
    technologies: ["Technology 1", "Technology 2"],
    type: "work", // or "education" or "project"
  },
];
```

### Colors and Theme

Customize the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'space-navy': '#0a0a23',
      'electric-blue': '#00d4ff',
      'neon-cyan': '#39ff14',
      // Add your custom colors...
    }
  }
}
```

## 📧 Email Configuration

To enable the contact form, you'll need to set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the configuration in `src/utils/constants.ts`:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "your_service_id",
  TEMPLATE_ID: "your_template_id",
  PUBLIC_KEY: "your_public_key",
};
```

4. Update the contact form in `src/components/sections/Contact.tsx` to use the actual EmailJS service.

## 🚀 Deployment

### GitHub Pages

1. Build the project:

```bash
npm run build
```

2. Deploy to GitHub Pages:

```bash
npm run deploy
```

The website will be available at `https://dhairyap04.github.io`

### Custom Domain

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Update the `homepage` field in `package.json` with your custom domain

## 📱 Responsive Design

The website is built with a mobile-first approach and includes breakpoints for:

- Mobile: 320px - 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

## ♿ Accessibility

The website includes:

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators

## 🎯 Performance

Optimizations include:

- Code splitting with React.lazy()
- Image optimization
- Bundle size optimization
- Lazy loading for images
- Efficient animations
- Minimal re-renders

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/dhairyap04/dhairyap04.github.io/issues).

## 📞 Contact

- **Email**: dhairyap04@example.com
- **LinkedIn**: [dhairyap04](https://linkedin.com/in/dhairyap04)
- **GitHub**: [dhairyap04](https://github.com/dhairyap04)

---

Made with ❤️ and React
