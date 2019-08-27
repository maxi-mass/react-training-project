let rerenderEntireTree = () => {};
export let store  = {
    rerenderEntireTree(){},
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
    addPost() {
        let newPost = {
            id : 5,
            message: state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        rerenderEntireTree(state);
    },
    changeNewPostText(changedNewPostText) {
        state.profilePage.newPostText = changedNewPostText;
        rerenderEntireTree(state);
    },
    addMessage() {
        let newMessageItem = {
            id: this._state.messagesPage.currentMessageId++,
            message: this._state.messagesPage.newMessageText
        };
        this._state.messagesPage.messages.push(newMessageItem);
        this._state.messagesPage.newMessageText = "";
        rerenderEntireTree(state);
    },
    changeNewMessageText(changedNewMessageText) {
        this._state.messagesPage.newMessageText = changedNewMessageText;
        rerenderEntireTree(state);
    }
};

let state = {
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
};

export const addPost = () => {
    let newPost = {
        id : 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
};

export const changeNewPostText = (changedNewPostText) => {
    state.profilePage.newPostText = changedNewPostText;
    rerenderEntireTree(state);
};

export const addMessage = () => {
    let newMessageItem = {
        id: state.messagesPage.currentMessageId++,
        message: state.messagesPage.newMessageText
    };
    state.messagesPage.messages.push(newMessageItem);
    state.messagesPage.newMessageText = "";
    rerenderEntireTree(state);
};

export const changeNewMessageText = (changedNewMessageText) => {
    state.messagesPage.newMessageText = changedNewMessageText;
    rerenderEntireTree(state);
};

export const subscribe  = (observer) => {
    rerenderEntireTree = observer;
};

export default state;