import React from "react";
import styles from "./banner.module.css";

const Banner = (props) => {
  return (
    <header className={styles.banner} id="home">
      <div role="presentation">
        <h1>Thein Than Hein</h1>
        <p>A Web Developer</p>
      </div>
    </header>
  );
};

export default Banner;
