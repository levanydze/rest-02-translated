"use client";
import React, { useRef, useState } from "react";
import { sendEmail } from "./contactFunctional"; // Import email logic
import { getPlaceholder } from "./placeHolderLanguages"; // Import translations
import styles from "./ReservationContactForm.module.css";

export interface contactFormProps {
  language: string;
}

export default function ReservationContactForm({ language }: contactFormProps) {
  const [nameValue, setNameValue] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);

  const handleErrors = () => {
    setNameError(!nameValue);
    setEmailError(!emailValue);
  };

  const handleEmailSent = () => {
    setEmailSent(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(form, handleEmailSent); // Use the sendEmail function
  };

  return (
    <div className={styles.reservationWrapper}>
      <div className={styles.reservation}>
        <form
          className={`paragraph ${styles.form} ${emailSent ? styles.none : ""}`}
          ref={form}
          onSubmit={handleSubmit}
        >
          <input
            className={`${styles.input} ${styles.miniInput} ${
              nameError ? styles.inputRed : ""
            }`}
            type="text"
            name="user_name"
            placeholder={getPlaceholder("name", language)}
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
          <div>
            <input
              className={` ${styles.input} ${styles.miniInput} ${
                emailError ? styles.inputRed : ""
              }`}
              type="email"
              name="user_email"
              placeholder={getPlaceholder("email", language)}
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <input
              className={styles.input}
              type="tel"
              name="user_phone"
              placeholder={getPlaceholder("phone", language)}
            />
          </div>
          <div>
            <input
              className={styles.input}
              type="date"
              name="user_date"
              placeholder={getPlaceholder("date", language)}
            />
            <input
              className={styles.input}
              type="time"
              name="user_time"
              placeholder={getPlaceholder("time", language)}
            />
          </div>
          <input
            className={styles.input}
            type="text"
            name="user_quantity"
            placeholder={getPlaceholder("quantity", language)}
          />
          <textarea
            className={`${styles.textArea} ${styles.input}`}
            name="message"
            placeholder={getPlaceholder("message", language)}
          />
          <button
            type={nameValue && emailValue ? "submit" : "button"}
            className={`button ${styles.button} ${
              !buttonDisable ? "button" : "button1Disabled"
            } w-full`}
            onClick={
              !nameValue || !emailValue
                ? handleErrors
                : () => setButtonDisable(true)
            }
          >
            {getPlaceholder("send", language)}
          </button>
        </form>
        <div className={emailSent ? styles.formSent : styles.hide}>
          <h6 className="heading3 color4">
            {getPlaceholder("thankYou", language)}
          </h6>
          <h5 className="heading4">
            {getPlaceholder("confirmation", language)}
          </h5>
        </div>
      </div>
    </div>
  );
}
