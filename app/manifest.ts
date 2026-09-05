import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MDCAT Pakistan — Board & MDCAT Preparation",
    short_name: "MDCAT PK",
    description:
      "Personalized MDCAT and FSc board exam preparation for Pakistani students — Biology, Chemistry and Physics MCQs across Federal, Punjab, Sindh, KPK and Balochistan boards.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    categories: ["education", "productivity"],
    lang: "en",
    dir: "ltr",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      {
        name: "Practice MCQs",
        url: "/practice",
        description: "Start a quick practice session",
      },
      {
        name: "Take an exam",
        url: "/exams",
        description: "Start a timed MDCAT-style exam",
      },
    ],
  };
}