"use client";

import usePage from "@/hooks/use-page";

import Photograph from "@/components/models/photograph";
import PaginationController from "@/components/ui/pagination-controller";

import { PHOTOGRAPHS } from "@/app/photography/constants/photographs";

export type PhotographListProps = {
  perPage: number;
};

export default function PhotographsPage({ perPage }: PhotographListProps) {
  const totalPages = Math.ceil(PHOTOGRAPHS.length / perPage);
  const currentPage = usePage(totalPages);
  const offset = perPage * (currentPage - 1);

  const photographs = PHOTOGRAPHS.slice(offset, offset + perPage);

  return (
    <>
      <div className="space-y-8">
        {photographs.map((photograph, i) => (
          <Photograph
            key={`project_${i}`}
            className="border-muted-background-dark pb-8 not-last:border-b"
            {...photograph}
          />
        ))}
      </div>

      <PaginationController currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
