const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Einar" },
    { id: 2, name: "Una" },
    { id: 3, name: "Charles" },
    { id: 4, name: "Abbigail" },
    { id: 5, name: "Jarvis" },
  ],
  messages: [
    { id: 1, text: "Reprehenderit est dolorem dolorem nostrum qui." },
    { id: 2, text: "Iusto est eos quo sint quod eos." },
    { id: 3, text: "Reprehenderit est dolorem dolorem nostrum qui." },
    { id: 4, text: "Vel explicabo qui et animi ex." },
    { id: 5, text: "Reprehenderit est dolorem dolorem nostrum qui." },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, {id: state.messages.length + 1,text: state.newMessageText}],
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};

export default dialogsReducer;
