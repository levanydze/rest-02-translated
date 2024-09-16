import React from "react";
import styles from "./MapTimes.module.css";
import Hours from "./components/Hours";
import Text from "./components/Text";
import { mapLocation } from "@/Control/info";

export default function MapTimes() {
  return (
    <section className="section section-fill-1">
      <div className="container">
        <div className={styles.mapAndTimesWrapper}>
          <div className={styles.textMapWrap}>
            <Text />
            <div className={styles.mapSide}>
              <iframe className={styles.mapSide} src={mapLocation}></iframe>
            </div>
          </div>
          <Hours />
        </div>
      </div>
    </section>
  );
}
