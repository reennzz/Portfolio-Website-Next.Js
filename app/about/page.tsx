import { AboutSection } from "../components/about-section";
import { SiteHeader } from "../components/site-header";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <AboutSection compact />
    </main>
  );
}
