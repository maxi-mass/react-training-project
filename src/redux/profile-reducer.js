import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts : [
        {id: 1, message: "Hello, how are you?", likeCount: 1},
        {id: 3, message: "Hi, it's my firs post on this platform!!!", likeCount: 2},
        {id: 5, message: "some text 11", likeCount: 2},
        {id: 8, message: "some text 2", likeCount: 3},
        {id: 11, message: "some text 3", likeCount: 5},
    ],
    userProfile: null,
    status: ""
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    {id: 5, message: action.postText, likeCount: 10},
                    ...state.posts
                ]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            };
        case SET_STATUS: 
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
};

export const getUserProfile = userId => dispatch => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response));
    });
};

export const getProfileStatus = userId => dispatch => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data))
    })
}

export const updateProfileStatus = status => dispatch => {
    profileAPI.updateStatus(status).then(response => {
        if (response.resultCode === 0) {
            dispatch(setStatus(status))
        }
    });
}

export const addPost = postText => ({type: ADD_POST, postText});
export const setUserProfile = userProfile => ({type: SET_USER_PROFILE, userProfile});
export const setStatus = status => ({type: SET_STATUS, status})