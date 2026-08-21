"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { founderConfig } from "@/config/founder";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/config/socials";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.7, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 right-[-12%] -z-10 h-[30rem] w-[30rem] rounded-full bg-brand-500/20 blur-3xl" />

      <div className="container grid items-center gap-14 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium shadow-card"
          >
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            {founderConfig.heroBadge}
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-heading text-display tracking-tight text-balance"
          >
            {founderConfig.name}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-3 font-heading text-2xl tracking-tight text-balance sm:text-3xl md:text-4xl"
          >
            Co-Founder &amp; CEO of{" "}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 bg-clip-text text-transparent">
              GetCollab
            </span>
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {founderConfig.tagline} {founderConfig.heroDescription}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href={siteConfig.links.getcollab}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Visit getcollab.in
              <Icons.externalLink className="h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold shadow-card transition-colors hover:border-brand-500 hover:text-brand-600"
            >
              Let&apos;s talk
            </Link>
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            {SocialLinks.filter((s) => s.name !== "GetCollab").map((item) => (
              <Link
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-brand-500 hover:text-brand-600"
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Icons.user className="h-4 w-4 text-brand-500" />
              Hyderabad, India
            </span>
          </motion.div>
        </div>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-400/50 via-brand-500/15 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-card-hover">
              <Image
                src="/profile-img.jpg"
                alt="Lokesh Jha - Co-Founder & CEO, GetCollab"
                width={800}
                height={1000}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute -right-3 top-10 animate-float-slow rounded-2xl border border-border bg-card px-4 py-3 shadow-card-hover sm:-right-6">
              <p className="font-heading text-2xl leading-none text-brand-600">
                2,000+
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Creators on platform
              </p>
            </div>

            <div className="absolute -left-3 bottom-12 animate-float-slow rounded-2xl border border-border bg-card px-4 py-3 shadow-card-hover [animation-delay:2.5s] sm:-left-6">
              <p className="font-heading text-2xl leading-none text-brand-600">
                300+
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Brands &amp; campaigns
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
