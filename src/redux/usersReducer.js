const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USER = "SET_USER";

let initialState = {
  users: [      {
    id: 1,
    photoUrl:
      "https://steamuserimages-a.akamaihd.net/ugc/5098669332654194970/A1F0504837E6CDA815E1DCB682F8F3960E12333C/?imw=128&imh=128&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    fulName: "Name",
    location: { city: "Moscow", country: "Russia" },
    status: "status string",
    isFollow: false,
  },],
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
      console.log(state.users,action.users)
      return { ...state, users: [...state.users, ...action.users] };
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

export default usersReducer;
