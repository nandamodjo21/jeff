import { createSignal, onMount } from 'solid-js'
import './Skills.css'

export default function Skills() {
  const [isVisible, setIsVisible] = createSignal(false)
  const [activeCategory, setActiveCategory] = createSignal('frontend')

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'JavaScript', level: 95, icon: '🟨' },
        { name: 'HTML5', level: 98, icon: '🌐' },
        { name: 'CSS3', level: 92, icon: '🎨' },
        { name: 'Vue.js', level: 85, icon: '💚' },
        { name: 'Angular', level: 80, icon: '🔴' },
        { name: 'Sass/SCSS', level: 88, icon: '💅' }
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 92, icon: '🟢' },
        { name: 'Python', level: 88, icon: '🐍' },
        { name: 'Express.js', level: 90, icon: '🚀' },
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'PostgreSQL', level: 87, icon: '🐘' },
        { name: 'Redis', level: 80, icon: '🔴' },
        { name: 'Docker', level: 82, icon: '🐳' },
        { name: 'AWS', level: 75, icon: '☁️' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 95, icon: '📝' },
        { name: 'Webpack', level: 85, icon: '📦' },
        { name: 'Vite', level: 90, icon: '⚡' },
        { name: 'Figma', level: 80, icon: '🎨' },
        { name: 'VS Code', level: 98, icon: '💻' },
        { name: 'Linux', level: 85, icon: '🐧' },
        { name: 'Jest', level: 88, icon: '🧪' },
        { name: 'Cypress', level: 82, icon: '🌲' }
      ]
    }
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

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  })

  return (
    <section id="skills" class="skills">
      <div class="container">
        <div class={`skills-content ${isVisible() ? 'visible' : ''}`}>
          <h2 class="section-title">Skills & Expertise</h2>
          <p class="section-subtitle">
            Here are the technologies and tools I work with
          </p>
          
          <div class="skills-categories">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                class={`category-btn ${activeCategory() === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                {category.title}
              </button>
            ))}
          </div>
          
          <div class="skills-grid">
            {skillCategories[activeCategory()].skills.map((skill) => (
              <div class="skill-item">
                <div class="skill-header">
                  <span class="skill-icon">{skill.icon}</span>
                  <span class="skill-name">{skill.name}</span>
                  <span class="skill-percentage">{skill.level}%</span>
                </div>
                <div class="skill-bar">
                  <div 
                    class="skill-progress" 
                    style={`width: ${isVisible() ? skill.level : 0}%`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div class="skills-summary">
            <div class="summary-card">
              <h3>Frontend Focus</h3>
              <p>Modern React applications with TypeScript, responsive design, and optimal performance</p>
            </div>
            <div class="summary-card">
              <h3>Backend Expertise</h3>
              <p>Scalable Node.js APIs, database design, and cloud deployment solutions</p>
            </div>
            <div class="summary-card">
              <h3>Full Stack</h3>
              <p>End-to-end development from concept to deployment with modern tools and practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
