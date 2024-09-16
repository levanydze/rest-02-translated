import { MetadataRoute } from "next";
import { companyDomain } from "../../Control/controls";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${companyDomain}/sitemap.xml`,
  };
}
