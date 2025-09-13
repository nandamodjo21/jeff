import { createSignal } from 'solid-js'
import './FAQ.css'

interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
}

export default function FAQ() {
  const [activeItem, setActiveItem] = createSignal<number | null>(null)
  const [activeCategory, setActiveCategory] = createSignal('all')

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'What services do you offer?',
      answer: 'I offer full-stack web development services including frontend development with React, Vue.js, and Angular, backend development with Node.js and Python, database design, API development, and cloud deployment solutions.',
      category: 'services'
    },
    {
      id: 2,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I provide detailed timelines during the initial consultation.',
      category: 'timeline'
    },
    {
      id: 3,
      question: 'Do you work with existing teams?',
      answer: 'Yes, I frequently collaborate with existing development teams, designers, and project managers. I can integrate seamlessly into your workflow and contribute to ongoing projects.',
      category: 'collaboration'
    },
    {
      id: 4,
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in modern web technologies including React, TypeScript, Node.js, Python, MongoDB, PostgreSQL, AWS, Docker, and various frontend frameworks. I stay updated with the latest industry trends.',
      category: 'technology'
    },
    {
      id: 5,
      question: 'Do you provide ongoing support?',
      answer: 'Absolutely! I offer ongoing maintenance, updates, and support for all projects. This includes bug fixes, feature additions, performance optimization, and security updates.',
      category: 'support'
    },
    {
      id: 6,
      question: 'What is your pricing model?',
      answer: 'I offer flexible pricing models including hourly rates, fixed project pricing, and retainer agreements. Pricing depends on project complexity, timeline, and specific requirements.',
      category: 'pricing'
    },
    {
      id: 7,
      question: 'Can you help with existing projects?',
      answer: 'Yes, I can help improve, debug, or add features to existing projects. I can work with your current codebase and help modernize or optimize your application.',
      category: 'existing'
    },
    {
      id: 8,
      question: 'Do you offer consultation services?',
      answer: 'Yes, I provide technical consultation services including architecture reviews, code audits, technology recommendations, and strategic planning for development projects.',
      category: 'consultation'
    }
  ]

  const categories = [
    { key: 'all', label: 'All Questions' },
    { key: 'services', label: 'Services' },
    { key: 'timeline', label: 'Timeline' },
    { key: 'collaboration', label: 'Collaboration' },
    { key: 'technology', label: 'Technology' },
    { key: 'support', label: 'Support' },
    { key: 'pricing', label: 'Pricing' },
    { key: 'existing', label: 'Existing Projects' },
    { key: 'consultation', label: 'Consultation' }
  ]

  const filteredItems = () => {
    if (activeCategory() === 'all') return faqItems
    return faqItems.filter(item => item.category === activeCategory())
  }

  const toggleItem = (id: number) => {
    setActiveItem(activeItem() === id ? null : id)
  }

  return (
    <section id="faq" class="faq">
      <div class="container">
        <div class="faq-content">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">
            Got questions? I've got answers. Here are some common questions I receive.
          </p>
          
          <div class="faq-categories">
            {categories.map((category) => (
              <button
                class={`category-btn ${activeCategory() === category.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div class="faq-list">
            {filteredItems().map((item) => (
              <div class={`faq-item ${activeItem() === item.id ? 'active' : ''}`}>
                <button
                  class="faq-question"
                  onClick={() => toggleItem(item.id)}
                >
                  <span class="question-text">{item.question}</span>
                  <span class="question-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </span>
                </button>
                
                <div class="faq-answer">
                  <div class="answer-content">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div class="faq-cta">
            <p>Still have questions?</p>
            <a href="#contact" class="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
