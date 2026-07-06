import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alphaclubuae.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/member", "/partner-dashboard", "/auth", "/forgot-password", "/verify-reset-otp"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
