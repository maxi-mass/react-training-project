import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "auth/SET-USER-DATA";

export type TInitialState2 = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};
export type TInitialState = typeof initialState;

export const authReducer = (
  state: TInitialState = initialState,
  action: any
): TInitialState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const loginUser = () => (dispatch: any) => {
  return authAPI.auth().then(response => {
    if (response.resultCode === 0) {
      let { id, email, login } = response.data;
      dispatch(setUserData(id, email, login, true));
    }
  });
};

export const login = (loginData: any) => async (dispatch: any) => {
  let response = await authAPI.login(loginData);
  if (response.resultCode === 0) {
    dispatch(loginUser());
  } else {
    dispatch(
      stopSubmit("login", {
        _error: "Login or password is invalid"
      })
    );
  }
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(setUserData(1, "", "", false));
  }
};

type TSetUserDataActionPayload = {
  userId: number;
  email: string;
  login: string;
  isAuth: boolean;
};

type TSetUserDataAction = {
  type: typeof SET_USER_DATA;
  payload: TSetUserDataActionPayload;
};

export const setUserData = (
  userId: number,
  email: string,
  login: string,
  isAuth: boolean
): TSetUserDataAction => {
  return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } };
};
