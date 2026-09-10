import { personal } from "../../../content/site-data";
import { ResumeButton } from "../layout/ResumeButton";
import { SocialIcons } from "../ui/SocialIcons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden"
    >
      {/* Background: dark gradient echoing the reference's teal/amber mood,
          plus a faint grid to nod at "structured data" without a photo. */}
      <div className="absolute inset-0 -z-10 grid-texture" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 15% 20%, color-mix(in srgb, var(--accent) 18%, transparent), transparent), radial-gradient(50% 45% at 85% 85%, color-mix(in srgb, var(--accent-warm) 14%, transparent), transparent)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="font-mono text-sm font-light tracking-wide text-muted">
          Hi, I&apos;m {personal.name.split(" ")[0]} — a
        </p>
        <h1 className="mt-2 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {personal.role}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {personal.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            View Projects
          </a>
          <ResumeButton className="px-5 py-2.5" />
        </div>
      </div>

      {/* Vertical social rail — desktop only, echoes the reference's
          right-edge social stack. */}
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
        <SocialIcons className="flex-col gap-5" />
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent sm:flex"
      >
        Scroll
        <span className="h-8 w-px animate-bounce bg-current" />
      </a>
    </section>
  );
}
