import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? styles.active : null)}>
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" className={({ isActive }) => (isActive ? styles.active : null)}>
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" className={({ isActive }) => (isActive ? styles.active : null)}>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" className={({ isActive }) => (isActive ? styles.active : null)}>
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? styles.active : null)}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
