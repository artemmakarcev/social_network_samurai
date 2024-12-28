import React from "react";
import logo from "../../logo.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <img src={logo} alt="logo" />
          <div className={styles.loginBlock}>{props.isAuth ? props.login : <NavLink to={"/login"}>login</NavLink>}</div>
        </div>
      </div>
    </header>
  );
};
export default Header;
