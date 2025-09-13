import { createSignal, onMount, onCleanup } from 'solid-js'
import './TypeWriter.css'

interface TypeWriterProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
  className?: string
}

export default function TypeWriter(props: TypeWriterProps) {
  const [currentText, setCurrentText] = createSignal('')
  const [currentIndex, setCurrentIndex] = createSignal(0)
  const [isDeleting, setIsDeleting] = createSignal(false)
  const [isPaused, setIsPaused] = createSignal(false)
  
  let timeoutId: number | undefined

  const speed = props.speed || 100
  const deleteSpeed = props.deleteSpeed || 50
  const pauseTime = props.pauseTime || 2000

  const typeWriter = () => {
    if (isPaused()) return

    const current = currentIndex()
    const currentTextValue = props.texts[current]
    
    if (isDeleting()) {
      setCurrentText(currentTextValue.substring(0, currentText().length - 1))
    } else {
      setCurrentText(currentTextValue.substring(0, currentText().length + 1))
    }

    let typeSpeed = isDeleting() ? deleteSpeed : speed

    if (!isDeleting() && currentText() === currentTextValue) {
      typeSpeed = pauseTime
      setIsPaused(true)
      timeoutId = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
    } else if (isDeleting() && currentText() === '') {
      setIsDeleting(false)
      setCurrentIndex((current + 1) % props.texts.length)
      typeSpeed = 500
    }

    if (!isPaused()) {
      timeoutId = setTimeout(typeWriter, typeSpeed)
    }
  }

  onMount(() => {
    typeWriter()
  })

  onCleanup(() => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  })

  return (
    <span class={`typewriter ${props.className || ''}`}>
      {currentText()}
      <span class="cursor">|</span>
    </span>
  )
}
