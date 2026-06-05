import { BriefcaseBusiness, CalendarDays, CheckCircle2 } from "lucide-react";
import { experiences } from "../lib/portfolio";

export function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Professional experience where I applied AI and backend development.</h2>
      </div>
      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.role}>
            <div className="experience-mark" aria-hidden="true">
              <BriefcaseBusiness size={26} />
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3>{experience.role}</h3>
                  <p className="experience-company">
                    {experience.company} - {experience.type}
                  </p>
                </div>
                <p className="experience-period">
                  <CalendarDays size={17} />
                  {experience.period} - {experience.duration}
                </p>
              </div>
              <ul className="experience-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>
                    <CheckCircle2 size={17} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="stack-list experience-skills">
                {experience.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
