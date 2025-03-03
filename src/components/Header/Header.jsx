import React from "react";
import logo from "../../assets/img/logo.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login, logout }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>

          <div className={styles.loginBlock}>
            {isAuth ? (
              <div>
                <p>{login}</p>
                <button onClick={logout}>Log Out</button>
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
