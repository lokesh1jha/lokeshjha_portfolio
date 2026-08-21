import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lokesh Jha - Co-Founder & CEO, GetCollab",
    short_name: "Lokesh Jha",
    description:
      "Lokesh Jha - Co-Founder & CEO of GetCollab, a global creator marketplace connecting brands with creators.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f6f2",
    theme_color: "#27beff",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    categories: ["portfolio", "business", "creator", "startup"],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
