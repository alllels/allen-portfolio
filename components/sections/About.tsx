import Image from "next/image";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import HighlightCard from "@/components/ui/HighlightCard";

import { about } from "@/data/about";

interface AboutProps {
  id?: string;
}

export default function About({ id }: AboutProps) {
  return (
    <section
      id={id}
      className="bg-slate-950 py-32"
    >
      <Container>
        <SectionTitle
          eyebrow={about.eyebrow}
          title={about.title}
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-8 text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
              {/* Пока используем заглушку */}
              <div className="flex h-full items-center justify-center text-slate-500">
                Your photo
              </div>

              {/*
              Когда будет фотография, заменим на:

              <Image
                src="/images/profile.jpg"
                alt="Allen"
                fill
                className="object-cover"
              />
              */}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {about.highlights.map((item) => (
            <HighlightCard
              key={item.title}
              emoji={item.emoji}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}