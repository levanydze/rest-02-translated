import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { MenuItemProps } from "../../../../../Control/fetchingData";

export default async function ServerCard({
  image,
  name,
  ingredients,
  portions,
  special,
  season,
  vegan,
  spicy,
  newItem,
  price,
  id,
}: MenuItemProps) {
  return (
    <div className={styles.cardWrapper}>
      <Link href={`/menu/${id}`}>
        <Image
          src={image}
          width={600}
          height={600}
          alt={name}
          loading="lazy"
        ></Image>
      </Link>
      <div className={styles.cardInfoDiv}>
        <div className={`caption ${styles.namePrice}`}>
          <h2 className=" font1">{name}</h2>
          <p className={`${styles.dotted}`}></p>
          <h6>{price} sek</h6>
        </div>
        <h3 className="paragraph font1 textMedium">
          {ingredients.length > 110
            ? ingredients.substring(0, 110) + "..."
            : ingredients}
        </h3>
        <div className={styles.details}>
          {portions && <h5 className="title0 font1">{portions}</h5>}
          {vegan && <p className={`menuTags ${styles.vegan}`}>VEGAN</p>}
          {special && <p className={`menuTags ${styles.special}`}>SPECIAL</p>}
          {season && <p className={`menuTags ${styles.season}`}>SEASON</p>}
          {spicy && <p className={`menuTags ${styles.spicy}`}>SPICY</p>}
          {newItem && <p className={`menuTags ${styles.newItem}`}>NEW</p>}
        </div>
      </div>
    </div>
  );
}
