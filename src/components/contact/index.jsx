import React from "react";
import styles from "./contact.module.css";
import location from "../../assets/icons/Location.svg";
import iPhone from "../../assets/icons/iPhone.svg";
import mail from "../../assets/icons/Mail.svg";
import linkedIn from "../../assets/icons/LinkedIn.svg";
import gitHub from "../../assets/icons/GitHub.svg";
import clsx from "clsx";

const Contact = () => {
  return (
    <footer className={styles.contact} id="contact">
      <div className={clsx("header", styles.header)}>
        <h2>Contact Me</h2>
      </div>
      <address className={styles.address}>
        <div role="presentation" className={styles["location-wrapper"]}>
          <img src={location} alt="location icon" />
          <div role="presentation" aria-label="location">
            <p>Fremont</p>
            <p>California</p>
            <p>United States</p>
          </div>
        </div>
        <a href="mailto:thein.than.hein.th@gmail.com">
          <img src={mail} alt="mail icon" />
          thein.than.hein.th@gmail.com
        </a>
        <a href="tel:+15108579331">
          <img src={iPhone} alt="phone icon" /> +1(510) 857-9331
        </a>
      </address>
      <div role="presentation" className={styles.social}>
        <img src={gitHub} alt="git hub icon" />
        <img src={linkedIn} alt="linkedIn icon" />
      </div>
    </footer>
  );
};

export default Contact;
