interface HighlightCardProps {
  emoji: string;
  title: string;
  description: string;
}

export default function HighlightCard({
  emoji,
  title,
  description,
}: HighlightCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-900/70">
      <div className="mb-4 text-3xl">{emoji}</div>

      <h3 className="mb-2 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  );
}