"use client";

import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";

import Link from "../link";

export type PaginationProps = {
  className?: string;
  totalPages: number;
  currentPage: number;
};

type PaginationButtonProps = {
  href: string;
};

function PaginationPrevious({ href }: PaginationButtonProps) {
  return (
    <Link href={href} className="flex items-center gap-1 text-sm">
      <ChevronLeft className="w-3 md:w-4" />
      Prev
    </Link>
  );
}

function PaginationNext({ href }: PaginationButtonProps) {
  return (
    <Link href={href} className="flex items-center gap-1 text-sm">
      Next
      <ChevronRight className="w-3 md:w-4" />
    </Link>
  );
}

export default function Pagination({
  className,
  currentPage,
  totalPages,
}: PaginationProps) {
  const hasLeftEllipsis = currentPage > 2;
  const hasRightEllipsis = currentPage < totalPages - 1;

  const leftPage = currentPage > 1 && currentPage - 1;
  const rightPage = currentPage < totalPages && currentPage + 1;

  return (
    <div
      className={`${className} flex w-full items-center justify-center gap-6 md:gap-12`}
    >
      <PaginationPrevious href={`?page=${Math.max(1, currentPage - 1)}`} />

      <div className="flex items-center gap-6 md:gap-8">
        {hasLeftEllipsis ? (
          <Ellipsis size={10} className="text-muted-foreground-dark" />
        ) : (
          <></>
        )}

        {leftPage ? (
          <Link href={`?page=${leftPage}`} className="text-sm">
            {leftPage}
          </Link>
        ) : (
          <></>
        )}

        <span className="text-strong-foreground-dark text-sm">
          {currentPage}
        </span>

        {rightPage ? (
          <Link href={`?page=${rightPage}`} className="text-sm">
            {rightPage}
          </Link>
        ) : (
          <></>
        )}

        {hasRightEllipsis ? (
          <Ellipsis size={10} className="text-muted-foreground-dark" />
        ) : (
          <></>
        )}
      </div>

      <PaginationNext href={`?page=${Math.min(currentPage + 1, totalPages)}`} />
    </div>
  );
}
