import { education } from "../../../content/site-data";
import { SectionHeading } from "../ui/SectionHeading";
import { TimelineItem } from "../ui/TimelineItem";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <div className="mt-10 max-w-2xl">
        {education.map((entry, index) => (
          <TimelineItem
            key={entry.institution}
            title={entry.degree}
            subtitle={entry.institution}
            period={entry.period}
            isLast={index === education.length - 1}
          >
            {entry.notes}
          </TimelineItem>
        ))}
      </div>
    </section>
  );
}
