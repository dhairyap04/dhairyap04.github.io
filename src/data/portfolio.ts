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
  resumeUrl: "src/resume.pdf"
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 85, category: "frontend", icon: "⚛️" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "🟨" },
  { name: "TypeScript", level: 75, category: "frontend", icon: "🔷" },
  { name: "HTML5", level: 95, category: "frontend", icon: "🌐" },
  { name: "CSS3", level: 90, category: "frontend", icon: "🎨" },
  { name: "Tailwind CSS", level: 80, category: "frontend", icon: "💨" },
  
  // Backend
  { name: "Node.js", level: 70, category: "backend", icon: "🟢" },
  { name: "Python", level: 85, category: "backend", icon: "🐍" },
  { name: "Java", level: 80, category: "backend", icon: "☕" },
  { name: "SQL", level: 75, category: "backend", icon: "🗄️" },
  
  // Tools
  { name: "Git", level: 85, category: "tools", icon: "📝" },
  { name: "GitHub", level: 90, category: "tools", icon: "🐙" },
  { name: "VS Code", level: 95, category: "tools", icon: "💻" },
  { name: "Docker", level: 60, category: "tools", icon: "🐳" },
  
  // Concepts
  { name: "Data Structures", level: 85, category: "concepts", icon: "📊" },
  { name: "Algorithms", level: 80, category: "concepts", icon: "🧮" },
  { name: "OOP", level: 90, category: "concepts", icon: "🏗️" },
  { name: "Responsive Design", level: 85, category: "concepts", icon: "📱" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with React frontend and Node.js backend",
    longDescription: "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. The application demonstrates full-stack development skills and modern software engineering practices.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    githubUrl: "https://github.com/dhairyap04/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.netlify.app",
    category: "fullstack",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    longDescription: "A modern task management application that allows teams to collaborate on projects. Features include real-time updates, drag-and-drop functionality, team management, and progress tracking. Built with React and Firebase for real-time synchronization.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Firebase", "Material-UI", "Context API"],
    githubUrl: "https://github.com/dhairyap04/task-manager",
    liveUrl: "https://taskmanager-demo.netlify.app",
    category: "frontend",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts",
    longDescription: "A responsive weather dashboard that provides current weather conditions and forecasts. Features include location-based weather, interactive maps, weather alerts, and historical data visualization. Demonstrates API integration and data visualization skills.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    githubUrl: "https://github.com/dhairyap04/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.netlify.app",
    category: "frontend",
    featured: true
  },
  {
    id: 4,
    title: "Algorithm Visualizer",
    description: "Interactive visualization tool for sorting and searching algorithms",
    longDescription: "An educational tool that visualizes various sorting and searching algorithms in real-time. Users can adjust array size, speed, and algorithm type to see how different algorithms perform. Built to help students understand algorithm complexity and behavior.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "D3.js", "TypeScript", "CSS Animations"],
    githubUrl: "https://github.com/dhairyap04/algorithm-visualizer",
    liveUrl: "https://algo-visualizer-demo.netlify.app",
    category: "frontend",
    featured: false
  }
];

export const experience: Experience[] = [
  {
    id: 1,
    title: "Computer Science Student",
    company: "Your University",
    location: "Your City, State",
    startDate: "2022",
    endDate: "2026",
    description: [
      "Pursuing Bachelor's degree in Computer Science",
      "Maintaining strong academic performance with focus on software engineering",
      "Completed coursework in Data Structures, Algorithms, and Software Engineering",
      "Active in computer science clubs and coding competitions"
    ],
    technologies: ["Java", "Python", "C++", "Data Structures", "Algorithms"],
    type: "education"
  },
  {
    id: 2,
    title: "Software Development Intern",
    company: "Tech Company",
    location: "Remote",
    startDate: "Summer 2023",
    endDate: "Fall 2023",
    description: [
      "Developed responsive web applications using React and Node.js",
      "Collaborated with senior developers on feature implementation",
      "Participated in code reviews and agile development processes",
      "Contributed to improving application performance and user experience"
    ],
    technologies: ["React", "Node.js", "JavaScript", "Git", "Agile"],
    type: "work"
  },
  {
    id: 3,
    title: "Open Source Contributor",
    company: "Various Projects",
    location: "Remote",
    startDate: "2023",
    endDate: "Present",
    description: [
      "Contributed to open source projects on GitHub",
      "Fixed bugs and implemented new features",
      "Improved documentation and code quality",
      "Collaborated with global developer community"
    ],
    technologies: ["Git", "GitHub", "JavaScript", "Python", "Documentation"],
    type: "project"
  }
];

export const contactInfo: ContactInfo = {
  email: "d.prajapati3430@gmail.com",
  linkedin: "https://linkedin.com/in/dprajapati3430",
  github: "https://github.com/dhairyap04",
  location: "Edmonton, Alberta",
  phone: "+1 (587) 599-4644"
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/dhairyap04", icon: "🐙" },
  { name: "LinkedIn", url: "https://linkedin.com/in/dprajapati3430", icon: "💼" },
  { name: "Email", url: "mailto:d.prajapati3430@gmail.com", icon: "📧" },
  { name: "Resume", url: "src/resume.pdf", icon: "📄" }
];
