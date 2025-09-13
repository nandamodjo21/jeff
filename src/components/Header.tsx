import { createSignal, onMount } from 'solid-js'
import './Header.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = createSignal(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false)

  onMount(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header class={`header ${isScrolled() ? 'scrolled' : ''}`}>
      <div class="container">
        <div class="logo">
          <span class="logo-text">Portfolio</span>
        </div>
        
        <nav class={`nav ${isMobileMenuOpen() ? 'nav-open' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
          <a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>

        <button 
          class="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen())}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
