import { createSignal } from 'solid-js'
import './CTA.css'

export default function CTA() {
  const [, setIsHovered] = createSignal(false)

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <div class="cta-text">
            <h2 class="cta-title">Ready to Start Your Project?</h2>
            <p class="cta-description">
              Let's work together to bring your ideas to life. I'm here to help you create 
              something amazing that will make a real impact.
            </p>
          </div>
          
          <div class="cta-actions">
            <button 
              class="btn btn-primary cta-btn"
              onClick={scrollToContact}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span class="btn-text">Get Started Today</span>
              <span class="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </span>
            </button>
            
            <a href="tel:+15551234567" class="cta-link">
              <span class="link-icon">📞</span>
              <span class="link-text">Call Now</span>
            </a>
          </div>
        </div>
        
        <div class="cta-features">
          <div class="feature-item">
            <div class="feature-icon">⚡</div>
            <div class="feature-text">
              <h4>Fast Delivery</h4>
              <p>Quick turnaround times</p>
            </div>
          </div>
          
          <div class="feature-item">
            <div class="feature-icon">🎯</div>
            <div class="feature-text">
              <h4>Quality Focused</h4>
              <p>Attention to detail</p>
            </div>
          </div>
          
          <div class="feature-item">
            <div class="feature-icon">💬</div>
            <div class="feature-text">
              <h4>24/7 Support</h4>
              <p>Always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
