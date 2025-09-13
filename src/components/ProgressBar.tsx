import { createSignal, onMount, onCleanup } from 'solid-js'
import './ProgressBar.css'

export default function ProgressBar() {
  const [progress, setProgress] = createSignal(0)

  const updateProgress = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    setProgress(Math.min(scrollPercent, 100))
  }

  onMount(() => {
    window.addEventListener('scroll', updateProgress)
    updateProgress()
  })

  onCleanup(() => {
    window.removeEventListener('scroll', updateProgress)
  })

  return (
    <div class="progress-bar">
      <div 
        class="progress-fill"
        style={`width: ${progress()}%`}
      />
    </div>
  )
}
