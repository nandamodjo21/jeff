import { createSignal } from 'solid-js'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = createSignal({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = createSignal(false)
  const [submitStatus, setSubmitStatus] = createSignal('')

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus('')
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'john.doe@example.com',
      link: 'mailto:john.doe@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/johndoe',
      link: 'https://linkedin.com/in/johndoe'
    }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/johndoe' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/johndoe' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/johndoe' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/johndoe' }
  ]

  return (
    <section id="contact" class="contact">
      <div class="container">
        <div class="contact-content">
          <div class="contact-header">
            <h2 class="section-title">Get In Touch</h2>
            <p class="section-subtitle">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
          </div>
          
          <div class="contact-main">
            <div class="contact-info">
              <h3>Let's Connect</h3>
              <p>
                Whether you have a project in mind, want to collaborate, 
                or just want to say hello, I'd love to hear from you!
              </p>
              
              <div class="contact-details">
                {contactInfo.map((info) => (
                  <div class="contact-item">
                    <span class="contact-icon">{info.icon}</span>
                    <div class="contact-text">
                      <h4>{info.title}</h4>
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div class="social-links">
                <h4>Follow Me</h4>
                <div class="social-icons">
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
            </div>
            
            <div class="contact-form-container">
              <form class="contact-form" onSubmit={handleSubmit}>
                <div class="form-group">
                  <label for="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData().name}
                    onInput={(e) => handleInputChange('name', e.currentTarget.value)}
                    required
                    placeholder="Your full name"
                  />
                </div>
                
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    value={formData().email}
                    onInput={(e) => handleInputChange('email', e.currentTarget.value)}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div class="form-group">
                  <label for="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData().subject}
                    onInput={(e) => handleInputChange('subject', e.currentTarget.value)}
                    required
                    placeholder="What's this about?"
                  />
                </div>
                
                <div class="form-group">
                  <label for="message">Message *</label>
                  <textarea
                    id="message"
                    value={formData().message}
                    onInput={(e) => handleInputChange('message', e.currentTarget.value)}
                    required
                    placeholder="Tell me about your project or idea..."
                    rows="5"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  class={`btn btn-primary ${isSubmitting() ? 'loading' : ''}`}
                  disabled={isSubmitting()}
                >
                  {isSubmitting() ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus() === 'success' && (
                  <div class="form-success">
                    <span class="success-icon">✅</span>
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
