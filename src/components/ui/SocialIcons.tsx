import { socials } from "../../../content/site-data";

type SocialIconsProps = {
  className?: string;
  iconClassName?: string;
};

// Reused by both the Navbar (icon-only, horizontal) and the Footer
// (icon + label, can be laid out horizontally or vertically by the caller
// via `className`).
export function SocialIcons({ className = "", iconClassName = "" }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={socials.github}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="GitHub profile"
        className={`text-muted transition-colors hover:text-accent ${iconClassName}`}
      >
        <GitHubIcon />
      </a>
      <a
        href={socials.linkedin}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn profile"
        className={`text-muted transition-colors hover:text-accent ${iconClassName}`}
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.02 3.26 9.28 7.78 10.79.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.17.69-3.84-1.35-3.84-1.35-.52-1.31-1.27-1.66-1.27-1.66-1.03-.71.08-.69.08-.69 1.14.08 1.75 1.17 1.75 1.17 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17a10.8 10.8 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.66 5.34-5.2 5.62.41.36.77 1.06.77 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}
