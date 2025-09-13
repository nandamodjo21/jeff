import { createSignal, onMount, onCleanup } from 'solid-js'
import './ScrollToTop.css'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = createSignal(false)

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onCleanup(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return (
    <button
      class={`scroll-to-top ${isVisible() ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </button>
  )
}
