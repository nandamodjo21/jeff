import { createSignal, onMount } from 'solid-js'
import './ThemeToggle.css'

export default function ThemeToggle() {
  const [isDark, setIsDark] = createSignal(false)

  onMount(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  })

  const toggleTheme = () => {
    setIsDark(!isDark())
    
    if (isDark()) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <button
      class="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div class="theme-toggle-inner">
        <div class="theme-icon sun-icon">☀️</div>
        <div class="theme-icon moon-icon">🌙</div>
      </div>
    </button>
  )
}
