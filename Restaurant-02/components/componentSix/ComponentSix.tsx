import Image from "next/image";
import styles from "./ComponentSix.module.css";
import images from "@/Restaurant-02/json/images.json";
import ReservationContactForm from "@/components/ReservationContactForm/ReservationContactForm";
import { contactFormProps } from "@/components/ReservationContactForm/ReservationContactForm";

interface ComponentFourProps {
  title: string;
}

type componentProps = contactFormProps & ComponentFourProps;

export default function ComponentFour({ language, title }: componentProps) {
  const { hero } = images;
  return (
    <section className="section section-light">
      <div className="container">
        <div className={styles.threeWrapper}>
          <div className={styles.firstDiv}>
            <Image
              className="shadow-4-m"
              src={hero}
              alt=""
              height={400}
              width={400}
            />
            <div className={styles.emptyDiv}></div>
          </div>

          <div className={styles.secondDiv}>
            <div className={styles.titleDiv}>
              <h3 className="heading2 color4">{title}</h3>
            </div>
            <ReservationContactForm language={language} />
          </div>
        </div>
      </div>
    </section>
  );
}
