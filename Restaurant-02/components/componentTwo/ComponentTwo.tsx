import Image from "next/image";
import styles from "./ComponentTwo.module.css";

interface componentTwoProps {
  title: string;
  text: string;
  image: string;
}

export default function ComponentTwo({
  image,
  title,
  text,
}: componentTwoProps) {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className={styles.componentTwoWrapper}>
          <div>
            <Image
              className="shadow-black-l"
              src={image}
              height={800}
              width={800}
              alt="not sure yet"
            ></Image>
          </div>
          <div className={styles.textWrapper}>
            <h2 className="heading2 color2">{title}</h2>
            <p className="paragraph white">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
