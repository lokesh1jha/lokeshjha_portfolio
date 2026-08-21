import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { founderConfig } from "@/config/founder";
import { cn } from "@/lib/utils";

export function Journey() {
  return (
    <section id="journey" className="bg-muted/60 py-16 md:py-24">
      <div className="container">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            {founderConfig.journey.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-display-sm tracking-tight text-balance">
            {founderConfig.journey.title}
          </h2>
        </AnimatedSection>

        <div className="relative mx-auto mt-14 max-w-2xl">
          <div className="absolute bottom-4 left-[11px] top-4 w-px bg-border md:left-[13px]" />
          <div className="flex flex-col gap-8">
            {founderConfig.journey.steps.map((step, i) => (
              <AnimatedSection
                key={step.title}
                delay={0.06 * i}
                className="relative pl-10 md:pl-14"
              >
                <span
                  className={cn(
                    "absolute left-0 top-2 flex h-[23px] w-[23px] items-center justify-center rounded-full border-2 md:h-[27px] md:w-[27px]",
                    step.current
                      ? "border-brand-500 bg-brand-500"
                      : "border-border bg-card"
                  )}
                >
                  {step.current && (
                    <span className="h-2 w-2 rounded-full bg-white" />
                  )}
                </span>
                <div
                  className={cn(
                    "rounded-2xl border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover",
                    step.current
                      ? "border-brand-500/50"
                      : "border-border"
                  )}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                      {step.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Icons.user className="h-3.5 w-3.5" />
                      {step.location}
                    </span>
                  </div>
                  <h3 className="mt-2 font-heading text-xl tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
