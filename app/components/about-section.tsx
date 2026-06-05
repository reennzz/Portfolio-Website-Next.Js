import { interests } from "../lib/portfolio";

export function AboutSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "section page-section" : "section about-section"} id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Learning, experimenting, and building useful solutions.</h2>
      </div>
      <div className="about-grid">
        <p className="about-copy">
          I am a Computer Science student with a strong interest in Artificial
          Intelligence, Machine Learning, and Data Science. I enjoy learning how
          data can be used to recognize patterns, make predictions, and create
          systems that help people work more effectively.
        </p>
        <div className="interest-grid">
          {interests.map((interest) => {
            const Icon = interest.icon;
            return (
              <article className="interest-card" key={interest.title}>
                <Icon size={24} />
                <h3>{interest.title}</h3>
                <p>{interest.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
