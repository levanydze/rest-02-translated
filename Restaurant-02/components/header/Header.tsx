"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import BurgerNav from "./Navigations/BurgerNav/BurgerNav";
import StandartNav from "./Navigations/StandartNav/StandartNav";
import Link from "next/link";
import Image from "next/image";
import { companyLogo } from "@/Control/info";
import { companyName } from "@/Control/controls";
import { LanguageSwitcher } from "@/src/app/languageSwitcher";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggler = () => {
    setIsNavOpen((prev) => !prev);
  };
  const navClose = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={styles.headWrapper}>
      <section className="section header">
        <div className="container">
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
            <LanguageSwitcher />
            <BurgerNav
              navClose={navClose}
              navToggler={navToggler}
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navigation;
