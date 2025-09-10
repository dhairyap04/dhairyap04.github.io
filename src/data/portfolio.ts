// Using absolute paths for images from public folder
const githubIcon = '/images/github_logo.png';
const linkedinIcon = '/images/linkedin_logo.png';
const dockerIcon = '/images/docker_logo.png';
const pythonIcon = '/images/python_logo.jpeg';
const javaIcon = '/images/java_logo.png';
const reactIcon = '/images/react_logo.jpeg';
const javascriptIcon = '/images/javascript_logo.png';
const typescriptIcon = '/images/typescript_logo.png';
const html5Icon = '/images/html_logo.jpeg';
const css3Icon = '/images/css_logo.jpeg';
const tailwindIcon = '/images/tailwind_logo.png';
const nodejsIcon = '/images/node_logo.jpeg';
const sqlIcon = '/images/sql_logo.png';
const gitIcon = '/images/git_logo.png';
const vscodeIcon = '/images/vscode_logo.png';
const algorithmsIcon = '/images/algorithms_logo.png';
const oopIcon = '/images/oop_logo.jpeg';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'other';
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'concepts';
  icon?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education' | 'project';
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
  phone?: string;
}

export const personalInfo = {
  name: "Dhairya Prajapati",
  title: "Software Developer",
  subtitle: "Engineering Intern Candidate",
  bio: "Passionate software developer with a strong foundation in computer science fundamentals. Eager to learn and grow in a collaborative environment while contributing to innovative projects. I love solving complex problems and building applications that make a difference.",
  location: "Edmonton, Alberta",
  email: "d.prajapati3430@gmail.com",
  github: "https://github.com/dhairyap04",
  linkedin: "https://www.linkedin.com/in/dprajapati3430/",
  resumeUrl: "/resume.pdf"
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 85, category: "frontend", icon: reactIcon },
  { name: "JavaScript", level: 90, category: "frontend", icon: javascriptIcon },
  { name: "TypeScript", level: 75, category: "frontend", icon: typescriptIcon },
  { name: "HTML5", level: 95, category: "frontend", icon: html5Icon },
  { name: "CSS3", level: 90, category: "frontend", icon: css3Icon },
  { name: "Tailwind CSS", level: 80, category: "frontend", icon: tailwindIcon },
  
  // Backend
  { name: "Node.js", level: 70, category: "backend", icon: nodejsIcon },
  { name: "Python", level: 85, category: "backend", icon: pythonIcon },
  { name: "Java", level: 80, category: "backend", icon: javaIcon },
  { name: "SQL", level: 75, category: "backend", icon: sqlIcon },

  // Tools
  { name: "Git", level: 85, category: "tools", icon: gitIcon },
  { name: "GitHub", level: 90, category: "tools", icon: githubIcon },
  { name: "VS Code", level: 95, category: "tools", icon: vscodeIcon },
  { name: "Docker", level: 60, category: "tools", icon: dockerIcon },
  
  // Concepts
  { name: "Data Structures", level: 85, category: "concepts", icon: "📊" },
  { name: "Algorithms", level: 80, category: "concepts", icon: algorithmsIcon },
  { name: "OOP", level: 90, category: "concepts", icon: oopIcon },
  { name: "Responsive Design", level: 85, category: "concepts", icon: "📱" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "HealthMap360",
    description: "Full-stack health monitoring application with React frontend and Node.js backend",
    longDescription: "A comprehensive health monitoring platform built with modern web technologies. Features include user authentication, health data visualization, appointment scheduling, and admin dashboard. The application demonstrates full-stack development skills and modern software engineering practices.",
    image: "/api/placeholder/600/400",
    technologies: ["Typescript", "Vite.js", "MongoDB", "Docker", "Stripe", "FastAPI"],
    githubUrl: "https://github.com/dhairyap04/healthmap360",
    liveUrl: "https://healthmap360-demo.netlify.app",
    category: "fullstack",
    featured: true
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "Showcase of my projects, skills, and experience",
    longDescription: "A personal portfolio website built with Typescript, React and Tailwind CSS. Features include project showcases, skill highlights, and an experience timeline section. The website is fully responsive and optimized for performance.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Typescript", "Tailwind CSS", "Vite.js"],
    githubUrl: "https://github.com/dhairyap04/dhairyap04.github.io",
    liveUrl: "https://dhairyap04.github.io",
    category: "frontend",
    featured: true
  },
  {
    id: 3,
    title: "MealDrop",
    description: "Interactive application that connects restaurants with surplus food to local shelters",
    longDescription: "A responsive application that connects restaurants with surplus food to local shelters. Features include real-time food donation tracking, user authentication, and an admin dashboard for managing donations. Demonstrates full-stack development skills and modern web technologies.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    githubUrl: "https://github.com/dhairyap04/mealdrop",
    liveUrl: "https://mealdrop-demo.netlify.app",
    category: "mobile",
    featured: true
  },
  {
    id: 4,
    title: "Orange Events",
    description: "Interactive android application for event management and ticketing",
    longDescription: "An interactive android application that allows users to create, manage, and attend events. Features include event creation, ticketing, user authentication, and real-time notifications. Built with a focus on user experience and mobile performance.",
    image: "/api/placeholder/600/400",
    technologies: ["Java", "AndroidStudio", "Firebase", "XML"],
    githubUrl: "https://github.com/CMPUT301F24orange/orange-events",
    liveUrl: "https://orange-events-demo.netlify.app",
    category: "mobile",
    featured: true
  },
  {
    id: 5,
    title: "BrickBreaker",
    description: "Interactive android application for a classic brick-breaking game",
    longDescription: "An interactive android application that brings the classic brick-breaking game back with a twist. Features include multiple levels, power-ups, and user authentication. Built with a focus on user experience and performance.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "PyGame", "Git"],
    githubUrl: "https://github.com/dhairyap04/BrickBreaker",
    liveUrl: "https://brickbreaker-demo.netlify.app",
    category: "frontend",
    featured: true
  }
];

