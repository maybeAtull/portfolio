import { personal } from "../../../content/site-data";

type ResumeButtonProps = {
  className?: string;
};

// A plain <a download> is all that's needed to trigger a direct file
// download in the browser — no JS or library required. The `download`
// attribute value becomes the saved file's name.
export function ResumeButton({ className = "" }: ResumeButtonProps) {
  return (
    <a
      href="/resume.pdf"
      download={personal.resumeFileName}
      className={`inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 ${className}`}
    >
      Resume
    </a>
  );
}
