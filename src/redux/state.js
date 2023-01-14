let rerenderEntireTree = () => {
  console.log("State changed");
};

let state = {
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
  },
  siderbar: {},
};
/**
 * Добовляет новый пост в state
 * @param  {Object} state
 */
export const addPost = () => {
  let nextId = state.profilePage.posts.length + 1;
  let newPost = {
    id: nextId,
    title: state.profilePage.newPostText,
    likesCount: 4,
    src: "https://randomuser.me/api/portraits/men/" + nextId + ".jpg",
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};
/**
 * Изменяет значение для названия нового поста
 * @param  {String} newText
 */
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer; // Паттер обсервера. Похоже на addEventListener
};

export default state;
