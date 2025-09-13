import { createSignal, onMount } from 'solid-js'
import AnimatedCounter from './AnimatedCounter'
import './Stats.css'

interface Stat {
  id: number
  value: number
  label: string
  icon: string
  color: string
}

export default function Stats() {
  const [, setIsVisible] = createSignal(false)

  const stats: Stat[] = [
    {
      id: 1,
      value: 50,
      label: 'Projects Completed',
      icon: '🚀',
      color: '#667eea'
    },
    {
      id: 2,
      value: 5,
      label: 'Years Experience',
      icon: '💼',
      color: '#764ba2'
    },
    {
      id: 3,
      value: 30,
      label: 'Happy Clients',
      icon: '😊',
      color: '#f093fb'
    },
    {
      id: 4,
      value: 100,
      label: 'Coffee Cups',
      icon: '☕',
      color: '#f5576c'
    },
    {
      id: 5,
      value: 24,
      label: 'Hours Available',
      icon: '⏰',
      color: '#4facfe'
    },
    {
      id: 6,
      value: 99,
      label: 'Success Rate',
      icon: '📈',
      color: '#00f2fe'
    }
  ]

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

    const element = document.getElementById('stats')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  })

  return (
    <section id="stats" class="stats">
      <div class="container">
        <div class="stats-content">
          <h2 class="section-title">By the Numbers</h2>
          <p class="section-subtitle">
            A quick look at my journey and achievements
          </p>
          
          <div class="stats-grid">
            {stats.map((stat) => (
              <div class="stat-card" style={`--stat-color: ${stat.color}`}>
                <div class="stat-icon">
                  {stat.icon}
                </div>
                <div class="stat-content">
                  <h3 class="stat-value">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.label.includes('Rate') ? '%' : stat.label.includes('Hours') ? '/7' : '+'}
                    />
                  </h3>
                  <p class="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
