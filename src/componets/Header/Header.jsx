import React from "react";
import logo from "../../logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};
export default Header;
