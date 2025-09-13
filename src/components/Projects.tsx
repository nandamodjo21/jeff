import { createSignal, onMount } from 'solid-js'
import './Projects.css'

export default function Projects() {
  const [isVisible, setIsVisible] = createSignal(false)
  const [activeFilter, setActiveFilter] = createSignal('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      technologies: ['Vue.js', 'Socket.io', 'Express', 'PostgreSQL'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather and forecasts with beautiful animations and interactive maps.',
      image: '🌤️',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 4,
      title: 'REST API Service',
      description: 'A robust REST API built with Node.js and Express, featuring authentication, rate limiting, and comprehensive documentation.',
      image: '🔌',
      technologies: ['Node.js', 'Express', 'JWT', 'Swagger'],
      category: 'backend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with SolidJS, featuring smooth animations and interactive elements.',
      image: '💼',
      technologies: ['SolidJS', 'TypeScript', 'CSS3', 'Vite'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
      image: '💬',
      technologies: ['React', 'Socket.io', 'Node.js', 'Redis'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = () => {
    if (activeFilter() === 'all') return projects
    return projects.filter(project => project.category === activeFilter())
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('projects')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  })

  return (
    <section id="projects" class="projects">
      <div class="container">
        <div class={`projects-content ${isVisible() ? 'visible' : ''}`}>
          <h2 class="section-title">My Projects</h2>
          <p class="section-subtitle">
            Here are some of my recent work and side projects
          </p>
          
          <div class="projects-filters">
            {filters.map((filter) => (
              <button
                class={`filter-btn ${activeFilter() === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          <div class="projects-grid">
            {filteredProjects().map((project) => (
              <div class={`project-card ${project.featured ? 'featured' : ''}`}>
                <div class="project-image">
                  <div class="project-icon">{project.image}</div>
                  {project.featured && <div class="featured-badge">Featured</div>}
                </div>
                
                <div class="project-content">
                  <h3 class="project-title">{project.title}</h3>
                  <p class="project-description">{project.description}</p>
                  
                  <div class="project-technologies">
                    {project.technologies.map((tech) => (
                      <span class="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div class="project-links">
                    <a href={project.liveUrl} class="project-link" target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                      <span class="link-icon">↗</span>
                    </a>
                    <a href={project.githubUrl} class="project-link" target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                      <span class="link-icon">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div class="projects-cta">
            <p>Interested in seeing more of my work?</p>
            <a href="https://github.com/yourusername" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
