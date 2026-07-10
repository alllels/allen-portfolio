import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 backdrop-blur">
      {children}
    </span>
  );
}