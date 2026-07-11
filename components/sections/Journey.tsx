import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

interface Props {
  id?: string;
}

export default function Journey({ id }: Props) {
  return (
    <section
      id={id}
      className="bg-slate-950 py-32"
    >
      <Container>
        <SectionTitle
          eyebrow="Section"
          title="Coming soon"
          description="This section is currently under development."
        />
      </Container>
    </section>
  );
}