interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-16 max-w-2xl">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-400">
        {eyebrow}
      </p>

      <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="text-lg leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}