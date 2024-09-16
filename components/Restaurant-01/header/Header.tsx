import React from "react";
import Navigation from "./Navigation";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headWrapper}>
      <section className="section header">
        <div className="container">
          <Navigation />
        </div>
      </section>
    </header>
  );
}
