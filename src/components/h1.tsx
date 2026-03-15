import { ReactNode } from "react";

export type H1Props = {
  className?: string;
  children: ReactNode;
};

export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={`${className} text-strong-foreground-dark font-mono text-3xl font-semibold lg:text-4xl`}
    >
      {children}
    </h1>
  );
}
