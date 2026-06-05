import { ProjectSection } from "../components/project-section";
import { SiteHeader } from "../components/site-header";

export default function ProjectPage() {
  return (
    <main>
      <SiteHeader />
      <ProjectSection compact />
    </main>
  );
}
