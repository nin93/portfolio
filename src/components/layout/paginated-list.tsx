import { ReactNode } from "react";

import H2 from "@/components/typography/h2";
import Pagination from "@/components/ui/pagination";

export type PaginatedListProps = {
  title: string;
  currentPage: number;
  totalPages: number;
  children: ReactNode;
};

export default function PaginatedList({
  title,
  children,
  currentPage,
  totalPages,
}: PaginatedListProps) {
  return (
    <>
      <div className="mt-12 flex h-full flex-col justify-between space-y-8">
        <div className="space-y-8">
          <H2>{title}</H2>

          {children}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
}
