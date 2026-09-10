import Image from "next/image";
import type { Project } from "../../../content/site-data";

export function ProjectCard({ title, description, tech, githubUrl, liveUrl, image }: Project) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:bg-surface-hover">
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-background">
        {image ? (
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            sizes="(min-width: 640px) 420px, 85vw"
            className="object-cover"
          />
        ) : (
          <ProjectImagePlaceholder title={title} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-medium text-foreground">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-accent"
            >
              {item}
            </span>
          ))}
        </div>
        {(githubUrl || liveUrl) && (
          <div className="mt-5 flex gap-4 text-sm">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Code →
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Live →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Consistent, on-theme cover for repos that don't have a real screenshot to
// show — a monogram over a soft gradient, rather than an unrelated stock photo.
function ProjectImagePlaceholder({ title }: { title: string }) {
  const initials = title
    .replace(/[—–-].*$/, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, var(--surface-hover), var(--background))",
      }}
    >
      <span className="font-mono text-3xl font-semibold tracking-wide text-border">
        {initials}
      </span>
    </div>
  );
}
