import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = (event) => {
    let text = event.target.value;
    props.updateNewMessageText(text);
  };

  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} />);
  let messagesElements = props.dialogsPage.messages.map((message) => <Message text={message.text} key={message.id} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles["dialogs-items"]}>{dialogsElements}</div>

      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea onChange={onMessageChange} value={props.newMessageText} placeholder="Enter your message" />
        </div>
        <div>
          <button onClick={onSendMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
