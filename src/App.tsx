import { createSignal, onMount } from 'solid-js'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonial from './components/Testimonial'
import Blog from './components/Blog'
import Stats from './components/Stats'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import ThemeToggle from './components/ThemeToggle'
import ProgressBar from './components/ProgressBar'
import './App.css'
import './components/Animations.css'

function App() {
  const [isLoading, setIsLoading] = createSignal(true)

  onMount(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  })

  return (
    <div class="app">
      {isLoading() ? (
        <div class="loading-screen">
          <div class="loading-spinner"></div>
          <h2>Loading Portfolio...</h2>
        </div>
      ) : (
        <>
          <ProgressBar />
          <ThemeToggle />
          <ParticleBackground />
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Testimonial />
            <Blog />
            <Stats />
            <FAQ />
            <CTA />
            <Newsletter />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
          <BackToTop />
        </>
      )}
    </div>
  )
}

export default App
