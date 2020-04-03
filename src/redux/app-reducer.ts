import { loginUser } from "./auth-reducer";

const SET_INITIALIZED = "app/SET-INITIALIZED";

export type TInitialState = {
  initialized: boolean;
};

let initialState: TInitialState = {
  initialized: false
};

export const appReducer = (
  state = initialState,
  action: any
): TInitialState => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

export const initialize = () => async (dispatch: any) => {
  let promise = dispatch(loginUser());
  await Promise.all([promise]);
  dispatch(setInitialized());
};

type TSetInitializedAction = {
  type: typeof SET_INITIALIZED;
};

export const setInitialized = (): TSetInitializedAction => ({
  type: SET_INITIALIZED
});
