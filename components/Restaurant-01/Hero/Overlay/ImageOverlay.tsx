import styles from "./ImageOverlay.module.css";
import { FiPhone } from "react-icons/fi";
import SocialMedia from "./SocialMedia/SocialMedia";
import Link from "next/link";
import { companyName } from "@/Control/controls";
import { phoneNumber } from "@/Control/info";

export default function ImageOverlay() {
  return (
    <section className="section no-padding">
      <div className="container">
        <div className={styles.overlayWrapper}>
          <div className={styles.empty}></div>
          <div className={styles.middle}>
            <h2 className="heading1 color1 font3">Welcome to</h2>
            <h1 className="heading3 font2">
              The Best Georgian Restaurant In Stockholm
            </h1>
            <h2 className="heading2 font2">{companyName}</h2>
            <div className="twoLines"></div>
            <p className="paragraph white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              optio earum reiciendis placeat quis iusto doloremque facere eaque.
              Deleniti corrupti fugiat nesciunt dolore officia aperiam ipsam
              accusantium, debitis nisi unde?
            </p>
            <div className={styles.buttons}>
              <Link className="button" href="./menu">
                View Menu
              </Link>
              <Link href="/reservation" className="button button-reverse">
                Book a Table
              </Link>
            </div>
          </div>
          <div className={styles.bottom}>
            <Link
              className={` ${styles.phoneNumber}`}
              href={`tel:${phoneNumber}`}
            >
              <FiPhone className={`${styles.phoneIcon}`} />
              {phoneNumber}
            </Link>
            <div className={styles.icons}>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
