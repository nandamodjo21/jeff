import { createSignal, onMount, onCleanup } from 'solid-js'
import './ParticleBackground.css'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export default function ParticleBackground() {
  const [particles, setParticles] = createSignal<Particle[]>([])
  const [canvasRef, setCanvasRef] = createSignal<HTMLCanvasElement>()
  const [animationId, setAnimationId] = createSignal<number>()

  const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe']

  const createParticle = (): Particle => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.5 + 0.2,
    color: colors[Math.floor(Math.random() * colors.length)]
  })

  const initParticles = () => {
    const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 10000)
    const newParticles = Array.from({ length: particleCount }, createParticle)
    setParticles(newParticles)
  }

  const updateParticles = () => {
    setParticles(prev => prev.map(particle => {
      let newX = particle.x + particle.vx
      let newY = particle.y + particle.vy

      // Bounce off edges
      if (newX < 0 || newX > window.innerWidth) {
        particle.vx *= -1
        newX = particle.x
      }
      if (newY < 0 || newY > window.innerHeight) {
        particle.vy *= -1
        newY = particle.y
      }

      return {
        ...particle,
        x: newX,
        y: newY
      }
    }))
  }

  const drawParticles = () => {
    const canvas = canvasRef()
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles().forEach(particle => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.globalAlpha = particle.opacity
      ctx.fill()
    })

    // Draw connections between nearby particles
    particles().forEach((particle, i) => {
      particles().slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.strokeStyle = particle.color
          ctx.globalAlpha = (100 - distance) / 100 * 0.2
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })
    })

    ctx.globalAlpha = 1
  }

  const animate = () => {
    updateParticles()
    drawParticles()
    const id = requestAnimationFrame(animate)
    setAnimationId(id)
  }

  const handleResize = () => {
    const canvas = canvasRef()
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    initParticles()
  }

  onMount(() => {
    const canvas = canvasRef()
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    initParticles()
    animate()

    window.addEventListener('resize', handleResize)
  })

  onCleanup(() => {
    const id = animationId()
    if (id) {
      cancelAnimationFrame(id)
    }
    window.removeEventListener('resize', handleResize)
  })

  return (
    <canvas
      ref={setCanvasRef}
      class="particle-background"
    />
  )
}
