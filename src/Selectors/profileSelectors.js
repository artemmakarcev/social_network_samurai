export const getProfilePage = (state) => {
  return state.profilePage.profile;
};

export const getStatusPage = (state) => {
  return state.profilePage.status;
};

export const getIsAuth = (state) => {
  return state.auth.isAuth;
};

export const getUserId = (state) => {
  return state.auth.userId;
};