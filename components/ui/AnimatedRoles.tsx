"use client";

import { useEffect, useState } from "react";

interface AnimatedRolesProps {
  roles: string[];
}

export default function AnimatedRoles({
  roles,
}: AnimatedRolesProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <p className="mb-8 h-8 text-xl font-medium text-sky-400 transition-all duration-500">
      {roles[index]}
    </p>
  );
}