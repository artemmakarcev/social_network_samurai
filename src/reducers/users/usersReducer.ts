import type { UserType } from "@/types/types";
import { userAPI } from "../../api/api";
import { updateObjectInArray } from "../../utils/objectHelper";

const FOLLOW_USER = "users/FOLLOW_USER";
const UNFOLLOW_USER = "users/UNFOLLOW_USER";
const SET_USER = "users/SET_USER";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [] as Array<UserType>,
  showUsersLimit: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // list of users ids
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true }),
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false }),
      };
    case SET_USER:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

type FollowSuccessActionType = {
  type: typeof FOLLOW_USER;
  userId: number;
};

export const followSuccess = (userId: number): FollowSuccessActionType => {
  return { type: FOLLOW_USER, userId };
};

type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW_USER;
  userId: number;
};

export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => {
  return { type: UNFOLLOW_USER, userId };
};

type SetUsersActionType = {
  type: typeof SET_USER;
  users: Array<UserType>;
};

export const setUsers = (users: Array<UserType>): SetUsersActionType => {
  return { type: SET_USER, users };
};

type setCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  count: number;
};

export const setTotalUsersCount = (count: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, count });

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching });

type ToggleFollowingInProgress = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
};

export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleFollowingInProgress => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (pageNumber: number, showUsersLimit: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(pageNumber));
  try {
    let response = await userAPI.getUsers({ pageNumber, showUsersLimit });
    dispatch(setCurrentPage(pageNumber));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
  } catch (error) {
    console.error(error);
  }
  dispatch(toggleIsFetching(false));
};

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleFollowingInProgress(true, userId));
  try {
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
      dispatch(actionCreator(userId));
    }
  } catch (error) {
    console.error(error);
  }
  dispatch(toggleFollowingInProgress(false, userId));
};

export const setFollow = (userId: number) => async (dispatch: any) => {
  followUnfollowFlow(dispatch, userId, userAPI.setFollow, followSuccess);
};

export const deleteFollow = (userId: number) => async (dispatch: any) => {
  followUnfollowFlow(dispatch, userId, userAPI.deleteFollow, unfollowSuccess);
};

export default usersReducer;
