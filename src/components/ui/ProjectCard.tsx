import type { Project } from "../../../content/site-data";

export function ProjectCard({ title, description, tech, githubUrl, liveUrl }: Project) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:bg-surface-hover">
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
  );
}
