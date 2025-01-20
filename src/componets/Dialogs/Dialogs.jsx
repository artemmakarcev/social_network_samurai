import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };

  let dialogsElements = props.dialogs.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
  let messagesElements = props.messages.map((message) => {
    return <Message text={message.text} key={message.id} id={message.id} />;
  });

  return (
    <div className={styles.dialogs}>
      <div className={styles["dialogs-items"]}>{dialogsElements}</div>

      <div className={styles.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"textarea"} name="newMessageText" placeholder="Enter your message" />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;
