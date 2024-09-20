import Image from "next/image";
import styles from "./ComponentThree.module.css";

interface ComponentThreeProps {
  title: string;
  text: string;
  image: string;
}

export default function ComponentThree({
  image,
  title,
  text,
}: ComponentThreeProps) {
  return (
    <section className="section section-dark no-padding-x no-padding-y">
      <div className="">
        <div className={` ${styles.componentThreeWrapper}`}>
          <div>
            <Image
              src={image}
              height={1000}
              width={1000}
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
