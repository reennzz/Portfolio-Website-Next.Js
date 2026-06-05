import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { ExperienceSection } from "./components/experience-section";
import { ProjectSection } from "./components/project-section";
import { SiteHeader } from "./components/site-header";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} />
            Computer Science Student
          </p>
          <h1>Darren Hansel Susanto Tan</h1>
          <p className="hero-text">
            A Computer Science student passionate about exploring AI/ML, Data
            Science, and data-driven digital product development.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="/project">
              View Projects
              <ArrowUpRight size={18} />
            </a>
            <a className="secondary-button" href="/contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Technology profile visual">
          <div className="terminal-window">
            <div className="terminal-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="terminal-body">
              <p>
                <span>const</span> focus = ["AI", "ML", "Data Science"];
              </p>
              <p>
                <span>while</span> (learning) build(projects);
              </p>
              <p>
                <span>return</span> impact.with(cleanCode);
              </p>
            </div>
          </div>
          <div className="orbit-card card-ai">AI</div>
          <div className="orbit-card card-data">DATA</div>
          <div className="orbit-card card-code">CODE</div>
        </div>
      </section>

      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