export const experience: Experience[] = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "Government of Alberta - Ministry of Environment and Protected Areas",
    location: "Edmonton, Alberta",
    startDate: "May 2025",
    endDate: "December 2025",
    description: [
      "Automated data processing for compliance reports from 200+ facilities, reducing processing time by 60%",
      "Built and maintained data ingestion pipelines for oil and gas facility benchmarks",
      "Optimized data retrieval with SQL integration, improving performance by 95%",
      "Implemented comprehensive testing coverage for data pipeline modules"
    ],
    technologies: ["Python", "SQL", "Django", "ETL", "Unit Testing", "Git", "Data Pipeline"],
    type: "work"
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "ShoeBox Studios",
    location: "Remote",
    startDate: "May 2024",
    endDate: "August 2024",
    description: [
      "Optimized product UI/UX using React and NodeJS",
      "Managed database systems with Docker and Kubernetes deployment",
      "Led development of company's official website with dynamic content integration"
    ],
    technologies: ["React", "NodeJS", "Docker", "Kubernetes", "HTML", "CSS", "JavaScript"],
    type: "work"
  },
  {
    id: 3,
    title: "Admin Co-Lead and Software Team Member",
    company: "AlbertaSat",
    location: "Edmonton, Alberta",
    startDate: "January 2024",
    endDate: "Present",
    description: [
      "Implemented OBC simulation using a Zybo Z7 arduino for satellite subsystem testing",
      "Developed UHF Transceiver simulation for Ex-Alta 3 satellite",
      "Led administrative operations for a 300+ member satellite project team"
    ],
    technologies: ["Python", "Hardware Testing", "UHF Systems", "Project Management", "Team Leadership"],
    type: "project"
  },
  {
    id: 4,
    title: "Computing Science Major with Business Minor",
    company: "University of Alberta",
    location: "Edmonton, Alberta",
    startDate: "2022",
    endDate: "2026",
    description: [
      "Pursuing Bachelor's degree in Computing Science with a minor in Business",
      "Maintaining strong academic performance with focus on software engineering",
      "Completed coursework in Data Structures, Algorithms, and Software Engineering",
      "Active in computer science clubs, project-based groups, and hackathons"
    ],
    technologies: ["Java", "Python", "C++", "Data Structures", "Algorithms"],
    type: "education"
  },
];

export const contactInfo: ContactInfo = {
  email: "d.prajapati3430@gmail.com",
  linkedin: "https://linkedin.com/in/dprajapati3430",
  github: "https://github.com/dhairyap04",
  location: "Edmonton, Alberta",
  phone: "+1 (587) 599-4644"
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/dhairyap04", icon: githubIcon },
  { name: "LinkedIn", url: "https://linkedin.com/in/dprajapati3430", icon: linkedinIcon },
  { name: "Email", url: "mailto:d.prajapati3430@gmail.com", icon: "📧" },
  { name: "Resume", url: "/resume.pdf", icon: "📄" }
];
