import { createSignal, onMount } from 'solid-js'
import './LoadingSpinner.css'

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  color?: string
  className?: string
}

export default function LoadingSpinner(props: LoadingSpinnerProps) {
  const [isVisible, setIsVisible] = createSignal(false)

  onMount(() => {
    // Small delay to prevent flash
    setTimeout(() => setIsVisible(true), 100)
  })

  const sizeClass = () => {
    switch (props.size) {
      case 'small': return 'spinner-small'
      case 'large': return 'spinner-large'
      default: return 'spinner-medium'
    }
  }

  return (
    <div 
      class={`loading-spinner ${sizeClass()} ${props.className || ''} ${isVisible() ? 'visible' : ''}`}
      style={`--spinner-color: ${props.color || '#667eea'}`}
    >
      <div class="spinner-ring"></div>
      <div class="spinner-ring"></div>
      <div class="spinner-ring"></div>
    </div>
  )
}
