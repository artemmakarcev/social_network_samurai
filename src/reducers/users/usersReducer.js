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
  users: [],
  showUsersLimit: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
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
export const followSuccess = (userId) => {
  return { type: FOLLOW_USER, userId };
};
export const unfollowSuccess = (userId) => {
  return { type: UNFOLLOW_USER, userId };
};
export const setUsers = (users) => {
  return { type: SET_USER, users };
};
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (pageNumber, showUsersLimit) => async (dispatch) => {
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

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
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

export const setFollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, userAPI.setFollow, followSuccess);
};

export const deleteFollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, userAPI.deleteFollow, unfollowSuccess);
};

export default usersReducer;
