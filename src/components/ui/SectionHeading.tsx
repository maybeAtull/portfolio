type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

// Shared "small label + big title" heading used at the top of every
// section, so headings stay visually consistent across the page.
export function SectionHeading({ eyebrow, title, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
