import { stopSubmit } from "redux-form";
import { profileAPI } from "../../api/api";
import type { PostType, ProfileType, PhotosType } from "@/types/types";

const ADD_POST = "profile/ADD-POST";
const DELETE_POST = "profile/DELETE-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const SET_PHOTO = "profile/SET_PHOTO";

let initialState = {
  posts: [{ id: 1, title: "Hi, how are you?", likesCount: 12, src: "https://randomuser.me/api/portraits/men/1.jpg" }] as Array<PostType>,
  profileData: null as ProfileType | null,
  status: "",
  newPostText: "",
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
      return { ...state, profileData: action.profileData };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_PHOTO:
      return {
        ...state,
        profileData: { ...state.profileData, photos: action.photos } as ProfileType,
      };
    default:
      return state;
  }
};

type AddPostActionCreatorActionType = {
  type: typeof ADD_POST;
  newPostText: string;
};

export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => {
  return { type: ADD_POST, newPostText };
};

type DeletePostActionType = {
  type: typeof DELETE_POST;
  postId: number;
};

export const deletePostActionCreator = (postId: number): DeletePostActionType => {
  return { type: DELETE_POST, postId };
};

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profileData: ProfileType;
};

export const setUserProfile = (profileData: ProfileType): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profileData,
});

type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};

export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
});

type SetPhotosActionType = {
  type: typeof SET_PHOTO;
  photos: PhotosType;
};

export const setPhotos = (photos: PhotosType): SetPhotosActionType => ({
  type: SET_PHOTO,
  photos,
});

export const getUserProfile = (id: number) => async (dispatch: any) => {
  let response = await profileAPI.getProfile(id);
  dispatch(setUserProfile(response));
};

export const getStatus = (id: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(id);
  dispatch(setStatus(response));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    console.error("Не удалось сохранить статус", error);
  }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(setPhotos(response.data.photos));
  }
};

export const saveProfileData = (profileData: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfileData(profileData);
  if (response.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("profileData", { _error: response.messages[0] }));
    return Promise.reject(response.messages[0]);
  }
};
export default profileReducer;
