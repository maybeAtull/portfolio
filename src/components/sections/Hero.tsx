import Image from "next/image";
import { personal } from "../../../content/site-data";
import { ResumeButton } from "../layout/ResumeButton";
import { SocialIcons } from "../ui/SocialIcons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* Foggy treeline photo — the whole section's backdrop. */}
      <Image
        src="/hero.jpg"
        alt="A misty forest treeline fading into fog"
        fill
        priority
        className="absolute inset-0 -z-20 object-cover"
      />

      {/* Dark scrim so text stays legible over both the bright fog and
          the near-black treeline. */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,7,8,0.7) 0%, rgba(6,7,8,0.45) 45%, rgba(6,7,8,0.8) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-24">
        <p className="font-mono text-sm font-light tracking-wide text-muted">
          Hi, I&apos;m {personal.name.split(" ")[0]} — a
        </p>
        <h1 className="mt-2 text-6xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl">
          {personal.role}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {personal.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            View Projects
          </a>
          <ResumeButton className="px-5 py-2.5" />
        </div>
      </div>

      {/* Vertical social rail — desktop only. */}
      <div className="absolute right-8 top-1/3 z-10 hidden -translate-y-1/2 lg:block">
        <SocialIcons className="flex-col gap-5" />
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent sm:flex"
      >
        Scroll
        <span className="h-8 w-px animate-bounce bg-current" />
      </a>
    </section>
  );
}
