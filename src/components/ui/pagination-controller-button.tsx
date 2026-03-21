import { ReactNode } from "react";

import Link from "@/components/ui/link";

type PaginationControllerButtonProps = {
  children: ReactNode;
  href: string;
};

export default function PaginationControllerButton({
  children,
  href,
}: PaginationControllerButtonProps) {
  return (
    <Link href={href} className="flex items-center gap-1 p-2 text-sm">
      {children}
    </Link>
  );
}
