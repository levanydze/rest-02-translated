import { companyDomain } from "../../Control/info";
import { navItems } from "../../Control/info";
import { fetchData } from "./levanidze/projects/DataFetch";

export default async function sitemap() {
  const projects = await fetchData();

  // if (!slug) {
  // return null;
  // }

  // Mapping menu items to their URL objects
  // const slugUrls = slug.flatMap((menus) =>
  //   menus.menuItems.map((item) => ({
  //     //MUST FIX
  //     url: `${companyDomain}/menu/${item.id}`,
  //     lastModified: new Date().toISOString(),
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   }))
  // );
  const projectsArray = projects.map((item) => ({
    url: `${companyDomain}/projects/${item.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Mapping nav items to their URL objects
  const navUrls = navItems.map((navItem) => ({
    url: `${companyDomain}${navItem.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: navItem.homePage ? "yearly" : "monthly",
    priority: navItem.homePage ? 1 : 0.6,
  }));

  const allUrls = [...projectsArray, ...navUrls];

  return allUrls;
}
