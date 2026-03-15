"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

export type HeaderProps = {
  className?: string;
};

const PATHS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/photography",
    label: "Photography",
  },
];

export default function Header(props: HeaderProps) {
  const currentPath = usePathname();

  return (
    <header
      className={`m-0 flex justify-between py-6 text-sm md:text-base ${props.className}`}
    >
      <nav className="flex gap-x-6 lg:gap-x-10">
        {PATHS.map(({ href, label }) => {
          const isActive = href === currentPath;

          return (
            <Link
              href={href}
              key={`nav_${label}`}
              className={`focus-within:text-foreground-dark hover:text-foreground-dark transition-colors ${isActive ? "text-foreground-dark" : "text-muted-foreground-dark"}`}
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
