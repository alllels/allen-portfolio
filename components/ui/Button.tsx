import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
      rounded-full
      bg-sky-500
      px-7
      py-3
      font-semibold
      text-slate-950
      transition-all
      duration-300
      hover:scale-105
      hover:bg-sky-400
      active:scale-95
    "
    >
      {children}
    </button>
  );
}