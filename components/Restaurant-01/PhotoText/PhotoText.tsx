"use client";
import React from "react";
import styles from "./PhotoText.module.css";
import Image from "next/image";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

interface PhotoTextProps {
  image: string;
  title1: string;
  title2: string;
  text: string;
  sign: string;
  reverse?: boolean;
}

export default function PhotoText({
  image,
  title1,
  title2,
  text,
  sign,
  reverse,
}: PhotoTextProps) {
  const { isIntersecting, ref } = useIntersectionObserver({});

  return (
    <section className="section section-fill-1">
      <div className="container">
        <div ref={ref}></div>
        <div
          className={` ${reverse ? styles.reverse : ""}  ${
            styles.photoTextWrapper
          }`}
        >
          <Image
            src={image}
            height={1500}
            width={1000}
            alt={image}
            className={isIntersecting && !reverse ? "moveRight" : "moveLeft"}
          />
          <div
            className={`${
              isIntersecting && !reverse ? "moveLeft" : "moveRight"
            } ${styles.textDiv}`}
          >
            <h2 className=" font3 color1 heading2">{title1}</h2>
            <h2 className="heading4 font1 ">{title2}</h2>
            <p className="twoLines"></p>
            <h3 className="paragraph">{text}</h3>
            <h4 className="font3 color1 heading3">{sign}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
