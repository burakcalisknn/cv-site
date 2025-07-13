export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  avatar: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    website: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "John Doe",
  title: "Full Stack Software Engineer",
  email: "john.doe@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  about: "Passionate full-stack developer with 6+ years of experience building modern web applications. Specialized in React, Node.js, and cloud technologies. Committed to writing clean, maintainable code and creating exceptional user experiences.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  socialLinks: {
    github: "#",
    linkedin: "#",
    twitter: "#",
    website: "#"
  }
};

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "TechCorp Inc.",
    position: "Senior Full Stack Engineer",
    duration: "2022 - Present",
    description: "Lead development of scalable web applications serving 1M+ users. Mentored 5 junior developers and implemented CI/CD pipelines reducing deployment time by 60%.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker", "Kubernetes"]
  },
  {
    id: 2,
    company: "InnovateStartup",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: "Built and maintained multiple web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality products on time.",
    technologies: ["JavaScript", "Python", "Django", "PostgreSQL", "Redis", "Elasticsearch"]
  },
  {
    id: 3,
    company: "Digital Solutions Agency",
    position: "Frontend Developer",
    duration: "2018 - 2020",
    description: "Developed responsive websites and e-commerce solutions for various clients. Optimized performance and improved user experience scores by 40%.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "WordPress", "PHP"]
  }
];

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  description: string;
}

export const education: Education[] = [
  {
    id: 1,
    institution: "Stanford University",
    degree: "Bachelor's Degree",
    field: "Computer Science",
    duration: "2014 - 2018",
    description: "Graduated with honors. Specialized in software engineering and web technologies."
  },
  {
    id: 2,
    institution: "MIT OpenCourseWare",
    degree: "Certification",
    field: "Advanced Web Development",
    duration: "2019",
    description: "Completed comprehensive course on modern web development practices and technologies."
  },
  {
    id: 3,
    institution: "AWS",
    degree: "Certification",
    field: "AWS Solutions Architect",
    duration: "2021",
    description: "Certified AWS Solutions Architect with expertise in cloud infrastructure and deployment."
  }
];

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const skills: Skill[] = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "Vue.js", level: 80, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Python", level: 85, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "Django", level: 80, category: "Backend" },
  { name: "GraphQL", level: 75, category: "Backend" },
  
  { name: "PostgreSQL", level: 85, category: "Database" },
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "Redis", level: 75, category: "Database" },
  { name: "Elasticsearch", level: 70, category: "Database" },
  
  { name: "AWS", level: 85, category: "Cloud & DevOps" },
  { name: "Docker", level: 80, category: "Cloud & DevOps" },
  { name: "Kubernetes", level: 70, category: "Cloud & DevOps" },
  { name: "CI/CD", level: 80, category: "Cloud & DevOps" },
  
  { name: "Git", level: 95, category: "Tools" },
  { name: "Linux", level: 80, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" }
];

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A scalable e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, payment integration with Stripe, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and advanced analytics.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    technologies: ["React", "Socket.io", "MongoDB", "Express", "Redis"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A comprehensive weather dashboard with real-time data, interactive charts, location-based forecasts, and historical weather analysis.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "AI Chat Application",
    description: "An intelligent chat application powered by AI, featuring real-time messaging, sentiment analysis, and smart response suggestions.",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=600&h=400&fit=crop",
    technologies: ["Next.js", "OpenAI API", "Socket.io", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#"
  }
]; 