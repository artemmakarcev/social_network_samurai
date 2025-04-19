import { profileAPI } from "../../api/api";

const ADD_POST = "profile/ADD-POST";
const DELETE_POST = "profile/DELETE-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const SET_PHOTO = "profile/SET_PHOTO";

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
    case SET_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
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

export const setPhoto = (photos) => ({
  type: SET_PHOTO,
  photos,
});

export const getUserProfile = (id) => async (dispatch) => {
  let response = await profileAPI.getProfile(id);
  dispatch(setUserProfile(response));
};

export const getStatus = (id) => async (dispatch) => {
  let response = await profileAPI.getStatus(id);
  dispatch(setStatus(response));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(setPhoto(response.data.photos));
  }
};

export default profileReducer;
