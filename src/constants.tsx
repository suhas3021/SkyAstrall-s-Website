import {
  Project,
  Product,
  SocialProofLogo,
  NavLink,
  Testimonial,
  Service,
} from "./types";
import {
  Cloud,
  Shield,
  Database,
  Activity,
  Box,
  Layers,
  Settings,
  Bot,
  Cpu,
  Code,
  Palette,
  Brain,
  Globe,
  Zap,
} from "lucide-react";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AWH Clinics",
    category: "Healthcare",
    imageUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    link: "https://awhclinics.com/",
  },
  {
    id: "2",
    title: "Chase Your Dreams India",
    category: "Life Coaching",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    link: "http://chaseyourdreamsindia.com/",
  },
  {
    id: "3",
    title: "Tiny Imagination Montessori",
    category: "Education",
    imageUrl:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    link: "http://tinyimaginationmontessori.in/",
  },
  {
    id: "4",
    title: "MJPTBCWRDC Women's College",
    category: "Government Education",
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
    link: "https://mjptbcwrdcwomenwargal.ac.in/",
  },
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications using React, Python/Django, and modern JavaScript frameworks with responsive, pixel-perfect interfaces.",
    icon: Code,
  },
  {
    id: "s2",
    title: "UI/UX Design & Branding",
    description:
      "Crafting luxury brand identities, intuitive user interfaces, and comprehensive design systems that elevate your digital presence.",
    icon: Palette,
  },
  {
    id: "s3",
    title: "AI & Machine Learning",
    description:
      "Implementing intelligent solutions including data analysis, predictive models, and AI-powered automation for smarter business decisions.",
    icon: Brain,
  },
  {
    id: "s4",
    title: "API Development & Integration",
    description:
      "Building robust RESTful APIs, third-party integrations, and seamless data pipelines connecting your systems together.",
    icon: Globe,
  },
  {
    id: "s5",
    title: "IoT & Embedded Systems",
    description:
      "Arduino, STM32, and custom firmware development for industrial automation, smart devices, and hardware-software integration.",
    icon: Cpu,
  },
  {
    id: "s6",
    title: "Cloud & DevOps",
    description:
      "Deployment and infrastructure on AWS, Azure, and Google Cloud with CI/CD pipelines, containerization, and scalable architecture.",
    icon: Cloud,
  },
  {
    id: "s7",
    title: "Automation & Web Scraping",
    description:
      "Python-powered automation scripts, data extraction, workflow optimization, and custom tooling to eliminate manual overhead.",
    icon: Settings,
  },
  {
    id: "s8",
    title: "Bot Development",
    description:
      "Intelligent chatbots, Discord/Telegram bots, and automated agents for customer support, notifications, and business processes.",
    icon: Bot,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Guardian MCP",
    description:
      "AI-powered code guardian that enforces architectural decisions and prevents breaking changes in your codebase.",
    icon: Shield,
    link: "https://guardianmcp.dev/",
  },
];

export const CLIENT_LOGOS: SocialProofLogo[] = [
  {
    name: "AWH Clinics",
    url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=200&h=80&fit=crop",
  },
  {
    name: "Chase Your Dreams",
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=80&fit=crop",
  },
  {
    name: "Tiny Imagination",
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=80&fit=crop",
  },
  {
    name: "MJPTBCWRDC",
    url: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=80&fit=crop",
  },
];

// TODO: Replace with real testimonials from Fiverr reviews
// Visit https://www.fiverr.com/users/gaganraj2002/ to copy actual client reviews
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Fiverr Client",
    designation: "Software Project",
    content:
      "Great job..One of the best I have worked with on Fiverr..Very profesional, code base is excellent..Greate job.",
    image:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d3891e81c4befb3f54dab93e27aebe92-1619262955848/8f6a3a14-b42c-495b-a51e-9bb14e7e0212.jpg",
  },
  {
    id: "t2",
    name: "AWH Clinics",
    designation: "Web Development Client",
    content:
      "Professional work on our clinic website. The team understood healthcare requirements and delivered a modern, accessible site that our patients love.",
    image: "https://awh-website-37320.web.app/KVNNSantoshMurthy.jpg",
  },
  {
    id: "t3",
    name: "Education Institution",
    designation: "Government Project",
    content:
      "Delivered a robust college management portal. Great attention to detail and excellent support throughout the development process.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mjpwgl.appspot.com/o/Home%2FAdministartionPics%2Fgbr.jpeg?alt=media&token=f64ba19c-4b99-4983-869c-c3fdf118ac35",
  },
];
