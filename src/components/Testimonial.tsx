import { createSignal, onMount } from 'solid-js'
import './Testimonial.css'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = createSignal(0)
  const [isAutoPlay, setIsAutoPlay] = createSignal(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'John delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the project a huge success.',
      avatar: '👩‍💼',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'Working with John was a pleasure. He brought innovative solutions to complex problems and delivered high-quality code on time. Highly recommended!',
      avatar: '👨‍💻',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Designer',
      company: 'WebAgency',
      content: 'John\'s frontend skills are outstanding. He perfectly translated our designs into pixel-perfect, responsive interfaces that work flawlessly across all devices.',
      avatar: '👩‍🎨',
      rating: 5
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'CEO',
      company: 'InnovateLab',
      content: 'The mobile app John developed for us has been a game-changer. His full-stack expertise and problem-solving approach made all the difference.',
      avatar: '👨‍💼',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  onMount(() => {
    if (isAutoPlay()) {
      const interval = setInterval(nextTestimonial, 5000)
      return () => clearInterval(interval)
    }
  })

  const currentTestimonial = () => testimonials[currentIndex()]

  return (
    <section class="testimonial">
      <div class="container">
        <div class="testimonial-content">
          <h2 class="section-title">What Clients Say</h2>
          <p class="section-subtitle">
            Don't just take my word for it - hear from some of the amazing people I've worked with
          </p>
          
          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                {currentTestimonial().avatar}
              </div>
              <div class="testimonial-info">
                <h3 class="testimonial-name">{currentTestimonial().name}</h3>
                <p class="testimonial-role">{currentTestimonial().role}</p>
                <p class="testimonial-company">{currentTestimonial().company}</p>
              </div>
              <div class="testimonial-rating">
                {Array.from({ length: currentTestimonial().rating }, (_, i) => (
                  <span class="star">⭐</span>
                ))}
              </div>
            </div>
            
            <blockquote class="testimonial-quote">
              "{currentTestimonial().content}"
            </blockquote>
            
            <div class="testimonial-controls">
              <button class="testimonial-btn prev" onClick={prevTestimonial}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              
              <div class="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    class={`testimonial-dot ${index === currentIndex() ? 'active' : ''}`}
                    onClick={() => goToTestimonial(index)}
                  />
                ))}
              </div>
              
              <button class="testimonial-btn next" onClick={nextTestimonial}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
