import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, title: "Post1", src: "https://randomuser.me/api/portraits/men/1.jpg", likesCount: 11 },
        { id: 2, title: "Post2", src: "https://randomuser.me/api/portraits/men/2.jpg", likesCount: 11 },
        { id: 3, title: "Post3", src: "https://randomuser.me/api/portraits/men/3.jpg", likesCount: 11 },
        { id: 4, title: "Post4", src: "https://randomuser.me/api/portraits/men/4.jpg", likesCount: 11 },
      ],
      newPostText: "new post text",
    },
    dialogsPage: {
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
    },
    siderbar: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  /**
   * Добовляет новый пост в state
   * @param  {Object} state
   */
  addPost() {
    let nextId = this._state.profilePage.posts.length + 1;
    let newPost = {
      id: nextId,
      title: this._state.profilePage.newPostText,
      likesCount: 4,
      src: "https://randomuser.me/api/portraits/men/" + nextId + ".jpg",
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  /**
   * Изменяет значение для названия нового поста
   * @param  {String} newText
   */
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer; // Паттер обсервера. Похоже на addEventListener
  },
};

export default store;
