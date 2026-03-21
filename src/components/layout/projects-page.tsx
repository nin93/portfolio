"use client";

import usePage from "@/hooks/use-page";

import Project from "@/components/models/project";
import PaginationController from "@/components/ui/pagination-controller";

import { PROJECTS } from "@/app/projects/constants/projects";

export type ProjectPageProps = {
  perPage: number;
};

export default function ProjectsPage({ perPage }: ProjectPageProps) {
  const totalPages = Math.ceil(PROJECTS.length / perPage);
  const currentPage = usePage(totalPages);
  const offset = perPage * (currentPage - 1);

  const photographs = PROJECTS.slice(offset, offset + perPage);

  return (
    <>
      <div className="space-y-8">
        {photographs.map((project, i) => (
          <Project
            key={`project_${i}`}
            className="border-muted-background-dark pb-8 not-last:border-b"
            {...project}
          />
        ))}
      </div>

      <PaginationController currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
