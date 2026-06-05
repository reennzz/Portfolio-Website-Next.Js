import { ContactSection } from "../components/contact-section";
import { SiteHeader } from "../components/site-header";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <ContactSection compact />
    </main>
  );
}
