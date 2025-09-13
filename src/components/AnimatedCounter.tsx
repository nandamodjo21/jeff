import { createSignal, onMount } from 'solid-js'
import './AnimatedCounter.css'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function AnimatedCounter(props: AnimatedCounterProps) {
  const [count, setCount] = createSignal(0)
  const [isVisible, setIsVisible] = createSignal(false)

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible()) {
            setIsVisible(true)
            animateCounter()
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`counter-${props.end}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  })

  const animateCounter = () => {
    const duration = props.duration || 2000
    // const start = 0
    const end = props.end
    const increment = end / (duration / 16) // 60fps

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment
        if (next >= end) {
          clearInterval(timer)
          return end
        }
        return next
      })
    }, 16)

    return () => clearInterval(timer)
  }

  return (
    <span
      id={`counter-${props.end}`}
      class={`animated-counter ${props.className || ''}`}
    >
      {props.prefix}
      {Math.floor(count())}
      {props.suffix}
    </span>
  )
}
