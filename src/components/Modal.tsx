import { createSignal, onMount, onCleanup } from 'solid-js'
import './Modal.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: any
  className?: string
}

export default function Modal(props: ModalProps) {
  const [isAnimating, setIsAnimating] = createSignal(false)

  const handleClose = () => {
    setIsAnimating(true)
    setTimeout(() => {
      props.onClose()
      setIsAnimating(false)
    }, 300)
  }

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  onMount(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    if (props.isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  })

  onCleanup(() => {
    document.body.style.overflow = 'unset'
  })

  if (!props.isOpen) return null

  return (
    <div
      class={`modal-backdrop ${isAnimating() ? 'closing' : ''}`}
      onClick={handleBackdropClick}
    >
      <div class={`modal-content ${props.className || ''} ${isAnimating() ? 'closing' : ''}`}>
        <div class="modal-header">
          <h3 class="modal-title">{props.title}</h3>
          <button class="modal-close" onClick={handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m18 6-12 12"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
        <div class="modal-body">
          {props.children}
        </div>
      </div>
    </div>
  )
}