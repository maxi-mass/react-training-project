import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts : [
        {id: 1, message: "Hello, how are you?", likeCount: 1},
        {id: 3, message: "Hi, it's my firs post on this platform!!!", likeCount: 2},
        {id: 5, message: "some text 11", likeCount: 2},
        {id: 8, message: "some text 2", likeCount: 3},
        {id: 11, message: "some text 3", likeCount: 5},
    ],
    newPostText : "",
    userProfile: null
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    {id: 5, message: state.newPostText, likeCount: 10},
                    ...state.posts
                ],
                newPostText: ""
            };
        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.changedNewPostText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: {...action.userProfile}
            };
        default:
            return state;
    }
};

export const getUserProfile = userId => dispatch => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response));
    });
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = newPostText =>  ({
    type: CHANGE_NEW_POST_TEXT,
    changedNewPostText: newPostText
});
export const setUserProfile = userProfile => ({type: SET_USER_PROFILE, userProfile});