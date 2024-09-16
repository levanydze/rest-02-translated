"use client";
import React, { useState } from "react";
import styles from "./Navigation.module.css";
import BurgerNav from "./Navigations/BurgerNav";
import StandartNav from "./Navigations/StandartNav";
import Link from "next/link";
import Image from "next/image";
import { companyLogo } from "@/Control/info";
import { companyName } from "@/Control/controls";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggler = () => {
    setIsNavOpen((prev) => !prev);
  };
  const navClose = () => {
    setIsNavOpen(false);
  };

  return (
    <div className={styles.navigationWrapper}>
      {/* logo */}
      <Link href={"/"} onClick={navClose} className={styles.logoWrapper}>
        <Image
          className="logo"
          src={companyLogo}
          height={200}
          width={200}
          alt={companyName + "logo"}
        />
      </Link>

      {/* Navigations */}
      <StandartNav />
      <BurgerNav
        navClose={navClose}
        navToggler={navToggler}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
    </div>
  );
};

export default Navigation;
