import React from "react";
import styles from "./First.module.css";
import SocialMedia from "./SocialMedia/SocialMedia";
import Link from "next/link";
import { address, email, phoneNumber } from "@/Control/info";

export default function First() {
  return (
    <section>
      <h2 className="heading4">Contact info</h2>
      <address className={styles.contactInfo}>
        <p>{address}</p>
        <Link href={`mailto:${email}`} className={styles.email}>
          {email}
        </Link>
        <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
      </address>
      <SocialMedia />
    </section>
  );
}
