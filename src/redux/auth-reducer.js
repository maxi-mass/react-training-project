import {usersAPI} from "../api/api";

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
                ...state, ...action.userData, isAuth: true
            };
        default:
            return state;
    }
};

export const loginUser = () => dispatch => {
    usersAPI.auth().then(response => {
        if (response.resultCode === 0) {
            let {id, email, login} = response.data;
            dispatch(setUserData(id, email, login));
        }
    });
};

export const setUserData = (userId, email, login) => {
    return { type: SET_USER_DATA, userData: {userId, email, login}}
};