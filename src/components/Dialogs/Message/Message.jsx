import React from "react";

import styles from "../Dialogs.module.css";

const Message = ({ id, text }) => {
  return (
    <div id={id} className={styles.message}>
      {text}
    </div>
  );
};

export default Message;
