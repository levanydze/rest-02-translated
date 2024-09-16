"use client";
import React from "react";
import Image from "next/image";
import styles from "./GuyWithServices.module.css";
import assetsJson from "@/json/assets.json";
import EachService from "./EachService/EachService";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

interface GuyWithServicesProps {
  image: string;
}

export default function GuyWithServices({ image }: GuyWithServicesProps) {
  const { isIntersecting, ref } = useIntersectionObserver({});
  const { chef, contact, reservation, menu, catering, story } = assetsJson;

  return (
    <section className="section">
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.textWrapper}>
            <h2 ref={ref} className="heading5 ">
              WE ARE EXPERT IN
            </h2>
            <h3 className="heading4 font1">What we love to do</h3>
          </div>
          <div className={styles.threeSectionWrapper}>
            <div
              className={`${styles.sideSection} ${
                isIntersecting ? "moveRight" : null
              }`}
            >
              <EachService icon={chef} title="Chef's Specials" url="/" />
              <EachService icon={story} title="Our Story" url="/about" />
              <EachService icon={menu} title="Menu" url="/menu" />
            </div>
            <Image
              className={styles.image}
              src={image}
              width={800}
              height={1500}
              alt="construction guy"
            ></Image>
            <div
              className={`${styles.sideSection} ${
                isIntersecting ? "moveLeft" : null
              }`}
            >
              <EachService
                icon={reservation}
                title="Reservations"
                url="/reservation"
              />
              <EachService
                icon={catering}
                title="Catering Services"
                url="/menu"
              />
              <EachService icon={contact} title="Contact Us" url="/contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
