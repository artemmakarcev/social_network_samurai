const SEND_MESSAGE = "dialogs/SEND-MESSAGE";

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  text: string;
};

let initialState = {
  dialogs: [
    { id: 1, name: "Janis" },
    { id: 2, name: "Una" },
    { id: 3, name: "Charles" },
    { id: 4, name: "Elroy" },
    { id: 5, name: "Jarvis" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, text: "dicta solute corpora." },
    { id: 2, text: "nostrum dolor sent." },
    { id: 3, text: "nisi vitae est." },
    { id: 4, text: "vel et placet." },
    { id: 5, text: "dolor emus dolor cum." },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let text = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: state.messages.length + 1, text: text }],
      };
    default:
      return state;
  }
};

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE;
  newMessageText: string;
};

export const sendMessageActionCreator = (newMessageText: string): SendMessageCreatorActionType => {
  return {
    type: SEND_MESSAGE,
    newMessageText,
  };
};

export default dialogsReducer;
