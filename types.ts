import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  path: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialProofLogo {
  name: string;
  url: string; // Placeholder for logo image URL
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  content: string;
  image: string;
}