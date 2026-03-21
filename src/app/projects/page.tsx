import { Suspense } from "react";

import ProjectsPage from "@/components/layout/projects-page";
import H2 from "@/components/typography/h2";

const PROJECTS_PER_PAGE = 2;

export default function Projects() {
  return (
    <div className="mt-12 flex h-full flex-col justify-between space-y-8">
      <div className="space-y-8">
        <H2>Projects</H2>

        <Suspense>
          <ProjectsPage perPage={PROJECTS_PER_PAGE} />
        </Suspense>
      </div>
    </div>
  );
}
