import { experience } from "../../../content/site-data";
import { SectionHeading } from "../ui/SectionHeading";
import { TimelineItem } from "../ui/TimelineItem";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="mt-10 max-w-2xl">
        {experience.map((entry, index) => (
          <TimelineItem
            key={`${entry.company}-${entry.period}`}
            title={entry.role}
            subtitle={entry.company}
            period={entry.period}
            isLast={index === experience.length - 1}
          >
            <ul className="list-disc space-y-1.5 pl-4">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </div>
    </section>
  );
}
