import { createSignal, onMount } from 'solid-js'
import './Experience.css'

export default function Experience() {
  const [isVisible, setIsVisible] = createSignal(false)
  const [activeTab, setActiveTab] = createSignal('work')

  const workExperience = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      period: '2023 - Present',
      location: 'San Francisco, CA',
      description: 'Leading development of enterprise-level web applications and mentoring junior developers.',
      achievements: [
        'Led a team of 5 developers in building a scalable e-commerce platform',
        'Improved application performance by 40% through code optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored 3 junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      period: '2021 - 2023',
      location: 'Remote',
      description: 'Developed full-stack applications from scratch and collaborated with cross-functional teams.',
      achievements: [
        'Built a real-time chat application serving 10,000+ users',
        'Designed and implemented RESTful APIs with 99.9% uptime',
        'Created responsive UI components used across multiple projects',
        'Reduced bug reports by 50% through comprehensive testing'
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io', 'Jest']
    },
    {
      company: 'WebAgency',
      position: 'Frontend Developer',
      period: '2019 - 2021',
      location: 'New York, NY',
      description: 'Focused on creating beautiful and responsive user interfaces for various clients.',
      achievements: [
        'Developed 20+ client websites with modern UI/UX design',
        'Implemented responsive design patterns for mobile-first development',
        'Collaborated with designers to create pixel-perfect implementations',
        'Improved page load times by 35% through optimization techniques'
      ],
      technologies: ['React', 'TypeScript', 'Sass', 'Webpack', 'Figma']
    }
  ]

  const education = [
    {
      institution: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      period: '2015 - 2019',
      location: 'Boston, MA',
      description: 'Graduated with honors, focusing on software engineering and web development.',
      achievements: [
        'GPA: 3.8/4.0',
        'Dean\'s List for 6 consecutive semesters',
        'President of Computer Science Club',
        'Final year project: AI-powered recommendation system'
      ]
    },
    {
      institution: 'Online Learning Platform',
      degree: 'Advanced React Development',
      period: '2020',
      location: 'Online',
      description: 'Comprehensive course covering advanced React patterns and best practices.',
      achievements: [
        'Completed 40+ hours of advanced React content',
        'Built 5 complex projects during the course',
        'Received certificate with distinction',
        'Learned modern state management techniques'
      ]
    }
  ]

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'AWS-SAA-2023'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credential: 'GCP-PD-2022'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      credential: 'CKA-2022'
    }
  ]

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('experience')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  })

  return (
    <section id="experience" class="experience">
      <div class="container">
        <div class={`experience-content ${isVisible() ? 'visible' : ''}`}>
          <h2 class="section-title">Experience & Education</h2>
          <p class="section-subtitle">
            My professional journey and educational background
          </p>
          
          <div class="experience-tabs">
            <button 
              class={`tab-btn ${activeTab() === 'work' ? 'active' : ''}`}
              onClick={() => setActiveTab('work')}
            >
              Work Experience
            </button>
            <button 
              class={`tab-btn ${activeTab() === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
            <button 
              class={`tab-btn ${activeTab() === 'certifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('certifications')}
            >
              Certifications
            </button>
          </div>
          
          <div class="experience-content-area">
            {activeTab() === 'work' && (
              <div class="work-experience">
                {workExperience.map((job, index) => (
                  <div class="experience-item">
                    <div class="experience-timeline">
                      <div class="timeline-dot"></div>
                      {index < workExperience.length - 1 && <div class="timeline-line"></div>}
                    </div>
                    <div class="experience-details">
                      <div class="experience-header">
                        <h3 class="position">{job.position}</h3>
                        <span class="company">{job.company}</span>
                        <span class="period">{job.period}</span>
                        <span class="location">{job.location}</span>
                      </div>
                      <p class="experience-description">{job.description}</p>
                      <ul class="achievements">
                        {job.achievements.map((achievement) => (
                          <li>{achievement}</li>
                        ))}
                      </ul>
                      <div class="technologies">
                        {job.technologies.map((tech) => (
                          <span class="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab() === 'education' && (
              <div class="education">
                {education.map((edu) => (
                  <div class="education-item">
                    <div class="education-header">
                      <h3 class="degree">{edu.degree}</h3>
                      <span class="institution">{edu.institution}</span>
                      <span class="period">{edu.period}</span>
                      <span class="location">{edu.location}</span>
                    </div>
                    <p class="education-description">{edu.description}</p>
                    <ul class="achievements">
                      {edu.achievements.map((achievement) => (
                        <li>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab() === 'certifications' && (
              <div class="certifications">
                {certifications.map((cert) => (
                  <div class="certification-item">
                    <div class="cert-header">
                      <h3 class="cert-name">{cert.name}</h3>
                      <span class="cert-issuer">{cert.issuer}</span>
                    </div>
                    <div class="cert-details">
                      <span class="cert-date">{cert.date}</span>
                      <span class="cert-credential">{cert.credential}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
