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

  let dialogsElements = props.dialogs.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
  let messagesElements = props.messages.map((message) => <Message text={message.text} key={message.id} id={message.id} />);

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
