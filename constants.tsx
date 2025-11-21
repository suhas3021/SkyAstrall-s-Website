import { Project, Product, SocialProofLogo, NavLink, Testimonial, Service } from './types';
import { Cloud, Shield, Database, Activity, Box, Layers, Wifi, Settings, Server, Bot, Cpu, Rocket } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'NeoBank Dashboard',
    category: 'FinTech',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    link: '#',
  },
  {
    id: '2',
    title: 'HealthTrack Pro',
    category: 'Healthcare',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    link: '#',
  },
  {
    id: '3',
    title: 'EcoSupply Chain',
    category: 'Logistics',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    link: '#',
  },
  {
    id: '4',
    title: 'Urban Real Estate',
    category: 'Property Tech',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    link: '#',
  },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'End-to-End IoT Solutions',
    description: 'Connecting physical devices to the digital world with secure, scalable infrastructure for real-time data and control.',
    icon: Wifi,
  },
  {
    id: 's2',
    title: 'Business Process Automation',
    description: 'Streamlining workflows and reducing manual overhead through intelligent automation scripts and custom tooling.',
    icon: Settings,
  },
  {
    id: 's3',
    title: 'Custom Backend Architecture',
    description: 'Designing robust, high-performance server-side systems tailored to handle complex data logic and scale.',
    icon: Server,
  },
  {
    id: 's4',
    title: 'Advanced Bot Development',
    description: 'Building intelligent conversational agents and automated bots to enhance customer support and operations.',
    icon: Bot,
  },
  {
    id: 's5',
    title: 'Embedded Systems Engineering',
    description: 'Specialized low-level firmware and hardware integration for industrial and consumer electronics.',
    icon: Cpu,
  },
  {
    id: 's6',
    title: 'Rapid MVP Prototyping',
    description: 'Fast-tracking ideas to market with functional Minimum Viable Products built for speed and iteration.',
    icon: Rocket,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'NovaCloud',
    description: 'A scalable cloud infrastructure management tool for enterprise teams.',
    icon: Cloud,
    link: '#',
  },
  {
    id: 'p2',
    name: 'SecureGate',
    description: 'Next-gen firewall and identity protection for remote workforces.',
    icon: Shield,
    link: '#',
  },
  {
    id: 'p3',
    name: 'DataFlow',
    description: 'Real-time analytics and data pipeline visualization platform.',
    icon: Database,
    link: '#',
  },
  {
    id: 'p4',
    name: 'PulseMonitor',
    description: 'Server uptime monitoring with AI-driven incident prediction.',
    icon: Activity,
    link: '#',
  },
  {
    id: 'p5',
    name: 'ContainerBox',
    description: 'Simplified Docker orchestration for small development teams.',
    icon: Box,
    link: '#',
  },
  {
    id: 'p6',
    name: 'LayerUI',
    description: 'A comprehensive React UI component library for internal tools.',
    icon: Layers,
    link: '#',
  },
];

// Using text placeholders for logos in this example, but could be images
export const CLIENT_LOGOS: SocialProofLogo[] = [
  { name: 'Acme Corp', url: 'https://picsum.photos/200/80?random=10' },
  { name: 'Globex', url: 'https://picsum.photos/200/80?random=11' },
  { name: 'Soylent', url: 'https://picsum.photos/200/80?random=12' },
  { name: 'Initech', url: 'https://picsum.photos/200/80?random=13' },
  { name: 'Umbrella', url: 'https://picsum.photos/200/80?random=14' },
  { name: 'Massive', url: 'https://picsum.photos/200/80?random=15' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenks',
    designation: 'CTO, FinTech Solutions',
    content: "SkyAstrall transformed our legacy infrastructure into a modern, scalable cloud architecture. The team's expertise in financial compliance was invaluable.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 't2',
    name: 'Michael Ross',
    designation: 'Founder, HealthConnect',
    content: "We needed an MVP in 3 months, and SkyAstrall delivered in 2. The code quality is exceptional, and the UI is exactly what our users needed.",
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 't3',
    name: 'Jessica Williams',
    designation: 'VP of Product, EcoLogistics',
    content: "Their ability to translate complex business requirements into intuitive software is unmatched. A truly partner-driven approach.",
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];