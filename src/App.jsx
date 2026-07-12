import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Image  from "./Screenshot 2026-01-05 211541.png";
import Image2 from "./Screenshot 2026-01-07 231901.png";
import Image3 from "./Screenshot 2026-01-07 231810.png";
import Image4 from "./Selinium.png";
import Image5 from "./Selinium-proj.png";
import Image6 from "./Step-Certificate.png";
import Image7 from "./spring-boot-certificate.jpg";
import yourImage from "../src/Me-6.jpeg";
import JoMapImage from "./Jomap-pict.png";
import AutomationImage from "./qa_automation_project_banner.png";
import TodoProjectImage from "./Todo-List.png";
import WeatherProjectImage from "./Weather-App.png";
import CvImage from "./Cv-Generator.png";

import {
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaBriefcase,
  FaLaptopCode,
  FaBug,
  FaGlobe,
  FaArrowUpRightFromSquare
} from "react-icons/fa6";
export default function App() {
  const [loading, setLoading] = useState(true);
  const [loaderProgress, setLoaderProgress] = useState(0);
  const [loaderStage, setLoaderStage] = useState("Initializing workspace");
  const [loaderExiting, setLoaderExiting] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeProjectFilter, setActiveProjectFilter] = useState("all");
  const navRef = useRef(null);

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
        {
  id: 7,
  title: "Master Spring Boot 4, Spring 7 & Hibernate 7",
  issuer: "Udemy",
  date: "2026",
  desc: "Mastered enterprise Java development using Spring Boot 4, Spring 7, and Hibernate 7. Gained hands-on experience in building secure REST APIs, implementing Spring Security, developing MVC applications, managing databases with JPA/Hibernate, applying AOP concepts, and creating full-stack CRUD applications following industry best practices.",
  image: Image7,
  credential: "#"
},
    ],
  };

  useEffect(() => {
    document.body.classList.add("is-loading");

    const duration = 4600;
    const exitStart = 4200;
    const startedAt = performance.now();
    let animationFrame;

    const stages = [
      { at: 0, text: "Initializing workspace" },
      { at: 15, text: "Loading interface components" },
      { at: 34, text: "Connecting projects and credentials" },
      { at: 55, text: "Optimizing responsive experience" },
      { at: 74, text: "Preparing developer workspace" },
      { at: 91, text: "Running final quality checks" },
      { at: 100, text: "Portfolio ready" },
    ];

    const animateLoader = (now) => {
      const elapsed = now - startedAt;
      const normalized = Math.min(elapsed / exitStart, 1);

      // Eased progress feels more natural than a constant-speed bar.
      const eased = 1 - Math.pow(1 - normalized, 2.25);
      const progress = Math.min(100, Math.round(eased * 100));

      setLoaderProgress(progress);

      const currentStage = [...stages]
        .reverse()
        .find((stage) => progress >= stage.at);
      setLoaderStage(currentStage?.text ?? stages[0].text);

      if (elapsed >= exitStart) setLoaderExiting(true);

      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(animateLoader);
      } else {
        setLoading(false);
        document.body.classList.remove("is-loading");
      }
    };

    animationFrame = requestAnimationFrame(animateLoader);

    return () => {
      cancelAnimationFrame(animationFrame);
      document.body.classList.remove("is-loading");
    };
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const dot = document.querySelector(".custom-cursor-dot");
    const ring = document.querySelector(".custom-cursor-ring");
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frameId;

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      document.body.classList.add("cursor-visible");
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frameId = requestAnimationFrame(animateRing);
    };

    const setHover = (event) => {
      document.body.classList.toggle(
        "cursor-hovering",
        Boolean(event.target.closest("a, button, [role='button'], .project-card, .social-btn"))
      );
    };

    const hideCursor = () => document.body.classList.remove("cursor-visible");
    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", setHover);
    document.addEventListener("mouseout", setHover);
    document.addEventListener("mouseleave", hideCursor);
    animateRing();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", setHover);
      document.removeEventListener("mouseout", setHover);
      document.removeEventListener("mouseleave", hideCursor);
      document.body.classList.remove("cursor-visible", "cursor-hovering");
    };
  }, [loading]);

  useEffect(() => {
    if (loading) return;

    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("active"); revealObs.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

    const sectionIds = [
      "home",
      "about",
      "education",
      "expertise",
      "certifications",
      "projects",
      "contact",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    let scrollFrame = 0;

    const calculateActiveSection = () => {
      scrollFrame = 0;

      const navigationLine = window.scrollY + 140;
      let currentSection = "home";

      for (const section of sections) {
        if (section.offsetTop <= navigationLine) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      const nearPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 16;

      const nextSection = nearPageBottom ? "contact" : currentSection;
      setActiveSection((previous) =>
        previous === nextSection ? previous : nextSection
      );
    };

    const requestSectionUpdate = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(calculateActiveSection);
    };

    calculateActiveSection();
    window.addEventListener("scroll", requestSectionUpdate, { passive: true });
    window.addEventListener("resize", requestSectionUpdate, { passive: true });

    return () => {
      revealObs.disconnect();
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener("scroll", requestSectionUpdate);
      window.removeEventListener("resize", requestSectionUpdate);
    };
  }, [loading]);


  useEffect(() => {
    if (loading || !navRef.current) return;

    const activeButton = navRef.current.querySelector(
      `button[data-section="${activeSection}"]`
    );

    activeButton?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeSection, loading]);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    setActiveSection(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navLinks = [
    { id:"home",           label:"Home"           },
    { id:"about",          label:"About"          },
    { id:"education",      label:"Education"      },
    { id:"expertise",      label:"Skills"         },
    { id:"certifications", label:"Certifications" },
    { id:"projects",       label:"Projects"       },
    { id:"contact",        label:"Contact"        },
  ];

  return (
    <>
      {/* ─── LOADER ─── */}
      <div className="custom-cursor-dot" aria-hidden="true"></div>
      <div className="custom-cursor-ring" aria-hidden="true"></div>

      {loading && (
        <div
          id="loader"
          className={loaderExiting ? "loader--exiting" : ""}
          role="status"
          aria-live="polite"
          aria-label={`Loading portfolio: ${loaderProgress}%`}
        >
          <div className="loader-grid" aria-hidden="true"></div>
          <div className="loader-orb loader-orb--one" aria-hidden="true"></div>
          <div className="loader-orb loader-orb--two" aria-hidden="true"></div>
          <div className="loader-noise" aria-hidden="true"></div>

          <div className="loader-terminal">
            <div className="loader-terminal-bar">
              <div className="loader-terminal-dots" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
              <span className="loader-terminal-title">ghaleb.portfolio / production</span>
              <span className="loader-terminal-version">v3.0</span>
            </div>

            <div className="loader-terminal-body">
              <div className="loader-brand">
                <span className="loader-brand-mark">GS</span>
                <div>
                  <span className="loader-eyebrow">DIGITAL WORKSPACE</span>
                  <h1>Ghaleb Shhab</h1>
                  <p>Software Engineer · Full-Stack Developer · QA Engineer</p>
                </div>
              </div>

              <div className="loader-command">
                <span className="loader-prompt">$</span>
                <span className="loader-command-text">npm run portfolio:launch</span>
                <span className="loader-command-cursor" aria-hidden="true"></span>
              </div>

              <div className="loader-log" aria-hidden="true">
                <div className={loaderProgress >= 15 ? "loader-log-line is-visible" : "loader-log-line"}>
                  <span className="loader-check">✓</span><span>Interface components loaded</span>
                </div>
                <div className={loaderProgress >= 34 ? "loader-log-line is-visible" : "loader-log-line"}>
                  <span className="loader-check">✓</span><span>Projects and credentials connected</span>
                </div>
                <div className={loaderProgress >= 55 ? "loader-log-line is-visible" : "loader-log-line"}>
                  <span className="loader-check">✓</span><span>Responsive experience optimized</span>
                </div>
                <div className={loaderProgress >= 74 ? "loader-log-line is-visible" : "loader-log-line"}>
                  <span className="loader-check">✓</span><span>Developer workspace prepared</span>
                </div>
              </div>

              <div className="loader-progress-wrap">
                <div className="loader-progress-meta">
                  <span className="loader-stage">{loaderStage}</span>
                  <span className="loader-percentage">{loaderProgress}%</span>
                </div>
                <div
                  className="loader-progress-track"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={loaderProgress}
                >
                  <span
                    className="loader-progress-bar"
                    style={{ width: `${loaderProgress}%` }}
                  ></span>
                </div>
              </div>

              <div className={loaderProgress >= 91 ? "loader-ready is-visible" : "loader-ready"}>
                <span className="loader-ready-dot"></span>
                <span>{loaderProgress === 100 ? "Launch complete" : "Final checks in progress"}</span>
                <span className="loader-ready-code">200 OK</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {!loading && (
        <div id="content" className="app-shell">

          {/* ─── FIXED RESPONSIVE NAVIGATION ─── */}
          <nav ref={navRef} className="top-nav fade-in" aria-label="Main navigation">
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    data-section={link.id}
                    className={activeSection === link.id ? "active-link" : ""}
                    onClick={() => scrollTo(link.id)}
                    aria-current={activeSection === link.id ? "page" : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

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
                      <span className="stat-num">7</span>
                      <span className="stat-label">Certifications</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-num">5</span>
                      <span className="stat-label">Featured Projects</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-num">25+</span>
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
                    <span className="orbit-chip orbit-chip--react">React</span>
                    <span className="orbit-chip orbit-chip--spring">Spring</span>
                    <span className="orbit-chip orbit-chip--qa">QA</span>
                  </div>

                  <div className="photo-glow"></div>
                </div>

              </div>
              <button className="scroll-cue" onClick={() => scrollTo("about")} aria-label="Scroll to About section">
                <span>Scroll to explore</span>
                <span className="scroll-cue-mouse"><span></span></span>
              </button>
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
                EDUCATION
            ════════════════════════════════════════ */}
            <section id="education" className="reveal">
              <h2 className="section-header">02. Education</h2>

              <div className="edu-timeline">

                {/* ── ENTRY 1 ── */}
                <div className="edu-item reveal">
                  <div className="edu-left">
                    <div className="edu-year-badge">
                      <span>2022</span>
                      <div className="edu-year-line"></div>
                      <span>2026</span>
                    </div>
                  </div>
                  <div className="edu-connector">
                    <div className="edu-dot edu-dot--primary"></div>
                    <div className="edu-thread"></div>
                  </div>
                  <div className="glass-card edu-card">
                    <div className="edu-card-top">
                      <div className="edu-icon-wrap">🎓</div>
                      <div className="edu-meta">
                        <div className="edu-degree">Bachelor of   Software Engineering</div>
                        <div className="edu-school">Faculty of Information Technology</div>
                        <div className="edu-location">📍 Zarqa, Jordan</div>
                      </div>
                      <div className="edu-status edu-status--done">Completed</div>
                    </div>
                    <p className="edu-desc">
                      Comprehensive study of software engineering, data structures, algorithms,
                      database design, operating systems, and web development. Culminating with
                      the <strong>JoMap graduation project</strong> — a full-stack geospatial
                      mapping platform built from the ground up.
                    </p>
                    <div className="edu-highlights">
                      <div className="edu-highlight-item">
                        <span className="edu-highlight-icon">▹</span>
                        <span>Graduation Project: JoMap — Full-Stack Mobile Mapping Platform</span>
                      </div>
                      <div className="edu-highlight-item">
                        <span className="edu-highlight-icon">▹</span>
                        <span>Focus areas: Software Engineering, Databases, Web &amp; Mobile Dev</span>
                      </div>
                      <div className="edu-highlight-item">
                        <span className="edu-highlight-icon">▹</span>
                        <span>Completed 40+ hrs of QA Automation training alongside degree</span>
                      </div>
                    </div>
                    <div className="edu-tags">
                      {["Java","Spring Boot","React.js","MySQL","Algorithms","Data Structures","Software Engineering"].map((t,i) => (
                        <span key={i} className="edu-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── ENTRY 2 ── */}
                <div className="edu-item reveal">
                  <div className="edu-left">
                    <div className="edu-year-badge">
                      <span>2025-11</span>
                      <div className="edu-year-line"></div>
                      <span>2026-2</span>
                    </div>
                  </div>
                  <div className="edu-connector">
                    <div className="edu-dot edu-dot--secondary"></div>
                    <div className="edu-thread edu-thread--short"></div>
                  </div>
                  <div className="glass-card edu-card">
                    <div className="edu-card-top">
                      <div className="edu-icon-wrap edu-icon-wrap--purple">🧪</div>
                      <div className="edu-meta">
                        <div className="edu-degree">QA Engineering &amp; Test Automation</div>
                        <div className="edu-school">Step IT Academy — Training Program</div>
                        <div className="edu-location">📍 Amman, Jordan</div>
                      </div>
                      <div className="edu-status edu-status--done">Completed</div>
                    </div>
                    <p className="edu-desc">
                      Intensive hands-on training covering the full QA spectrum — from manual
                      testing fundamentals through advanced automation frameworks. Includes
                      real project delivery with CI/CD pipelines and industry tooling.
                    </p>
                    <div className="edu-highlights">
                      <div className="edu-highlight-item">
                        <span className="edu-highlight-icon">▹</span>
                        <span>Selenium WebDriver automation with Java, TestNG &amp; Maven</span>
                      </div>
                      <div className="edu-highlight-item">
                        <span className="edu-highlight-icon">▹</span>
                        <span>REST API testing with Postman and automated collections</span>
                      </div>
                      <div className="edu-highlight-item">
                        <span className="edu-highlight-icon">▹</span>
                        <span>CI/CD pipeline setup with GitHub Actions &amp; Allure Reports</span>
                      </div>
                    </div>
                    <div className="edu-tags">
                      {["Selenium","Java","TestNG","Postman","Jira","GitHub Actions","Allure","Maven"].map((t,i) => (
                        <span key={i} className="edu-tag edu-tag--purple">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* ════════════════════════════════════════
                SKILLS
            ════════════════════════════════════════ */}
            <section id="expertise" className="reveal">
              <h2 className="section-header">03. Skills &amp; Expertise</h2>

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
              <h2 className="section-header">04. Certifications &amp; Achievements</h2>

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
                  <div className="terminal-output status">7 Credentials Verified </div>
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
              <h2 className="section-header">05. Featured Projects</h2>

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

              <div className="project-filters" role="group" aria-label="Filter projects">
                {[
                  { id: "all", label: "All Projects" },
                  { id: "fullstack", label: "Full Stack" },
                  { id: "frontend", label: "Frontend" },
                  { id: "qa", label: "QA Automation" }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    className={activeProjectFilter === filter.id ? "project-filter active" : "project-filter"}
                    onClick={() => setActiveProjectFilter(filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="projects-grid">

                {/* JoMap */}
               <div className={`glass-card project-card ${activeProjectFilter !== "all" && activeProjectFilter !== "fullstack" ? "project-card--hidden" : ""}`}>

  <div className="project-image-wrapper">
    <img
      src={JoMapImage}
      alt="JoMap mobile application preview"
      className="project-image"
    />

    <div className="project-image-overlay"></div>
    <div className="project-image-shine" aria-hidden="true"></div>

    <span className="project-image-label">
      Mobile Application
    </span>
  </div>

  <div className="project-card-content">

    <div className="project-status">
      <span className="status-dot"></span>
      Active Project
    </div>

    <h3>🗺️ JoMap System</h3>

    <span className="project-subtitle">
      Full Stack Mobile Application
    </span>

    <p className="project-description">
      JoMap is a mobile application designed to help users discover and
      navigate locations through an interactive mapping experience. The
      system combines a Kotlin-based Android application with a Spring Boot
      backend and MySQL database.
    </p>

    <div className="project-features">
      <h4>Key Features</h4>

      <ul>
        {[
          "User Authentication & Authorization",
          "Interactive Map Integration",
          "Location Search & Navigation",
          "Real-Time Data Retrieval",
          "REST API Communication",
          "Responsive Mobile Experience",
          "Database Management with MySQL",
          "Secure Backend Services"
        ].map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>

    <div className="tech-stack">
      {[
        "Kotlin",
        "Spring Boot",
        "Java",
        "MySQL",
        "REST API"
      ].map((technology, index) => (
        <span key={index}>{technology}</span>
      ))}
    </div>

    <div className="project-links">
      <a
        href="https://github.com/ziadmq/JoMap"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        Frontend Repo
      </a>

      <a
        href="https://github.com/ghalebshhab/GraduationProjectv1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        Backend Repo
      </a>
    </div>

  </div>
</div>

                {/* QA Automation */}
              <div className={`glass-card project-card ${activeProjectFilter !== "all" && activeProjectFilter !== "qa" ? "project-card--hidden" : ""}`}>

  <div className="project-image-wrapper">
    <img
      src={AutomationImage}
      alt="QA automation framework preview"
      className="project-image"
    />

    <div className="project-image-overlay"></div>
    <div className="project-image-shine" aria-hidden="true"></div>

    <span className="project-image-label">
      QA Automation
    </span>
  </div>

  <div className="project-card-content">

    <div className="project-status">
      <span className="status-dot"></span>
      Completed
    </div>

    <h3>🎭 QA Automation Framework</h3>

    <span className="project-subtitle">
      Selenium UI &amp; API Test Automation
    </span>

    <p className="project-description">
      End-to-end automation testing framework built for a Todo application,
      covering both REST API and UI testing. The framework validates
      authentication, CRUD operations, business logic, and user interactions.
    </p>

    <div className="project-features">
      <h4>Key Features</h4>

      <ul>
        {[
          "REST API Testing",
          "Authentication Token Validation",
          "CRUD Operations Testing",
          "Selenium UI Automation",
          "Page Object Model Architecture",
          "Allure Reporting",
          "GitHub Actions CI/CD",
          "Reusable Test Utilities"
        ].map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>

    <div className="tech-stack">
      {[
        "Java",
        "Selenium",
        "TestNG",
        "Maven",
        "REST API",
        "Allure",
        "GitHub Actions"
      ].map((technology, index) => (
        <span key={index}>{technology}</span>
      ))}
    </div>

    <div className="project-links">
      <a
        href="https://github.com/ghalebshhab/Selinium-Automation-Project"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        View Repository
      </a>
    </div>

  </div>
</div>
{/* Todo List Frontend Project */}
<div className={`glass-card project-card ${activeProjectFilter !== "all" && activeProjectFilter !== "frontend" ? "project-card--hidden" : ""}`}>

  <div className="project-image-wrapper">
    <img
      src={TodoProjectImage}
      alt="Todo List React application preview"
      className="project-image"
    />

    <div className="project-image-overlay"></div>
    <div className="project-image-shine" aria-hidden="true"></div>

    <span className="project-image-label">
      React Frontend
    </span>
  </div>

  <div className="project-card-content">

    <div className="project-status">
      <span className="status-dot"></span>
      Completed
    </div>

    <h3>✅ Todo List Application</h3>

    <span className="project-subtitle">
      React.js Task Management Application
    </span>

    <p className="project-description">
      A responsive task management application developed using React.js.
      The application allows users to create, update, complete, filter, and
      delete daily tasks through a clean and user-friendly interface.
    </p>

    <div className="project-features">
      <h4>Key Features</h4>

      <ul>
        {[
          "Create New Tasks",
          "Edit Existing Tasks",
          "Mark Tasks as Completed",
          "Delete Tasks",
          "Filter Tasks by Status",
          "Dynamic User Interface",
          "Reusable React Components",
          "Responsive Design"
        ].map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>

    <div className="tech-stack">
      {[
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "React Hooks"
      ].map((technology, index) => (
        <span key={index}>{technology}</span>
      ))}
    </div>

    <div className="project-links">
      <a
        href="https://github.com/ghalebshhab/Reactapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        View Repository
      </a>

      <a
        href="https://reactapp-seven-mu-71.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo ↗
      </a>
    </div>

  </div>
</div>
{/* Weather API Frontend Project */}
<div className={`glass-card project-card ${activeProjectFilter !== "all" && activeProjectFilter !== "frontend" ? "project-card--hidden" : ""}`}>

  <div className="project-image-wrapper">
    <img
      src={WeatherProjectImage}
      alt="Weather API React application preview"
      className="project-image"
    />

    <div className="project-image-overlay"></div>
    <div className="project-image-shine" aria-hidden="true"></div>

    <span className="project-image-label">
      React API Project
    </span>
  </div>

  <div className="project-card-content">

    <div className="project-status">
      <span className="status-dot"></span>
      Completed
    </div>

    <h3>🌦️ Weather API Application</h3>

    <span className="project-subtitle">
      React.js Weather Forecast Application
    </span>

    <p className="project-description">
      A responsive weather application developed using React.js and a
      third-party weather API. Users can search for cities and view current
      weather information through a modern and easy-to-use interface.
    </p>

    <div className="project-features">
      <h4>Key Features</h4>

      <ul>
        {[
          "Search Weather by City",
          "Real-Time Weather Data",
          "Current Temperature Display",
          "Weather Condition Details",
          "Humidity and Wind Information",
          "City Search Suggestions",
          "Arabic and English Support",
          "Error and Loading Handling",
          "Responsive User Interface"
        ].map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>

    <div className="tech-stack">
      {[
        "React.js",
        "JavaScript",
        "REST API",
        "OpenWeather API",
        "HTML5",
        "CSS3"
      ].map((technology, index) => (
        <span key={index}>{technology}</span>
      ))}
    </div>

    <div className="project-links">
      <a
        href="https://github.com/ghalebshhab/WeatherApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        View Repository
      </a>

      <a
        href="https://weather-app-chi-lilac-65.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo ↗
      </a>
    </div>

  </div>
</div>
{/* CV Generator Frontend Project */}
<div className={`glass-card project-card ${activeProjectFilter !== "all" && activeProjectFilter !== "frontend" ? "project-card--hidden" : ""}`}>

  <div className="project-image-wrapper">
    <img
      src={CvImage}
      alt="CV Generator React application preview"
      className="project-image"
    />

    <div className="project-image-overlay"></div>
    <div className="project-image-shine" aria-hidden="true"></div>

    <span className="project-image-label">
      React Frontend
    </span>
  </div>

  <div className="project-card-content">

    <div className="project-status">
      <span className="status-dot"></span>
      Completed
    </div>

    <h3>📄 CV Generator Application</h3>

    <span className="project-subtitle">
      React.js Resume Builder
    </span>

    <p className="project-description">
      A responsive CV generator application built using React.js. The application
      allows users to enter their personal information, education, skills, work
      experience, and contact details, then instantly preview a professionally
      formatted resume.
    </p>

    <div className="project-features">
      <h4>Key Features</h4>

      <ul>
        {[
          "Personal Information Form",
          "Education Section Management",
          "Work Experience Management",
          "Skills and Languages Sections",
          "Real-Time CV Preview",
          "Dynamic Form Updates",
          "Reusable React Components",
          "Responsive Resume Layout",
          "Print and PDF-Friendly Design"
        ].map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>

    <div className="tech-stack">
      {[
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "React Hooks"
      ].map((technology, index) => (
        <span key={index}>{technology}</span>
      ))}
    </div>

    <div className="project-links">
      <a
        href="https://github.com/ghalebshhab/Cv"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        View Repository
      </a>

      <a
        href="https://cv-pi-mocha.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo ↗
      </a>
    </div>

  </div>
</div>

              </div>
            </section>

          </div>{/* end .container */}

          {/* ════════════════════════════════════════
              CONTACT / FOOTER
          ════════════════════════════════════════ */}
         <footer id="contact" className="contact-section">

  <div className="contact-orb contact-orb-one"></div>
  <div className="contact-orb contact-orb-two"></div>

  <div className="contact-shell">

    <div className="contact-heading reveal">

      <span className="contact-eyebrow">
        <span className="contact-eyebrow-dot"></span>
        Available for new opportunities
      </span>

      <h2>
        Let&apos;s build something
        <span className="gradient-text"> great together.</span>
      </h2>

      <p>
        I&apos;m open to Software Engineering, Full-Stack Development,
        QA Engineering, freelance projects, and remote opportunities.
      </p>

    </div>

    <div className="contact-layout">

      {/* LEFT SIDE */}
      <div className="contact-main-card glass-card reveal">

        <div className="contact-card-top">

          <div>
            <span className="contact-mini-label">
              CURRENT STATUS
            </span>

            <h3>
              Open to work
            </h3>
          </div>

          <div className="contact-live-status">
            <span></span>
            Available
          </div>

        </div>

        <div className="availability-grid">

          <div className="availability-card">
            <div className="availability-icon">
              <FaBriefcase />
            </div>

            <div>
              <h4>Full-Time</h4>
              <p>Open to permanent roles</p>
            </div>
          </div>

          <div className="availability-card">
            <div className="availability-icon">
              <FaLaptopCode />
            </div>

            <div>
              <h4>Software Engineering</h4>
              <p>Frontend, backend, and full-stack</p>
            </div>
          </div>

          <div className="availability-card">
            <div className="availability-icon">
              <FaBug />
            </div>

            <div>
              <h4>QA Engineering</h4>
              <p>Manual and automation testing</p>
            </div>
          </div>

          <div className="availability-card">
            <div className="availability-icon">
              <FaGlobe />
            </div>

            <div>
              <h4>Remote Work</h4>
              <p>Available worldwide</p>
            </div>
          </div>

        </div>

        <div className="contact-separator">
          <span>CONTACT CHANNELS</span>
        </div>

        <div className="contact-links-grid">

          <a
            href="mailto:ghalebshhab12@icloud.com"
            className="contact-channel"
            aria-label="Send an email to Ghaleb Shhab"
          >
            <div className="contact-channel-icon">
              <FaEnvelope />
            </div>

            <div className="contact-channel-content">
              <span>Email</span>
              <strong>ghalebshhab12@icloud.com</strong>
            </div>

            <FaArrowUpRightFromSquare className="contact-channel-arrow" />
          </a>

         <a
  href="https://wa.me/962792600109?text=Hi%20Ghaleb!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20potential%20opportunities%20with%20you."
  target="_blank"
  rel="noopener noreferrer"
  className="contact-channel"
  aria-label="Contact Ghaleb Shhab on WhatsApp"
>
  <div className="contact-channel-icon">
    <FaWhatsapp />
  </div>

  <div className="contact-channel-content">
    <span>WhatsApp</span>
    <strong>+962 79 260 0109</strong>
  </div>

  <FaArrowUpRightFromSquare className="contact-channel-arrow" />
</a>

          <a
            href="https://github.com/ghalebshhab"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel"
            aria-label="Open Ghaleb Shhab's GitHub profile"
          >
            <div className="contact-channel-icon">
              <FaGithub />
            </div>

            <div className="contact-channel-content">
              <span>GitHub</span>
              <strong>github.com/ghalebshhab</strong>
            </div>

            <FaArrowUpRightFromSquare className="contact-channel-arrow" />
          </a>

          <a
            href="https://www.linkedin.com/in/ghaleb-m-shhab-99518b2b2?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel"
            aria-label="Open Ghaleb Shhab's LinkedIn profile"
          >
            <div className="contact-channel-icon">
              <FaLinkedin />
            </div>

            <div className="contact-channel-content">
              <span>LinkedIn</span>
              <strong>Ghaleb Shhab</strong>
            </div>

            <FaArrowUpRightFromSquare className="contact-channel-arrow" />
          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="resume-panel glass-card reveal">

        <span className="contact-mini-label">
          RESUME CENTER
        </span>

        <h3>
          Choose the CV that matches your opportunity
        </h3>

        <p>
          I prepared two specialized resumes so recruiters can quickly review
          the experience most relevant to their role.
        </p>

        <div className="resume-option resume-option-software">

          <div className="resume-option-header">

            <div className="resume-option-icon">
              <FaLaptopCode />
            </div>

            <div>
              <span>Development Track</span>
              <h4>Software Engineer CV</h4>
            </div>

          </div>

          <p>
            Focused on React.js, Java, Spring Boot, REST APIs,
            database design, and full-stack development.
          </p>

          <div className="resume-tags">
            <span>React.js</span>
            <span>Spring Boot</span>
            <span>Java</span>
          </div>

          <a
            href="./Ghaleb_Shhab_CV_Final.pdf"
            download
            className="resume-download-btn"
          >
            <FaDownload />
            Download Software CV
          </a>

        </div>

        <div className="resume-option resume-option-qa">

          <div className="resume-option-header">

            <div className="resume-option-icon">
              <FaBug />
            </div>

            <div>
              <span>Quality Track</span>
              <h4>QA Engineer CV</h4>
            </div>

          </div>

          <p>
            Focused on manual testing, Selenium, TestNG,
            Postman, API automation, CI/CD, and test reporting.
          </p>

          <div className="resume-tags">
            <span>Selenium</span>
            <span>Postman</span>
            <span>TestNG</span>
          </div>

          <a
            href="./Ghaleb_Shhab_CV_v2.pdf"
            download
            className="resume-download-btn resume-download-btn-qa"
          >
            <FaDownload />
            Download QA CV
          </a>

        </div>

      </div>

    </div>

    <div className="contact-footer-bottom">

      <div>
        <span>Designed &amp; developed by</span>
        <strong>Ghaleb Shhab</strong>
      </div>

      <p>
        © 2026 Ghaleb Shhab. All rights reserved.
      </p>

      <div className="contact-footer-socials">

        <a
          href="mailto:ghalebshhab12@icloud.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://wa.me/962792600109?text=Hi%20Ghaleb!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20potential%20opportunities%20with%20you."
  target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://github.com/ghalebshhab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/ghaleb-m-shhab-99518b2b2?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/ghmsh04/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

      </div>

    </div>

  </div>

</footer>

        </div>
      )}
    </>
  );
}