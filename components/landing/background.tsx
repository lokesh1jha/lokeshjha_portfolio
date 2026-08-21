import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { founderConfig } from "@/config/founder";

export function Background() {
  return (
    <section id="background" className="container py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <AnimatedSection direction="right">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            {founderConfig.background.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-display-sm tracking-tight text-balance">
            {founderConfig.background.title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            {founderConfig.background.description}
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {founderConfig.background.companies.map((company, i) => (
              <AnimatedSection
                key={company.name}
                delay={0.08 * i}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand-700">
                  <Icons.work className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading tracking-tight">{company.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {company.role}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-card md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Skills that ship products
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {founderConfig.background.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-brand-500 hover:text-brand-600"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <div className="rounded-2xl border border-brand-500/30 bg-accent/60 p-5 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Why it matters:
                </span>{" "}
                GetCollab is led by someone who can build it - every product
                decision is grounded in real engineering experience.
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
