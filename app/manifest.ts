import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jocelyn Pang | Digital Commerce Strategist",
    short_name: "Jocelyn Pang",
    description:
      "Digital commerce strategist-operator building durable e-commerce growth pillars for FMCG brands across Southeast Asia.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F0E8",
    theme_color: "#5C4033",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
