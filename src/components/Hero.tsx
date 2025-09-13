import TypeWriter from './TypeWriter'
import './Hero.css'

export default function Hero() {
  const texts = [
    'Full Stack Developer',
    'React Specialist',
    'Node.js Expert',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" class="hero">
      <div class="hero-background">
        <div class="hero-particles"></div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Hi, I'm <span class="highlight">Jeff Modjo</span>
            </h1>
            <h2 class="hero-subtitle">
              <TypeWriter texts={texts} speed={100} deleteSpeed={50} pauseTime={2000} />
            </h2>
            <p class="hero-description">
              Passionate developer with 5+ years of experience building 
              modern web applications. I love creating efficient, scalable, 
              and user-friendly solutions.
            </p>
            <div class="hero-buttons">
              <button class="btn btn-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
              <button class="btn btn-secondary">
                Download CV
              </button>
            </div>
          </div>
          
          <div class="hero-image">
            <div class="hero-avatar">
              <div class="avatar-placeholder">
                <div class="avatar-icon">👨‍💻</div>
              </div>
              <div class="hero-badge">
                <span>Available for work</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="hero-scroll">
          <div class="scroll-indicator">
            <span>Scroll down</span>
            <div class="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
