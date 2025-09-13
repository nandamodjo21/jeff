import { createSignal, onMount } from 'solid-js'
import AnimatedCounter from './AnimatedCounter'
import './About.css'

export default function About() {
  const [isVisible, setIsVisible] = createSignal(false)

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

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  })

  return (
    <section id="about" class="about">
      <div class="container">
        <div class={`about-content ${isVisible() ? 'visible' : ''}`}>
          <div class="about-text">
            <h2 class="section-title">About Me</h2>
            <p class="about-description">
              I'm a passionate full-stack developer with over 5 years of experience 
              in creating digital solutions that make a difference. My journey in 
              technology started with curiosity and has evolved into a deep love 
              for building innovative applications.
            </p>
            <p class="about-description">
              I specialize in modern web technologies and have a strong foundation 
              in both frontend and backend development. My goal is to create 
              applications that are not only functional but also provide an 
              exceptional user experience.
            </p>
            
            <div class="about-stats">
              <div class="stat">
                <h3><AnimatedCounter end={50} suffix="+" /></h3>
                <p>Projects Completed</p>
              </div>
              <div class="stat">
                <h3><AnimatedCounter end={5} suffix="+" /></h3>
                <p>Years Experience</p>
              </div>
              <div class="stat">
                <h3><AnimatedCounter end={30} suffix="+" /></h3>
                <p>Happy Clients</p>
              </div>
              <div class="stat">
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
            </div>
          </div>
          
          <div class="about-image">
            <div class="about-card">
              <div class="card-header">
                <h3>My Journey</h3>
              </div>
              <div class="card-content">
                <div class="timeline">
                  <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <h4>2023 - Present</h4>
                      <p>Senior Full Stack Developer at TechCorp</p>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <h4>2021 - 2023</h4>
                      <p>Full Stack Developer at StartupXYZ</p>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <h4>2019 - 2021</h4>
                      <p>Frontend Developer at WebAgency</p>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <h4>2018 - 2019</h4>
                      <p>Computer Science Graduate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
