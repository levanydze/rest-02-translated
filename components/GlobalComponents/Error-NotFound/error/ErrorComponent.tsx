"use client";
import React from "react";
import styles from "./ErrorComponent.module.css";
import Link from "next/link";

export default function ErrorDiv() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.errorWrapper}>
          <h6 className="heading3  ">Error Occured</h6>
          <Link href="https://levanidze.com" className="button">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
