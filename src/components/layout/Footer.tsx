import { personal } from "../../../content/site-data";
import { SocialIcons } from "../ui/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {personal.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}
