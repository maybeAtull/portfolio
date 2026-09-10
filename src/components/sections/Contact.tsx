import { personal } from "../../../content/site-data";
import { SectionHeading } from "../ui/SectionHeading";
import { SocialIcons } from "../ui/SocialIcons";

export function Contact() {
  const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    "Let's connect"
  )}`;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Contact" title="Let's talk" align="center" />

      <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-6 text-center">
        <p className="text-muted">
          Open to data engineering roles and interesting problems. The fastest way to reach me is email.
        </p>
        <a
          href={mailtoHref}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {personal.email}
        </a>
        <SocialIcons />
      </div>
    </section>
  );
}
