import React, { useEffect, useState } from 'react';
import { 
  Terminal, 
  Code2, 
  Cpu, 
  Shield, 
  ArrowRight, 
  User, 
  Mail,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo text-gradient">SY.</div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#focus" className="nav-link">Focus</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero container" id="home">
        <div className="hero-content animate-fade-in">
          <span className="greeting">Welcome to my space</span>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Shaurya Yadav</span>.
          </h1>
          <p className="hero-subtitle">
            B.Tech student entering my 4th year. Aspiring Indian Army Officer. 
            Committed to excellence in academics, sports, and leadership.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container" id="about">
        <div className="about-grid">
          <div className="about-text animate-fade-in delay-100">
            <h2 className="section-title" style={{ textAlign: 'left' }}>About <span className="text-gradient">Me</span></h2>
            <p>
              I am a B.Tech student starting my 4th year with a deep passion and a clear goal to join the Indian Army. 
            </p>
            <p>
              While in college, I am completely focused on what is being taught here. I believe in discipline, continuous learning, and pushing my boundaries. My objective is to excel in whatever challenge is thrown at me—whether it be in the field of academics, sports, leadership, or technology.
            </p>
            
            <div className="about-stats">
              <div className="stat-card glass-panel">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years of Tech</div>
              </div>
              <div className="stat-card glass-panel">
                <div className="stat-number">100%</div>
                <div className="stat-label">Commitment</div>
              </div>
            </div>
          </div>
          
          <div className="about-image animate-fade-in delay-200">
            {/* Placeholder for an actual impressive image, using an abstract representation */}
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #111, #222)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Shield size={120} color="var(--accent-primary)" strokeWidth={1} style={{ opacity: 0.8 }} />
            </div>
            <div className="image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Focus & Skills Section */}
      <section className="container" id="focus">
        <h2 className="section-title">Core <span className="text-gradient">Focus</span></h2>
        
        <div className="skills-grid">
          <div className="skill-card glass-panel animate-fade-in delay-100">
            <div className="skill-icon">
              <Code2 size={24} />
            </div>
            <h3 className="skill-title">Academics & Tech</h3>
            <p className="skill-desc">
              Mastering B.Tech coursework, software development fundamentals, and modern technologies to build a strong engineering foundation.
            </p>
          </div>

          <div className="skill-card glass-panel animate-fade-in delay-200">
            <div className="skill-icon">
              <Shield size={24} />
            </div>
            <h3 className="skill-title">Leadership</h3>
            <p className="skill-desc">
              Cultivating the qualities of an officer. Taking charge in group settings, managing events, and leading by example.
            </p>
          </div>

          <div className="skill-card glass-panel animate-fade-in delay-300">
            <div className="skill-icon">
              <Terminal size={24} />
            </div>
            <h3 className="skill-title">Problem Solving</h3>
            <p className="skill-desc">
              Tackling complex challenges with a logical, disciplined approach. Adapting to new environments and excelling under pressure.
            </p>
          </div>

          <div className="skill-card glass-panel animate-fade-in delay-100">
            <div className="skill-icon">
              <Cpu size={24} />
            </div>
            <h3 className="skill-title">Physical Fitness</h3>
            <p className="skill-desc">
              Maintaining peak physical condition through sports and rigorous training, essential for my ultimate goal.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container" id="projects">
        <h2 className="section-title">Recent <span className="text-gradient">Projects</span></h2>
        
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card glass-panel animate-fade-in delay-100">
            <div className="project-image">
               <div style={{ width: '100%', height: '100%', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Project Preview 1</span>
               </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">College Management System</h3>
              <p className="project-desc">
                A comprehensive dashboard for managing student attendance, academic records, and college events built with modern web technologies.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">Database</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link"><Code2 size={18} /> Code</a>
                <a href="#" className="project-link"><ExternalLink size={18} /> Live</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card glass-panel animate-fade-in delay-200">
            <div className="project-image">
               <div style={{ width: '100%', height: '100%', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Project Preview 2</span>
               </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Fitness Tracking App</h3>
              <p className="project-desc">
                An application to log physical training routines, track progress metrics, and set goals for military preparation.
              </p>
              <div className="project-tags">
                <span className="tag">JavaScript</span>
                <span className="tag">API Integration</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link"><Code2 size={18} /> Code</a>
                <a href="#" className="project-link"><ExternalLink size={18} /> Live</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card glass-panel animate-fade-in delay-300">
            <div className="project-image">
               <div style={{ width: '100%', height: '100%', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Project Preview 3</span>
               </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Algorithm Visualizer</h3>
              <p className="project-desc">
                An interactive tool to visualize standard computer science algorithms (sorting, pathfinding) to help students learn better.
              </p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">Algorithms</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link"><Code2 size={18} /> Code</a>
                <a href="#" className="project-link"><ExternalLink size={18} /> Live</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer container" id="contact">
        <div className="footer-content">
          <div>
            <div className="logo text-gradient" style={{ marginBottom: '1rem' }}>Shaurya Yadav</div>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
              Building a strong foundation in technology while preparing for a life of service in the Indian Army.
            </p>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link"><Code2 size={20} /></a>
            <a href="#" className="social-link"><User size={20} /></a>
            <a href="#" className="social-link"><Mail size={20} /></a>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Shaurya Yadav. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
