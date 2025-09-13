// Global types for the portfolio application

export interface Skill {
  name: string
  level: number
  icon: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export interface WorkExperience {
  company: string
  position: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Education {
  institution: string
  degree: string
  period: string
  location: string
  description: string
  achievements: string[]
}

export interface Certification {
  name: string
  issuer: string
  date: string
  credential: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  tags: string[]
}

export interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface Stat {
  id: number
  value: number
  label: string
  icon: string
  color: string
}
