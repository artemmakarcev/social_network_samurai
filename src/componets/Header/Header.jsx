import React from "react";
import logo from "../../logo.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>

          <div className={styles.loginBlock}>
            {props.isAuth ? (
              <div>
                <p>{props.login}</p>
                <button onClick={props.logout}>Log Out</button>
              </div>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
