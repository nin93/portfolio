import { ReactNode } from "react";

import LinkNext from "next/link";

export type LinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  external?: boolean;
};

export default function Link({
  children,
  href,
  className,
  icon,
  external,
}: LinkProps) {
  return (
    <LinkNext
      href={href}
      className={`${className} focus-within:fill-foreground-dark fill-muted-foreground-dark hover:fill-foreground-dark focus-within:text-foreground-dark text-muted-foreground-dark hover:text-foreground-dark transition-colors`}
      target={external ? "_blank" : "_self"}
    >
      {children}
      {icon}
    </LinkNext>
  );
}
