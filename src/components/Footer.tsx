import { createSignal, onMount } from 'solid-js'
import './Footer.css'

export default function Footer() {
  const [currentYear, setCurrentYear] = createSignal(new Date().getFullYear())

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/johndoe' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/johndoe' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/johndoe' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/johndoe' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-main">
            <div class="footer-section">
              <h3 class="footer-title">John Doe</h3>
              <p class="footer-description">
                Full Stack Developer passionate about creating 
                innovative web solutions and delivering exceptional user experiences.
              </p>
              <div class="footer-social">
                {socialLinks.map((social) => (
                  <a 
                    href={social.url} 
                    class="social-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                    title={social.name}
                  >
                    <span class="social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div class="footer-section">
              <h4 class="footer-subtitle">Quick Links</h4>
              <ul class="footer-links">
                {quickLinks.map((link) => (
                  <li>
                    <a href={link.href} onClick={() => {
                      const element = document.getElementById(link.href.substring(1))
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div class="footer-section">
              <h4 class="footer-subtitle">Contact Info</h4>
              <div class="footer-contact">
                <div class="contact-item">
                  <span class="contact-icon">📧</span>
                  <span>john.doe@example.com</span>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📍</span>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            <div class="footer-section">
              <h4 class="footer-subtitle">Newsletter</h4>
              <p class="newsletter-text">
                Subscribe to get updates on my latest projects and blog posts.
              </p>
              <div class="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  class="newsletter-input"
                />
                <button class="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
          
          <div class="footer-bottom">
            <div class="footer-copyright">
              <p>&copy; {currentYear()} John Doe. All rights reserved.</p>
            </div>
            <div class="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
            <button class="scroll-top-btn" onClick={scrollToTop}>
              <span class="scroll-top-icon">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
