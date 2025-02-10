import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let nextId = state.posts.length + 1;
      let text = action.newPostText;
      return {
        ...state,
        posts: [...state.posts, { id: nextId, title: text, likesCount: 4, src: "https://randomuser.me/api/portraits/men/" + nextId + ".jpg" }],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.postId),
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText };
};

export const deletePostActionCreator = (postId) => {
  return { type: DELETE_POST, postId };
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (id) => (dispatch) => {
  profileAPI.getProfile(id).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export const getStatus = (id) => (dispatch) => {
  profileAPI.getStatus(id).then((data) => {
    dispatch(setStatus(data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
