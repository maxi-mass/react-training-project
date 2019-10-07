import {authAPI} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload
            };
        default:
            return state;
    }
};

export const loginUser = () => dispatch => {
    authAPI.auth().then(response => {
        if (response.resultCode === 0) {
            let {id, email, login} = response.data;
            dispatch(setUserData(id, email, login, true));
        }
    });
};

export const login = loginData => dispatch => {
    authAPI.login(loginData).then(response => {
        if (response.resultCode === 0) {
            dispatch(loginUser());
        } 
    });
};

export const logout = () => dispatch => {
    authAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    });
};

export const setUserData = (userId, email, login, isAuth) => {
    return { type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
};