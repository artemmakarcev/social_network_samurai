import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null, // if null, then captcha is not required
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

type SetAuthUserDataActionPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataActionPayloadType;
};

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string };
};

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.getAuth();
  if (response.resultCode === 0) {
    let { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: null | undefined) => async (dispatch: any) => {
  let response = await authAPI.getLogin(email, password, rememberMe, captcha);
  if (response.resultCode === 0) {
    // success, get auth data
    dispatch(getAuthUserData());
  } else {
    if (response.resultCode === 10) {
      // captcha
      dispatch(getCaptchaUrl());
    }
    let message = response.messages.length > 0 ? response.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.deleteLogin();
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
