import React from "react";
import assetsJson from "../../../json/assets.json";
import styles from "./FourBox.module.css";
import EachFourBox from "./EachFourBox";
import { address, email, phoneNumber } from "@/Control/info";

export default function FourBox() {
  const { arrows, phone, postbox, chat } = assetsJson;
  return (
    <section className="section ">
      <div className="container">
        <div className={styles.FourBoxMainWrapper}>
          <EachFourBox image={arrows} alt="arrows" title={address} />
          <EachFourBox image={phone} alt="phone" title={phoneNumber} phone />
          <EachFourBox image={postbox} alt="postbox" title={email} email />
          <EachFourBox image={chat} alt="chat" title="Get In Touch" link />
        </div>
      </div>
    </section>
  );
}
