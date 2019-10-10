import {loginUser} from "./auth-reducer";

const SET_INITIALIZED = "SET-INITIALIZED";

let initialState = {
    initialized: false
};

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state, initialized: true
            };
        default:
            return state;
    }
};

export const initialize = () => dispatch => {
    let promise = dispatch(loginUser());
    Promise.all([promise]).then(response => {
        dispatch(setInitialized())
    });
};

export const setInitialized = () => ({type: SET_INITIALIZED});