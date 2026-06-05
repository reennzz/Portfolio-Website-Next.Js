import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";
import { contactLinks } from "../lib/portfolio";

const iconMap = {
  instagram: Instagram,
  linkedin: Linkedin,
  email: Mail,
};

export function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "section page-section contact-section" : "section contact-section"} id="contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s connect for projects, collaboration, or tech discussions.</h2>
      </div>
      <div className="contact-grid">
        {contactLinks.map((contact) => {
          const Icon = iconMap[contact.type as keyof typeof iconMap];
          return (
            <a className="contact-link" href={contact.href} key={contact.label}>
              <Icon size={22} />
              <span>{contact.label}</span>
              <ArrowUpRight size={18} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
