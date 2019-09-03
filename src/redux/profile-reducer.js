const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id : 5,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
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