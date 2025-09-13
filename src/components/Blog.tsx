import { createSignal } from 'solid-js'
import './Blog.css'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  tags: string[]
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = createSignal('all')

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      excerpt: 'Learn how to structure and optimize React applications for better performance and maintainability.',
      content: 'In this comprehensive guide, we\'ll explore the best practices for building scalable React applications...',
      author: 'John Doe',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'React',
      image: '⚛️',
      tags: ['React', 'JavaScript', 'Performance', 'Architecture']
    },
    {
      id: 2,
      title: 'Modern CSS Techniques for Better UX',
      excerpt: 'Discover advanced CSS techniques that can significantly improve your user experience.',
      content: 'CSS has evolved tremendously over the years. Let\'s dive into some modern techniques...',
      author: 'John Doe',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'CSS',
      image: '🎨',
      tags: ['CSS', 'UX', 'Design', 'Frontend']
    },
    {
      id: 3,
      title: 'Node.js Best Practices for Production',
      excerpt: 'Essential tips and tricks for deploying Node.js applications in production environments.',
      content: 'Production deployment requires careful consideration of performance, security, and reliability...',
      author: 'John Doe',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Node.js',
      image: '🟢',
      tags: ['Node.js', 'Backend', 'Production', 'DevOps']
    },
    {
      id: 4,
      title: 'TypeScript Advanced Patterns',
      excerpt: 'Master advanced TypeScript patterns and techniques for better type safety and code organization.',
      content: 'TypeScript offers powerful features that can help you write more maintainable and robust code...',
      author: 'John Doe',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'TypeScript',
      image: '📘',
      tags: ['TypeScript', 'JavaScript', 'Types', 'Advanced']
    }
  ]

  const categories = [
    { key: 'all', label: 'All Posts' },
    { key: 'React', label: 'React' },
    { key: 'CSS', label: 'CSS' },
    { key: 'Node.js', label: 'Node.js' },
    { key: 'TypeScript', label: 'TypeScript' }
  ]

  const filteredPosts = () => {
    if (activeCategory() === 'all') return blogPosts
    return blogPosts.filter(post => post.category === activeCategory())
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <section id="blog" class="blog">
      <div class="container">
        <div class="blog-content">
          <h2 class="section-title">Latest Blog Posts</h2>
          <p class="section-subtitle">
            Thoughts, tutorials, and insights about web development and technology
          </p>
          
          <div class="blog-categories">
            {categories.map((category) => (
              <button
                class={`category-btn ${activeCategory() === category.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div class="blog-grid">
            {filteredPosts().map((post) => (
              <article class="blog-card">
                <div class="blog-image">
                  <div class="blog-icon">{post.image}</div>
                  <div class="blog-category">{post.category}</div>
                </div>
                
                <div class="blog-content">
                  <div class="blog-meta">
                    <span class="blog-date">{formatDate(post.date)}</span>
                    <span class="blog-read-time">{post.readTime}</span>
                  </div>
                  
                  <h3 class="blog-title">{post.title}</h3>
                  <p class="blog-excerpt">{post.excerpt}</p>
                  
                  <div class="blog-tags">
                    {post.tags.map((tag) => (
                      <span class="blog-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div class="blog-footer">
                    <div class="blog-author">
                      <span class="author-avatar">👨‍💻</span>
                      <span class="author-name">{post.author}</span>
                    </div>
                    <button class="read-more-btn">
                      Read More
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div class="blog-cta">
            <p>Want to read more articles?</p>
            <a href="#" class="btn btn-primary">View All Posts</a>
          </div>
        </div>
      </div>
    </section>
  )
}
