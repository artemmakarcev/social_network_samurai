import React from "react";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage;
  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let updateNewMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      sendMessage={sendMessage}
      updateNewMessageText={updateNewMessageText}
      dialogs={state.dialogs}
      messages={state.messages}
      newMessageText={state.newMessageText}
    />
  );
};

export default DialogsContainer;
