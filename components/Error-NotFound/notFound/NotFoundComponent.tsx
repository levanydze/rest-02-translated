import Link from "next/link";
import styles from "./NotFoundComponent.module.css";

function NotFoundComponent() {
  return (
    <div>
      <div className={styles.notFound}>
        <h6 className="heading4">404</h6>
        <h1 className="heading6">
          Sorry, the page you are looking for was not found!
        </h1>
        <Link className="button" href="../">
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundComponent;
