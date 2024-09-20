import Image from "next/image";
import styles from "./ComponentFive.module.css";

interface ComponentFiveProps {
  image: string;
  title: string;
  alt1: string;
  alt2: string;
  alt3: string;
  alt4: string;
}

export default function ComponentFive({alt1,alt2,alt3,alt4, title, image }: ComponentFiveProps) {
  return (
    <section className="section no-padding-x no-padding-y bg-color1">
      <div className={styles.wrapper}>
        <h5 className="heading4 color4">{title}</h5>
        <h3 className="heading2 color4">Instagram</h3>
        <div className={styles.imageDiv}>
          <Image src={image} alt="" width={500} height={500}></Image>
          <Image src={image} alt="" width={500} height={500}></Image>
          <Image src={image} alt="" width={500} height={500}></Image>
          <Image src={image} alt="" width={500} height={500}></Image>
        </div>
      </div>
    </section>
  );
}
