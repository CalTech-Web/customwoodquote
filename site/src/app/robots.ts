import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/dashboard",
        "/settings",
        "/projects/",
        "/onboarding",
        "/api/",
      ],
    },
    sitemap: "https://customwoodquote.com/sitemap.xml",
  };
}
