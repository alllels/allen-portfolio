import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-400">
      {children}
    </button>
  );
}