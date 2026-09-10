import { personal } from "../../../content/site-data";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="About" title="A bit about my work" />

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <div className="space-y-4 text-base leading-relaxed text-muted md:col-span-2">
          {personal.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className="space-y-5 rounded-xl border border-border bg-surface p-6">
          {personal.quickFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm text-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
