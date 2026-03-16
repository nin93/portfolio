import { ReactNode } from "react";

export type FilledProps = {
  children: ReactNode;
  interactive?: boolean;
};

export default function Filled({ children, interactive }: FilledProps) {
  return (
    <span
      className={`${interactive ? "focus-within:bg-muted-background-dark hover:bg-muted-background-dark py-2" : "py-1"} bg-background-dark flex items-center gap-2 rounded-md px-2.5 text-xs transition-colors md:text-sm`}
    >
      {children}
    </span>
  );
}
