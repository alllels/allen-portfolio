interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
}

export default function TimelineCard({
  year,
  title,
  description,
}: TimelineCardProps) {
  return (
    <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition-all duration-300 hover:border-sky-400/40 hover:bg-slate-900/70">
      <span className="mb-4 inline-block rounded-full bg-sky-500/10 px-4 py-1 text-sm font-semibold text-sky-400">
        {year}
      </span>

      <h3 className="mb-4 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="leading-7 text-slate-400">
        {description}
      </p>
    </div>
  );
}