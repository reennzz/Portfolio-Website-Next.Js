import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../lib/portfolio";

export function ProjectSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "section page-section" : "section project-section"} id="project">
      <div className="section-heading">
        <p className="eyebrow">Project</p>
        <h2>Selected projects that represent my learning journey.</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div>
              <div className="project-topline">
                <Github size={22} />
                <a href={project.href} aria-label={`Open ${project.title}`}>
                  <ArrowUpRight size={20} />
                </a>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="stack-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
