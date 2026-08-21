import { AnimatedSection } from "@/components/common/animated-section";
import { founderConfig } from "@/config/founder";
import { cn } from "@/lib/utils";

export function Stats() {
  return (
    <section className="container pb-16 md:pb-24">
      <AnimatedSection className="grid grid-cols-2 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
        {founderConfig.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "flex flex-col items-center justify-center gap-2 py-10 text-center md:py-14",
              i > 0 && "border-l border-border"
            )}
          >
            <span className="bg-gradient-to-b from-brand-600 to-brand-400 bg-clip-text font-heading text-5xl tracking-tight text-transparent md:text-6xl">
              {stat.value}
            </span>
            <span className="px-4 text-sm font-medium text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </AnimatedSection>
    </section>
  );
}
