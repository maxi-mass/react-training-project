const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
    posts : [
        {id: 1, message: "Hello, how are you?", likeCount: 1},
        {id: 3, message: "Hi, it's my firs post on this platform!!!", likeCount: 2},
        {id: 5, message: "some text 11", likeCount: 2},
        {id: 8, message: "some text 2", likeCount: 3},
        {id: 11, message: "some text 3", likeCount: 5},
    ],
    newPostText : ""
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id : 5,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.unshift(newPost);
            state.newPostText = "";
            break;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.changedNewPostText;
            break;
        default:
    }

    return state;
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (newPostText) =>  ({
    type: CHANGE_NEW_POST_TEXT,
    changedNewPostText: newPostText
});