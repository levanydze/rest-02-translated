import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BurgenNav.module.css";
import { navItems } from "@/Control/navigation";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

interface BurgerNavProps {
  isNavOpen: boolean;
  navClose: () => void;
  navToggler: () => void;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BurgerNav({
  isNavOpen,
  navClose,
  navToggler,
}: BurgerNavProps) {
  const pathname = usePathname();
  return (
    <div className={styles.burgerWrapper}>
      <div className={`${styles.burgerMenu} `}>
        <ul
          className={`${isNavOpen ? styles.burgerActiveNav : ""} ${
            styles.burgerUl
          }`}
        >
          {navItems.map(({ title, url, homePage, button }, index) => (
            <li key={index} className={styles.burgerLi}>
              <Link
                key={index}
                className={`  ${styles.button} ${
                  button ? "button" : "burger-link"
                }
                  ${
                    pathname === url || (pathname.startsWith(url) && !homePage)
                      ? "active-burger-link"
                      : ""
                  } `}
                href={url}
                onClick={navClose}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {!isNavOpen ? (
        <div className={styles.openCloseIconDiv}>
          <GiHamburgerMenu
            className={styles.openCloseIcon}
            onClick={navToggler}
          />
        </div>
      ) : (
        <div className={styles.openCloseIconDiv}>
          <IoClose className={styles.openCloseIcon} onClick={navToggler} />
        </div>
      )}
    </div>
  );
}
