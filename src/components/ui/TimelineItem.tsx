type TimelineItemProps = {
  title: string;
  subtitle: string;
  period: string;
  children?: React.ReactNode;
  isLast?: boolean;
};

// Used by both Education and Experience — a vertical line with a dot per
// entry, title/subtitle/period header, and optional detail content.
export function TimelineItem({ title, subtitle, period, children, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
      {!isLast && <span className="absolute left-[4.5px] top-4 h-full w-px bg-border" />}
      <div className="pb-10">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-medium text-foreground">{title}</h3>
          <span className="font-mono text-xs text-muted">{period}</span>
        </div>
        <p className="mt-0.5 text-sm text-accent">{subtitle}</p>
        {children && <div className="mt-3 text-sm leading-relaxed text-muted">{children}</div>}
      </div>
    </div>
  );
}
