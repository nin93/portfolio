"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

const PATHS = [
  {
    href: "/",
    label: ".me",
  },
  {
    href: "/projects",
    label: ".projects",
  },
  {
    href: "/photography",
    label: ".photography",
  },
];

export default function Header() {
  const currentPath = usePathname();

  return (
    <header
      className={`bg-deep-black sticky top-0 z-10 m-0 flex w-full justify-between py-6 text-sm md:text-base`}
    >
      <nav className="flex gap-x-6 lg:gap-x-10">
        {PATHS.map(({ href, label }) => {
          const isActive = href === currentPath;

          return (
            <Link
              href={href}
              key={`nav_${label}`}
              className={`hover:text-foreground-dark transition-colors ${isActive ? "text-foreground-dark" : "text-muted-foreground-dark"}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* <ThemeToggler /> */}
    </header>
  );
}
