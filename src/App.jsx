import React, { useState, useEffect } from "react";
import "./App.css";
import Image from "./Screenshot 2026-01-05 211541.png";
import Image2 from "./Screenshot 2026-01-07 231901.png";
import Image3 from "./Screenshot 2026-01-07 231810.png";
import Me from "./IMG_2992.JPG";
import { 
  FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook, FaGithub, 
  FaExternalLinkAlt, FaCode, FaLaptopCode, FaBars, FaTimes 
} from "react-icons/fa";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- DATA: Update your details here ---
  const data = {
    certifications: [
     
      { 
        id: 1, 
        title: "QA - Manual Testing Level", 
        desc: "Comprehensive understanding of testing methodologies.", 
        image: Image
      },
      { 
        id: 2, 
        title: "Postman API Testing", 
        desc: "Comprehensive understanding Of API testing using Postman.", 
        image: Image2
      },
      { 
        id: 3, 
        title: "Postman Automation Project", 
        desc: "Comprehensive understanding Of API Automation using Postman.", 
        image: Image3
      }
    ]
  };

  // --- 1. Loading Timer ---
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // --- 2. Scroll Spy & Animation ---
  useEffect(() => {
    if (loading) return;

    // Animation Observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    // Nav Spy Observer
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25 }
    );
    document.querySelectorAll("section, header").forEach((el) => navObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
    };
  }, [loading]);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "expertise", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {loading && (
        <div id="loader">
          <div className="loading-text">Welcome to Ghaleb's Portfolio...</div>
        </div>
      )}

      {!loading && (
        <div id="content">
          
          {/* --- DESKTOP NAV --- */}
          <nav className="top-nav fade-in desktop-only">
            <ul>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={activeSection === link.id ? "active-link" : ""}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </nav>

          {/* --- MOBILE NAV TOGGLE --- */}
          <div className="mobile-toggle mobile-only" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* --- MOBILE MENU OVERLAY --- */}
          {mobileMenuOpen && (
            <div className="mobile-menu mobile-only">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id} onClick={() => scrollTo(link.id)}>
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="container">
            
            {/* HERO */}
            <header id="home" className="reveal">
              <div className="hero-content">
                <p className="mono-accent">Hello, world.</p>
                <h1>I am <span className="gradient-text">Ghaleb Shhab</span></h1>
                <p className="subtitle">
                  Professional Software Engineer. <br />
                  <span className="subtitle-dim">Front End Developer , Quality Assurance</span>
                </p>
                <div className="hero-btns">
                  <button onClick={() => scrollTo('projects')} className="btn-primary">View My Work</button>
                  <button onClick={() => scrollTo('contact')} className="btn-secondary">Contact Me</button>
                </div>
              </div>
            </header>

            {/* ABOUT */}
        <section id="about" className="reveal">
  <h2 className="section-header">01. About Me</h2>
  <div className="glass-card about-card about-photo-wrapper">
    <div className="about-photo">
      <img src={Me} alt="Profile" />
    </div>
    <div className="about-text">
      <p>
        I am a passionate <strong>Software Engineer</strong> focused on building responsive, user-friendly web applications. Skilled in <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Bootstrap</strong>, and <strong>Tailwind CSS</strong>, I bring ideas to life with clean, efficient code.
      </p>
      <p style={{ marginTop: '1rem' }}>
        I also have experience with <strong>Node.js</strong> and <strong>MongoDB</strong>, and possess <strong>Manual QA Testing</strong> skills to ensure high-quality, reliable products. I strive to create seamless digital experiences that are both functional and visually engaging.
      </p>
    </div>
  </div>
</section>


            {/* EXPERTISE */}
            <section id="expertise" className="reveal">
              <h2 className="section-header">02. Skills</h2>
              <div className="skills-wrapper">
                {/* Tech Skills */}
                <div className="glass-card skill-box">
                  <h3 className="mono"><FaCode className="icon-margin" /> Technical</h3>
                  <div className="tags">
                    {["React.js", "Next.js", "Node.js", "JavaScript (ES6+)","Java","Python", "HTML5 & CSS3", "Git & GitHub", "REST APIs"].map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                {/* Soft Skills */}
                <div className="glass-card skill-box">
                  <h3 className="mono"><FaLaptopCode className="icon-margin" /> Software</h3>
                  <div className="tags">
                    {[ "Problem Solving", "Agile Methodology", "Team Collaboration", "Time Management"].map((tag, i) => (
                      <span key={i} className="tag tag-outline">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="glass-card skill-box">
                  <h3 className="mono"><FaLaptopCode className="icon-margin" /> Tools</h3>
                  <div className="tags">
                    {[ "Jira","Postman","Tweak","Katalon","Selinium","Browser Stack","PlayWright","Jemeter","OwsapZap"].map((tag, i) => (
                      <span key={i} className="tag tag-outline">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* CERTIFICATIONS (WITH IMAGES) */}
            <section id="certifications" className="reveal">
              <h2 className="section-header">03. Certifications</h2>
              <div className="grid">
                {data.certifications.map((cert) => (
                  <div key={cert.id} className="glass-card cert-card">
                    <div className="cert-img-wrapper">
                      <img src={cert.image} alt={cert.title} />
                    </div>
                    <div className="cert-content">
                      <h3>{cert.title}</h3>
                      <p>{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="reveal">
              <h2 className="section-header">04. Projects</h2>
              <div className="grid">
                No Projects For Now .
              </div>
            </section>

            {/* FOOTER (CENTERED) */}
            <footer id="contact">
              <div className="footer-content">
                <h2 className="gradient-text">Let's Work Together</h2>
                <p className="footer-sub">I am currently available for freelance work or full-time positions.</p>
                
                <div className="socials">
                  <a href="https://www.linkedin.com/in/ghaleb-shhab-99518b2b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="social-btn"><FaLinkedin /></a>
                  <a href="https://wa.me/9621852089" target="_blank" className="social-btn"><FaWhatsapp /></a>
                  <a href="https://www.instagram.com/ghm_shh" target="_blank" className="social-btn"><FaInstagram /></a>
                  <a href="https://github.com/ghalebshhab" target="_blank" className="social-btn"><FaGithub /></a>
                </div>
                
                <div className="copyright">
                  <p>© 2026 Ghaleb Shhab. All Rights Reserved.</p>
                </div>
              </div>
            </footer>

          </div>
        </div>
      )}
    </>
  );
}


