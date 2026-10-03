import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="brand" onClick={closeMenu}>
            Pooja Sri<span>.</span>
          </a>

          <button
            className={`menu-button ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#journey" onClick={closeMenu}>Journey</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
          >
            Resume
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              CYBERSECURITY STUDENT
            </div>

            <h1>
              Pooja Sri A
            </h1>

            <h2>
              Web Security
              <span> · </span>
              Red Team
              <span> · </span>
              AI Security
            </h2>

            <p className="hero-description">
              I learn security by building, testing, and understanding how
              applications can fail. Currently exploring web and API security
              while building practical projects.
            </p>

            <div className="hero-actions">
              <a href="#work" className="button primary">
                Explore my work
                <span>↗</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                View resume
              </a>
            </div>

            <div className="hero-links">
              <a
                href="https://github.com/Poojasri08"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/pooja-sri-a-268a75300/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-frame">
              <img src="/profile.jpg" alt="Pooja Sri A" />
            </div>

            

            
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="section-intro">
            <p className="section-number">01 / ABOUT</p>
            <h2>
              I learn security by
              <br />
              <span>building & breaking things.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="large-text">
              I'm a Computer Science student exploring cybersecurity through
              hands-on learning, security testing, and building projects.
            </p>

            <p>
              My current focus is web and API security. I enjoy understanding
              how applications work, finding where assumptions break, and then
              learning how those weaknesses can be prevented.
            </p>

            <p>
              Alongside structured security practice, I'm building my own
              projects to turn concepts into something practical and
              demonstrable.
            </p>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="journey section" id="journey">
          <div className="section-heading-row">
            <div>
              <p className="section-number">02 / JOURNEY</p>
              <h2>From learning to building.</h2>
            </div>

            <p className="heading-description">
              A practical path through the areas I'm currently exploring.
            </p>
          </div>

          <div className="journey-list">
            <article className="journey-item">
              <div className="journey-number">01</div>

              <div className="journey-main">
                <p className="journey-label">FOUNDATION</p>
                <h3>Web Security</h3>
              </div>

              <div className="journey-details">
                <p>
                  Learning common web vulnerabilities and how application
                  behavior can be tested and secured.
                </p>
                <div className="tag-list">
                  <span>SQL Injection</span>
                  <span>IDOR</span>
                  <span>Authentication</span>
                  <span>Input Validation</span>
                </div>
              </div>
            </article>

            <article className="journey-item">
              <div className="journey-number">02</div>

              <div className="journey-main">
                <p className="journey-label">PRACTICE</p>
                <h3>Security Testing</h3>
              </div>

              <div className="journey-details">
                <p>
                  Practicing reconnaissance, request analysis, vulnerability
                  testing, and basic penetration-testing workflows.
                </p>
                <div className="tag-list">
                  <span>Burp Suite</span>
                  <span>PortSwigger</span>
                  <span>TryHackMe</span>
                </div>
              </div>
            </article>

            <article className="journey-item">
              <div className="journey-number">03</div>

              <div className="journey-main">
                <p className="journey-label">BUILDING</p>
                <h3>Logic Leak 2.0</h3>
              </div>

              <div className="journey-details">
                <p>
                  Building an interactive secure-code review and vulnerability
                  learning platform to combine security concepts with product
                  development.
                </p>
                <div className="tag-list">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>SQLite</span>
                  <span>JWT</span>
                </div>
              </div>
            </article>

            <article className="journey-item">
              <div className="journey-number">04</div>

              <div className="journey-main">
                <p className="journey-label">EXPLORING NEXT</p>
                <h3>Red Team & AI Security</h3>
              </div>

              <div className="journey-details">
                <p>
                  Expanding beyond web security toward offensive security and
                  the security challenges created by AI-powered systems.
                </p>
                <div className="tag-list">
                  <span>Red Team</span>
                  <span>AI Security</span>
                  <span>Web & API Security</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* FEATURED WORK */}
        <section className="work section" id="work">
          <div className="section-heading-row">
            <div>
              <p className="section-number">03 / FEATURED WORK</p>
              <h2>Something I built.</h2>
            </div>
          </div>

          <article className="project-feature">
            <div className="project-top">
              <div>
                <p className="project-index">PROJECT / 01</p>
                <h3>Logic Leak 2.0</h3>
                <p className="project-subtitle">
                  Interactive Secure Code Review & Vulnerability Learning
                  Platform
                </p>
              </div>

              <span className="project-status">IN DEVELOPMENT</span>
            </div>

            <div className="project-body">
              <div className="project-description">
                <p>
                  A cybersecurity learning product designed around realistic
                  vulnerable-code challenges.
                </p>

                <p>
                  Users identify the vulnerability, understand why it happens,
                  apply a secure fix, and progress through challenges.
                </p>

                <a
                  href="https://github.com/Poojasri08/logic-leak-v2"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View project on GitHub <span>↗</span>
                </a>
              </div>

              <div className="project-tech">
                <div>
                  <span>01</span>
                  React
                </div>
                <div>
                  <span>02</span>
                  Node.js / Express
                </div>
                <div>
                  <span>03</span>
                  SQLite
                </div>
                <div>
                  <span>04</span>
                  JWT / bcrypt
                </div>
              </div>
            </div>

            <div className="project-bottom">
              <span>SECURE CODE</span>
              <span>VULNERABILITY LEARNING</span>
              <span>PRODUCT DEVELOPMENT</span>
            </div>
          </article>
        </section>

        {/* EXPERIENCE */}
        <section className="experience section" id="experience">
          <div className="section-heading-row">
            <div>
              <p className="section-number">04 / EXPERIENCE</p>
              <h2>Learning through practice.</h2>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-date">
              <span>2026</span>
              <span>WAPT</span>
            </div>

            <div className="experience-main">
              <p className="experience-label">INTERNSHIP</p>
              <h3>WAPT Intern</h3>
              <p className="company">IqraSec Academy</p>

              <p className="experience-description">
                Hands-on practice in web application penetration testing,
                including request interception, vulnerability testing,
                authentication weaknesses, SQL injection, and application
                security concepts.
              </p>

              <div className="tag-list">
                <span>Burp Suite Community</span>
                <span>SQL Injection</span>
                <span>IDOR</span>
                <span>Web Testing</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section">
          <div className="section-intro">
            <p className="section-number">05 / SKILLS</p>
            <h2>
              Tools, technologies
              <br />
              <span>& areas I'm learning.</span>
            </h2>
          </div>

          <div className="skills-grid">
            <div className="skill-group">
              <p>SECURITY</p>
              <h3>Web & Application Security</h3>
              <span>SQL Injection</span>
              <span>IDOR</span>
              <span>Authentication</span>
              <span>Input Validation</span>
            </div>

            <div className="skill-group">
              <p>TOOLS</p>
              <h3>Security Practice</h3>
              <span>Burp Suite</span>
              <span>PortSwigger</span>
              <span>TryHackMe</span>
            </div>

            <div className="skill-group">
              <p>DEVELOPMENT</p>
              <h3>Building</h3>
              <span>React</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>SQLite</span>
            </div>

            <div className="skill-group">
              <p>EXPLORING</p>
              <h3>Next Areas</h3>
              <span>Red Team</span>
              <span>API Security</span>
              <span>AI Security</span>
            </div>
          </div>
        </section>

        {/* PROFILES */}
        <section className="profiles section">
          <div className="section-heading-row">
            <div>
              <p className="section-number">06 / ONLINE</p>
              <h2>Find me online.</h2>
            </div>
          </div>

          <div className="profile-grid">
            <a
              href="https://github.com/Poojasri08"
              target="_blank"
              rel="noreferrer"
              className="profile-link"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/pooja-sri-a-268a75300/"
              target="_blank"
              rel="noreferrer"
              className="profile-link"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>

            <a
              href="https://www.hackerrank.com/profile/poojasri30092001"
              target="_blank"
              rel="noreferrer"
              className="profile-link"
            >
              <span>HackerRank</span>
              <span>↗</span>
            </a>

            <a
              href="https://www.codechef.com/users/poojasri08"
              target="_blank"
              rel="noreferrer"
              className="profile-link"
            >
              <span>CodeChef</span>
              <span>↗</span>
            </a>

            <a
              href="https://www.hackerearth.com/@Poojasri08/"
              target="_blank"
              rel="noreferrer"
              className="profile-link"
            >
              <span>HackerEarth</span>
              <span>↗</span>
            </a>

            <a
              href="https://leetcode.com/u/PoojaSri08/"
              target="_blank"
              rel="noreferrer"
              className="profile-link"
            >
              <span>LeetCode</span>
              <span>↗</span>
            </a>

            <a
              href="https://www.kaggle.com/poojasriarivazhagan"
              target="_blank"
              rel="noreferrer"
              className="profile-link"
            >
              <span>Kaggle</span>
              <span>↗</span>
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="contact-inner">
            <p className="section-number">07 / CONTACT</p>

            <h2>
              Let's connect
              <br />
              <span>around security.</span>
            </h2>

            <p>
              I'm interested in cybersecurity learning opportunities,
              internships, projects, and conversations around web security,
              offensive security, and AI security.
            </p>

            <div className="contact-actions">
              <a
                href="https://www.linkedin.com/in/pooja-sri-a-268a75300/"
                target="_blank"
                rel="noreferrer"
                className="button primary"
              >
                Connect on LinkedIn <span>↗</span>
              </a>

              <a
                href="https://github.com/Poojasri08"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                GitHub <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Pooja Sri.A</strong>
          <p>Cybersecurity student · Building and learning in public.</p>
        </div>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;