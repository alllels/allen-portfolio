import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TimelineCard from "@/components/ui/TimelineCard";

import { journey } from "@/data/journey";

interface JourneyProps {
  id?: string;
}

export default function Journey({ id }: JourneyProps) {
  return (
    <section
      id={id}
      className="bg-slate-950 py-32"
    >
      <Container>
        <SectionTitle
          eyebrow={journey.eyebrow}
          title={journey.title}
          description={journey.description}
        />

        <div className="space-y-8">
          {journey.timeline.map((item) => (
            <TimelineCard
              key={item.year}
              year={item.year}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}