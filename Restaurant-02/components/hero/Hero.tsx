import Image from "next/image";
import styles from "./Hero.module.css";

interface heroProps {
  days: string;
  hours: string;
  address1: string;
  address2: string;
  image: string;
}

export default function Hero({
  image,
  days,
  hours,
  address1,
  address2,
}: heroProps) {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroWrapper}>
        <Image
          className={styles.heroImage}
          src={image}
          height={1500}
          width={3500}
          alt="hero"
          priority
        />
        <div className={styles.overlay}></div>
        <div className={`caption color1 ${styles.textWrapper}`}>
          <div className="section">
            <div className="container">
              <p>
                <span>{days}</span>
                <br />
                <span>{hours}</span>
              </p>
              <p>
                <span>{address1}</span>
                <br />
                <span>{address2}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
