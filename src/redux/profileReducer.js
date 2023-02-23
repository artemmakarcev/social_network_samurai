const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST";

let initialState = {
  posts: [
    { id: 1, title: "Post1", src: "https://randomuser.me/api/portraits/men/1.jpg", likesCount: 11 },
    { id: 2, title: "Post2", src: "https://randomuser.me/api/portraits/men/2.jpg", likesCount: 11 },
    { id: 3, title: "Post3", src: "https://randomuser.me/api/portraits/men/3.jpg", likesCount: 11 },
    { id: 4, title: "Post4", src: "https://randomuser.me/api/portraits/men/4.jpg", likesCount: 11 },
  ],
  newPostText: "new post text",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let nextId = state.posts.length + 1;
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          { id: nextId, title: state.newPostText, likesCount: 4, src: "https://randomuser.me/api/portraits/men/" + nextId + ".jpg" },
        ],
      };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    default:
      return state;
  }
};
export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;
