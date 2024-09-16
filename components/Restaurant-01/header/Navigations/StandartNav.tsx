import Link from "next/link";
// import Logo from "../../../../components/miniComponents/Logo/Logo";
import styles from "./StandartNav.module.css";
import { navItems } from "../../../../Control/navigation";
import { usePathname } from "next/navigation";

export default function StandartNav() {
  const pathname = usePathname();
  return (
    <nav className={styles.mainNavWrap}>
      <ul className={styles.listWrap}>
        {navItems.map(({ title, homePage, url, button }) => (
          <li key={url}>
            <Link
              key={url}
              className={` ${
                pathname === url || (pathname.startsWith(url) && !homePage)
                  ? "active-link"
                  : ""
              } ${button ? "button" : "link"}`}
              href={url}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
