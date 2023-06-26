import React from "react";
import styles from "./preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.spinnerBox}>
      <div className={styles.threeQuarterSpinner}></div>
    </div>
  );
};

export default Preloader;
