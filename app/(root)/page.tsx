import { Metadata } from "next";
import Script from "next/script";

import { About } from "@/components/landing/about";
import { Background } from "@/components/landing/background";
import { ContactSection } from "@/components/landing/contact-section";
import { GetCollabBand } from "@/components/landing/getcollab-band";
import { Hero } from "@/components/landing/hero";
import { Journey } from "@/components/landing/journey";
import { Stats } from "@/components/landing/stats";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Lokesh Jha - Co-Founder & CEO, GetCollab",
  description:
    "Lokesh Jha - Co-Founder & CEO of GetCollab, a global creator marketplace connecting brands with creators. 2,000+ creators, 300+ brands.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Co-Founder & CEO, GetCollab",
    worksFor: {
      "@type": "Organization",
      name: "GetCollab",
      url: "https://www.getcollab.in",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.links.getcollab,
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
      siteConfig.links.github,
    ],
  };

  return (
    <>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Hero />
      <Stats />
      <About />
      <GetCollabBand />
      <Background />
      <Journey />
      <ContactSection />
    </>
  );
}
