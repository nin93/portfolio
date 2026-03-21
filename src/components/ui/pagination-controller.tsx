import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";

import Link from "@/components/ui/link";
import PaginationControllerButton from "@/components/ui/pagination-controller-button";

export type PaginationControllerProps = {
  className?: string;
  totalPages: number;
  currentPage: number;
};

export default function PaginationController({
  className,
  currentPage,
  totalPages,
}: PaginationControllerProps) {
  const hasLeftEllipsis = currentPage > 2;
  const hasRightEllipsis = currentPage < totalPages - 1;

  const leftPage = currentPage > 1 && currentPage - 1;
  const rightPage = currentPage < totalPages && currentPage + 1;

  return (
    <div
      className={`${className} flex w-full items-center justify-center gap-4 md:gap-8`}
    >
      <PaginationControllerButton
        href={`?page=${Math.max(1, currentPage - 1)}`}
      >
        <ChevronLeft className="w-3 md:w-4" />
        Prev
      </PaginationControllerButton>

      <div className="flex items-center gap-2 md:gap-4">
        {hasLeftEllipsis ? (
          <Link href={`?page=1`} className="p-2 text-sm">
            <Ellipsis size={10} />
          </Link>
        ) : (
          <></>
        )}

        {leftPage ? (
          <Link href={`?page=${leftPage}`} className="p-2 text-sm">
            {leftPage}
          </Link>
        ) : (
          <></>
        )}

        <span className="text-strong-foreground-dark p-2 text-sm">
          {currentPage}
        </span>

        {rightPage ? (
          <Link href={`?page=${rightPage}`} className="p-2 text-sm">
            {rightPage}
          </Link>
        ) : (
          <></>
        )}

        {hasRightEllipsis ? (
          <Link href={`?page=${totalPages}`} className="p-2 text-sm">
            <Ellipsis size={10} />
          </Link>
        ) : (
          <></>
        )}
      </div>

      <PaginationControllerButton
        href={`?page=${Math.min(currentPage + 1, totalPages)}`}
      >
        Next
        <ChevronRight className="w-3 md:w-4" />
      </PaginationControllerButton>
    </div>
  );
}
