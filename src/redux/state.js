const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

export let store  = {
    _state: {
        profilePage : {
            posts : [
                {id: 1, message: "Hello, how are you?", likeCount: 1},
                {id: 3, message: "Hi, it's my firs post on this platform!!!", likeCount: 2},
                {id: 5, message: "some text 11", likeCount: 2},
                {id: 8, message: "some text 2", likeCount: 3},
                {id: 11, message: "some text 3", likeCount: 5},
            ],
            newPostText : ""
        },
        messagesPage : {
            dialogs :  [
                {name: "Maximas", id: 11},
                {name: "Dasha", id: 2},
                {name: "Ivan", id: 3},
                {name: "Alex", id: 4},
                {name: "Statyan", id: 5},
                {name: "Igoriyan", id: 6}
            ],
            messages : [
                {message: "Hello world", id: 1},
                {message: "Hey, how are you?", id: 2},
                {message: "Thanks, I'm fine!", id: 3},
                {message: "Why nobody loves me?", id: 4},
                {message: "Stasyan Yo", id: 5},
                {message: "Igoriyan Yo", id: 6}
            ],
            currentMessageId : 7,
            newMessageText: ""
        }
    },
    _callSubscriber(){},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id : 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this);
        } else if (action.type === CHANGE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.changedNewPostText;
            this._callSubscriber(this);
        } else if (action.type === ADD_MESSAGE) {
            let newMessageItem = {
                id: this._state.messagesPage.currentMessageId++,
                message: this._state.messagesPage.newMessageText
            };
            this._state.messagesPage.messages.push(newMessageItem);
            this._state.messagesPage.newMessageText = "";
            this._callSubscriber(this);
        } else if (action.type === CHANGE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.changedNewMessageText;
            this._callSubscriber(this);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (newPostText) =>  ({
    type: CHANGE_NEW_POST_TEXT,
    changedNewPostText: newPostText
});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const onNewMessageChangeActionCreator = (newMessageText) => ({
    type: CHANGE_NEW_MESSAGE_TEXT,
    changedNewMessageText: newMessageText
});