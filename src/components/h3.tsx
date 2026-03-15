import { ReactNode } from "react";

export type H3Props = {
  children: ReactNode;
};

export default function H3({ children }: H3Props) {
  return (
    <h3 className="text-strong-foreground-dark font-mono text-lg font-semibold lg:text-xl">
      {children}
    </h3>
  );
}
