import { MetadataRoute } from "next";
import { companyDomain } from "../../Control/info";
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
