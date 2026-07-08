import { recentProjects } from "@/lib/dashboard/data";
import { ProjectCard } from "@/components/dashboard/ui/project-card";
import { SectionHeader } from "@/components/dashboard/ui/section-header";

export function RecentProjects() {
  return (
    <section className="mb-10">
      <SectionHeader
        title="Recent Projects"
        description="Pick up where you left off"
        action={{ label: "All projects", href: "/projects" }}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {recentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
