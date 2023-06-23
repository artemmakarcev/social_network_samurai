const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USER = "SET_USER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 2,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      console.log("follow user");
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, isFollow: true };
          }
          return user;
        }),
      };
    case UNFOLLOW_USER:
      console.log("unfollow user");
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, isFollow: false };
          }
          return user;
        }),
      };
    case SET_USER:
      console.log(state.users, action.users);
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    default:
      return state;
  }
};
export const followActionCreator = (userId) => {
  return { type: FOLLOW_USER, userId };
};
export const unfollowActionCreator = (userId) => {
  return { type: UNFOLLOW_USER, userId };
};
export const setUsersActionCreator = (users) => {
  return { type: SET_USER, users };
};
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCountAC = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });

export default usersReducer;
