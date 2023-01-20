import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  const state = props.store.getState().dialogsPage;

  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let onMessageChange = (event) => {
    let text = event.target.value;
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  let dialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} />);
  let messagesElements = state.messages.map((message) => <Message text={message.text} key={message.id} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles["dialogs-items"]}>{dialogsElements}</div>

      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea onChange={onMessageChange} value={state.newMessageText} placeholder="Enter your message" />
        </div>
        <div>
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
