import {rerenderEntireTree} from "../render";

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

export let addPost = () => {
    let newPost = {
        id : 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
};

export let changeNewPostText = (changedNewPostText) => {
    state.profilePage.newPostText = changedNewPostText;
    rerenderEntireTree(state);
};

export let addMessage = () => {
    let newMessageItem = {
        id: state.messagesPage.currentMessageId++,
        message: state.messagesPage.newMessageText
    };
    state.messagesPage.messages.push(newMessageItem);
    state.messagesPage.newMessageText = "";
    console.log(state);
    rerenderEntireTree(state);
};

export let changeNewMessageText = (changedNewMessageText) => {
    state.messagesPage.newMessageText = changedNewMessageText;
    rerenderEntireTree(state);
};

export default state;