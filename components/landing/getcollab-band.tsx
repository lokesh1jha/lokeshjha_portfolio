import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { founderConfig } from "@/config/founder";
import { siteConfig } from "@/config/site";

export function GetCollabBand() {
  return (
    <section id="getcollab" className="container py-8 md:py-12">
      <AnimatedSection className="relative overflow-hidden rounded-[2.5rem] bg-foreground px-6 py-14 text-background md:px-14 md:py-20">
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" />

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
            {founderConfig.getcollab.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-display-sm tracking-tight text-balance">
            {founderConfig.getcollab.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-background/70 md:text-lg">
            {founderConfig.getcollab.description}
          </p>
        </div>

        <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {founderConfig.getcollab.pillars.map((pillar, i) => (
            <AnimatedSection
              key={pillar.title}
              delay={0.08 * i}
              className="rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm transition-colors hover:border-brand-500/40 hover:bg-background/10"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 font-heading text-base text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-4 font-heading text-lg tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-background/65">
                {pillar.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <div className="relative mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={siteConfig.links.getcollab}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-400 sm:w-auto"
          >
            {founderConfig.getcollab.cta}
            <Icons.externalLink className="h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-background/25 px-8 py-4 text-sm font-semibold transition-colors hover:bg-background/10 sm:w-auto"
          >
            Partnerships &amp; media
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
