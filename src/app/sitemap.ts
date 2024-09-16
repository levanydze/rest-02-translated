import { companyDomain } from "@/Control/controls";
import { fireData } from "@/Control/fetchingData";
import { navItems } from "@/Control/navigation";

export default async function sitemap() {
  const slug = await fireData();

  if (!slug) {
    return null;
  }
  //MAPING PROJECTS
  //   const projectsArray = projects.map((item) => ({
  //     url: `${companyDomain}/projects/${item.id}`,
  //     lastModified: new Date().toISOString(),
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   }));

  // Mapping menu items to their URL objects
  const slugUrls = slug.flatMap((menus) =>
    menus.menuItems.map((item) => ({
      url: `${companyDomain}/menu/${item.id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  // Mapping nav items to their URL objects
  const navUrls = navItems.map((navItem) => ({
    url: `${companyDomain}${navItem.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: navItem.homePage ? "yearly" : "monthly",
    priority: navItem.homePage ? 1 : 0.6,
  }));

  const allUrls = [...slugUrls, ...navUrls];
  return allUrls;
}
