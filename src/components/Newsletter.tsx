import { createSignal } from 'solid-js'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = createSignal('')
  const [isSubscribed, setIsSubscribed] = createSignal(false)
  const [isLoading, setIsLoading] = createSignal(false)

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubscribed(true)
      setEmail('')
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    }, 2000)
  }

  return (
    <section class="newsletter">
      <div class="container">
        <div class="newsletter-content">
          <div class="newsletter-text">
            <h2 class="newsletter-title">Stay Updated</h2>
            <p class="newsletter-description">
              Get the latest articles, tutorials, and insights delivered straight to your inbox. 
              No spam, just valuable content.
            </p>
          </div>
          
          <form class="newsletter-form" onSubmit={handleSubmit}>
            <div class="newsletter-input-group">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email()}
                onInput={(e) => setEmail(e.currentTarget.value)}
                required
                class="newsletter-input"
              />
              <button 
                type="submit" 
                class={`newsletter-btn ${isLoading() ? 'loading' : ''}`}
                disabled={isLoading()}
              >
                {isLoading() ? (
                  <div class="loading-spinner-small"></div>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
            
            {isSubscribed() && (
              <div class="newsletter-success">
                <span class="success-icon">✅</span>
                <span>Thanks for subscribing! Check your email for confirmation.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
