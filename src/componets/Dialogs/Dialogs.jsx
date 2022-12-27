import React from "react";

import styles from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} />);
  let messagesElements = props.messages.map((message) => <Message text={message.text} key={message.id} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles["dialogs-items"]}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
