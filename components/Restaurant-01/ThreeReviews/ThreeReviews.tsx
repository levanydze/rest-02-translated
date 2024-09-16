"use client";
import Image from "next/image";
import styles from "./ThreeReviews.module.css";
import { reviews } from "./reviews";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

export default function ThreeReviews() {
  const { isIntersecting, ref } = useIntersectionObserver({});

  return (
    <section className="section">
      <div className="container">
        <div className={styles.reviewsWrapper}>
          <div>
            <p className="paragraph">TESTIMONALS</p>
            <h6 ref={ref} className="heading4">
              Client Reviews
            </h6>
          </div>
          <div className={styles.cardsWrapper}>
            {Object.entries(reviews).map(([key, review], index) => (
              <div
                className={`${index === 0 && isIntersecting ? "moveRight" : ""}
                ${index === 2 && isIntersecting ? "moveLeft" : ""}
                ${styles.eachcard}`}
                key={index}
              >
                <Image
                  src={review.image}
                  alt={review.alt}
                  width={200}
                  height={200}
                ></Image>
                <p className={`paragraph ${styles.text}`}>{review.text}</p>
                <div>
                  <p className="heading5">{review.name}</p>
                  <p className="paragraph">{review.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
