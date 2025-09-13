import { createSignal } from 'solid-js'
import './InteractiveCard.css'

interface InteractiveCardProps {
  title: string
  description: string
  icon: string
  color: string
  onClick?: () => void
  className?: string
}

export default function InteractiveCard(props: InteractiveCardProps) {
  const [isHovered, setIsHovered] = createSignal(false)

  return (
    <div
      class={`interactive-card ${props.className || ''}`}
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={`--card-color: ${props.color}`}
    >
      <div class="card-content">
        <div class="card-icon" style={`background: ${props.color}`}>
          {props.icon}
        </div>
        <h3 class="card-title">{props.title}</h3>
        <p class="card-description">{props.description}</p>
      </div>
      
      <div class={`card-overlay ${isHovered() ? 'active' : ''}`}>
        <div class="overlay-content">
          <span class="overlay-text">Learn More</span>
          <div class="overlay-arrow">→</div>
        </div>
      </div>
    </div>
  )
}
