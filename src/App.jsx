import React, { useState, useEffect } from "react";
import "./App.css";
import Image  from "./Screenshot 2026-01-05 211541.png";
import Image2 from "./Screenshot 2026-01-07 231901.png";
import Image3 from "./Screenshot 2026-01-07 231810.png";
import Image4 from "./Selinium.png";
import Image5 from "./Selinium-proj.png";
import Image6 from "./Step-Certificate.png";
import yourImage from "../src/Me-6.jpeg";
import {
  FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook, FaGithub,
  FaBars, FaTimes
} from "react-icons/fa";

export default function App() {
  const [loading, setLoading]           = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const data = {
    certifications: [
      { id:1, title:"Web QA Automation Testing",    issuer:"Training Program",  date:"2025",
        desc:"Completed a 40-hour hands-on course in Web QA Automation Testing using Java, Selenium WebDriver, TestNG, and Maven, focusing on building automated tests and executing test suites for web applications.",
        image:Image6, credential:"#" },
      { id:2, title:"Selenium Automation Course",   issuer:"Training Program",  date:"2025",
        desc:"Gained comprehensive knowledge of Selenium Automation using Java, Maven, TestNG, Git, Jenkins, and the Page Object Model for building maintainable test frameworks.",
        image:Image4, credential:"#" },
      { id:3, title:"Selenium Automation Project",  issuer:"Practical Project", date:"2025",
        desc:"Built an end-to-end UI test automation project using Selenium WebDriver, Java, Maven, TestNG, Git, Page Object Model, GitHub Actions for CI/CD, and Allure for reporting.",
        image:Image5, credential:"#" },
      { id:4, title:"QA Manual Testing",            issuer:"Training Program",  date:"2025",
        desc:"Developed a strong foundation in manual testing practices, test case design, bug reporting, and core software testing methodologies.",
        image:Image,  credential:"#" },
      { id:5, title:"Postman API Testing Course",   issuer:"Training Program",  date:"2025",
        desc:"Learned API testing fundamentals using Postman, including sending requests, validating responses, and testing RESTful endpoints.",
        image:Image2, credential:"#" },
      { id:6, title:"Postman API Automation Project",issuer:"Practical Project",date:"2025",
        desc:"Implemented automated API testing workflows using Postman collections, environments, and scripting for validating REST APIs.",
        image:Image3, credential:"#" },
    ],
  };

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (loading) return;

    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("active"); revealObs.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

    const navObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.3 }
    );
    document.querySelectorAll("section, header").forEach((el) => navObs.observe(el));

    return () => { revealObs.disconnect(); navObs.disconnect(); };
  }, [loading]);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { id:"home",           label:"Home"           },
    { id:"about",          label:"About"          },
    { id:"expertise",      label:"Skills"         },
    { id:"certifications", label:"Certifications" },
    { id:"projects",       label:"Projects"       },
    { id:"contact",        label:"Contact"        },
  ];

  return (
    <>
      {/* ─── LOADER ─── */}
      {loading && (
        <div id="loader">
          <div className="loading-text">Welcome to Ghaleb's Portfolio...</div>
        </div>
      )}

      {!loading && (
        <div id="content">

          {/* ─── DESKTOP NAV ─── */}
          <nav className="top-nav fade-in desktop-only">
            <ul>
              {navLinks.map((l) => (
                <li key={l.id}
                  className={activeSection === l.id ? "active-link" : ""}
                  onClick={() => scrollTo(l.id)}>
                  {l.label}
                </li>
              ))}
            </ul>
          </nav>

          {/* ─── MOBILE TOGGLE ─── */}
          <div className="mobile-toggle mobile-only" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {mobileMenuOpen && (
            <div className="mobile-menu mobile-only">
              <ul>
                {navLinks.map((l) => (
                  <li key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="container">

            {/* ════════════════════════════════════════
                HERO
            ════════════════════════════════════════ */}
            <header id="home" className="hero reveal">
              <div className="hero-container">

                {/* TEXT */}
                <div className="hero-content">
                  <div className="hero-tag">
                    <span className="hero-tag-dot"></span>
                    Available for opportunities
                  </div>

                  <h1>
                    Hi, I'm{" "}
                    <span className="gradient-text">Ghaleb Shhab</span>
                  </h1>

                  <div className="hero-role">
                    <span>// </span>Software Engineer &amp; Full-Stack Developer
                  </div>

                  <p className="hero-bio">
                    I build end-to-end digital products — from polished, responsive
                    front-ends to robust, scalable back-end systems. Also a QA Engineer
                    passionate about software quality, test automation, and clean architecture.
                  </p>

                  <div className="hero-btns">
                    <button className="btn-primary" onClick={() => scrollTo("projects")}>
                      View My Work
                    </button>
                    <button className="btn-secondary" onClick={() => scrollTo("contact")}>
                      Contact Me
                    </button>
                  </div>

                  <div className="hero-stats">
                    <div className="stat-item">
                      <span className="stat-num">6+</span>
                      <span className="stat-label">Certifications</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-num">8+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-num">10+</span>
                      <span className="stat-label">Technologies</span>
                    </div>
                  </div>
                </div>

                {/* PHOTO */}
                <div className="hero-image-wrapper">
                  

                  <div className="photo-container">
                    <div className="photo-neon-frame"></div>
                    <div className="photo-neon-inner">
                      <img src={yourImage} alt="Ghaleb Shhab" className="hero-image" />
                      <div className="photo-scan"></div>
                    </div>
                    <span className="code-tag tl">&lt;dev /&gt;</span>
                    <span className="code-tag br">G7lb</span>
                  </div>

                  <div className="photo-glow"></div>
                </div>

              </div>
            </header>

            {/* ════════════════════════════════════════
                ABOUT
            ════════════════════════════════════════ */}
            <section id="about" className="reveal">
              <h2 className="section-header">01. About Me</h2>

              <div className="glass-card about-card">
                <div className="terminal-window">
                  <div className="terminal-header">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                    <span className="terminal-title">ghaleb@portfolio ~ about-me</span>
                  </div>
                  <div className="terminal-body">
                    <div className="terminal-line"><span className="prompt">$</span> whoami</div>
                    <div className="terminal-output">Ghaleb Shhab</div>

                    <div className="terminal-line"><span className="prompt">$</span> role</div>
                    <div className="terminal-output">Software Engineer | Full Stack Developer | QA Engineer</div>

                    <div className="terminal-line"><span className="prompt">$</span> strengths</div>
                    <div className="terminal-output">
                      Problem Solving · Clean Architecture · REST APIs<br />
                      Database Design · Debugging · Git &amp; GitHub
                    </div>

                    <div className="terminal-line"><span className="prompt">$</span> mission</div>
                    <div className="terminal-output">
                      Building modern, scalable, and user-focused applications while ensuring
                      quality through testing and automation. Passionate about creating seamless
                      digital experiences and continuously learning new technologies.
                    </div>

                    <div className="terminal-line"><span className="prompt">$</span> currently_learning</div>
                    <div className="terminal-output">Spring Boot | Playwright | Advanced Testing Automation</div>

                    <div className="terminal-line">
                      <span className="prompt">$</span>
                      <span className="cursor"></span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════
                SKILLS
            ════════════════════════════════════════ */}
            <section id="expertise" className="reveal">
              <h2 className="section-header">02. Skills &amp; Expertise</h2>

              <div className="glass-card terminal-skills">
                <div className="terminal-header">
                  <span className="terminal-dot red"></span>
                  <span className="terminal-dot yellow"></span>
                  <span className="terminal-dot green"></span>
                  <span className="terminal-title">skill-scanner.exe</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line"><span className="prompt">$</span> scan --skills</div>
                  {["Frontend Development","Backend Development","Database Management","QA & Test Automation","Tools & Platforms"].map((s,i) => (
                    <div key={i} className="terminal-output success">✓ {s}</div>
                  ))}
                  <div className="terminal-line"><span className="prompt">$</span> status</div>
                  <div className="terminal-output status">Ready for Production </div>
                </div>
              </div>

              <div className="skills-grid">
                {[
                  { icon:"⚛", title:"Frontend Development",
                    items:["HTML5","CSS3","JavaScript","TypeScript","React.js","Next.js","Tailwind CSS","Bootstrap","Responsive Design","UI/UX Design"] },
                  { icon:"🍃", title:"Backend Development",
                    items:["Java","Spring Boot","Spring Security","Hibernate","JPA","REST APIs","Node.js","Python","Authentication","MVC Architecture"] },
                  { icon:"🗄", title:"Database Management",
                    items:["MySQL","MongoDB","Database Design","SQL Queries","Data Modeling"] },
                  { icon:"🎭", title:"QA & Test Automation",
                    items:["Manual Testing","Test Planning","Test Cases","Regression Testing","Smoke Testing","API Testing","Automation Testing","Selenium","Playwright","Performance Testing","Security Testing","Cross Browser Testing","SDLC"] },
                  { icon:"🛠", title:"Tools & Platforms",
                    items:["Git","GitHub","Git Branching","Postman","Jira","Xray","BrowserStack","Katalon","JMeter","OWASP ZAP","Figma","VS Code","IntelliJ IDEA","Vercel"] },
                  { icon:"🧠", title:"Soft Skills", outline:true,
                    items:["Problem Solving","Analytical Thinking","Critical Thinking","Attention to Detail","Communication","Team Collaboration","Adaptability","Time Management","Continuous Learning","Leadership","Agile Mindset","Decision Making"] },
                ].map((cat, ci) => (
                  <div key={ci} className="glass-card skill-category">
                    <h3>{cat.icon} {cat.title}</h3>
                    <div className="tags">
                      {cat.items.map((sk, si) => (
                        <span key={si} className={"tag" + (cat.outline ? " tag-outline" : "")}>{sk}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ════════════════════════════════════════
                CERTIFICATIONS
            ════════════════════════════════════════ */}
            <section id="certifications" className="reveal">
              <h2 className="section-header">03. Certifications &amp; Achievements</h2>

              <div className="glass-card terminal-skills">
                <div className="terminal-header">
                  <span className="terminal-dot red"></span>
                  <span className="terminal-dot yellow"></span>
                  <span className="terminal-dot green"></span>
                  <span className="terminal-title">certification-scanner.exe</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line"><span className="prompt">$</span> scan --credentials</div>
                  {["Manual Testing","Selenium Automation","API Testing","Test Framework Design","CI/CD Integration"].map((s,i) => (
                    <div key={i} className="terminal-output success">✓ {s}</div>
                  ))}
                  <div className="terminal-line"><span className="prompt">$</span> status</div>
                  <div className="terminal-output status">6 Credentials Verified </div>
                </div>
              </div>

              <div className="certifications-grid">
                {data.certifications.map((cert) => (
                  <div key={cert.id} className="glass-card certification-card">

                    {/* ── Large certificate image ── */}
                    <div className="cert-image-area">
                      <img src={cert.image} alt={cert.title} />
                      <div className="cert-image-overlay"></div>
                    </div>

                    {/* ── Body ── */}
                    <div className="cert-body">
                      <div className="cert-top-row">
                        <div className="cert-title-area">
                          <h3>{cert.title}</h3>
                          <div className="cert-issuer">{cert.issuer}</div>
                        </div>
                        <div className="verified-badge">✓ Verified</div>
                      </div>

                      <p className="cert-desc">{cert.desc}</p>

                      <div className="cert-footer">
                        <span className="cert-date">{cert.date}</span>
                        <a href={cert.credential} target="_blank" rel="noreferrer" className="cert-link">
                          View Credential →
                        </a>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </section>

            {/* ════════════════════════════════════════
                PROJECTS
            ════════════════════════════════════════ */}
            <section id="projects" className="reveal">
              <h2 className="section-header">04. Featured Projects</h2>

              <div className="glass-card terminal-skills">
                <div className="terminal-header">
                  <span className="terminal-dot red"></span>
                  <span className="terminal-dot yellow"></span>
                  <span className="terminal-dot green"></span>
                  <span className="terminal-title">project-scanner.exe</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line"><span className="prompt">$</span> scan --projects</div>
                  {["JoMap System","QA Automation Framework","Full Stack Development"].map((s,i) => (
                    <div key={i} className="terminal-output success">✓ {s}</div>
                  ))}
                  <div className="terminal-line"><span className="prompt">$</span> status</div>
                  <div className="terminal-output status">Projects Successfully Deployed </div>
                </div>
              </div>

              <div className="projects-grid">

                {/* JoMap */}
                <div className="glass-card project-card">
                  <div className="project-status"><span className="status-dot"></span>Active Project</div>
                  <h3>🗺️ JoMap System</h3>
                  <span className="project-subtitle">Full Stack Mobile Application</span>
                  <p className="project-description">
                    JoMap is a mobile application designed to help users discover and navigate
                    locations through an interactive mapping experience. The system combines a
                    Kotlin-based Android application with a Spring Boot backend and MySQL database
                    to provide secure, scalable, and efficient location-based services.
                  </p>
                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul>
                      {["User Authentication & Authorization","Interactive Map Integration","Location Search & Navigation","Real-Time Data Retrieval","REST API Communication","Responsive Mobile Experience","Database Management with MySQL","Secure Backend Services"].map((f,i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                  <div className="tech-stack">
                    {["Kotlin","Spring Boot","Java","MySQL","REST API"].map((t,i) => <span key={i}>{t}</span>)}
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/ziadmq/JoMap" target="_blank" rel="noopener noreferrer"><FaGithub /> Frontend Repo</a>
                    <a href="https://github.com/ghalebshhab/GraduationProjectv1" target="_blank" rel="noopener noreferrer"><FaGithub /> Backend Repo</a>
                  </div>
                </div>

                {/* QA Automation */}
                <div className="glass-card project-card">
                  <div className="project-status"><span className="status-dot"></span>Completed</div>
                  <h3>🎭 QA Automation Framework</h3>
                  <span className="project-subtitle">Selenium UI &amp; API Test Automation</span>
                  <p className="project-description">
                    End-to-end automation testing framework built for a Todo application, covering
                    both REST API and UI testing. The framework validates business logic,
                    authentication flows, data consistency, and user interactions while maintaining
                    scalability and code reusability.
                  </p>
                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul>
                      {["REST API Testing","Authentication Token Validation","CRUD Operations Testing","Selenium UI Automation","Page Object Model Architecture","Allure Reporting","GitHub Actions CI/CD","Reusable Test Utilities"].map((f,i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                  <div className="tech-stack">
                    {["Java","Selenium","TestNG","Maven","REST API","Allure","GitHub Actions"].map((t,i) => <span key={i}>{t}</span>)}
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/ghalebshhab/Selinium-Automation-Project" target="_blank" rel="noopener noreferrer"><FaGithub /> View Repository</a>
                  </div>
                </div>

              </div>
            </section>

          </div>{/* end .container */}

          {/* ════════════════════════════════════════
              CONTACT / FOOTER
          ════════════════════════════════════════ */}
          <footer id="contact">
            <div className="footer-content">
              <h2 className="gradient-text">Let's Work Together</h2>
              <p className="footer-sub">
                I'm currently available for freelance work or full-time positions.
                Let's build something great.
              </p>
              <div className="socials">
                <a href="https://www.linkedin.com/in/ghaleb-shhab-99518b2b2" target="_blank" rel="noreferrer" className="social-btn"><FaLinkedin /></a>
                <a href="https://wa.me/9622600109" target="_blank" rel="noreferrer" className="social-btn"><FaWhatsapp /></a>
                <a href="https://www.instagram.com/ghm_shh" target="_blank" rel="noreferrer" className="social-btn"><FaInstagram /></a>
                <a href="https://github.com/ghalebshhab" target="_blank" rel="noreferrer" className="social-btn"><FaGithub /></a>
              </div>
              <div className="copyright">
                <p>© 2026 Ghaleb Shhab. All Rights Reserved.</p>
              </div>
            </div>
          </footer>

        </div>
      )}
    </>
  );
}