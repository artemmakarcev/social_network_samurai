import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../Dialogs.module.css";

const DialogItem = ({id, name}) => {
  const path = "/dialogs/" + id;
  return (
    <div className={styles.dialog + " " + styles.active}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
