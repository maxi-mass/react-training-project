import {rerenderEntireTree} from "../render";

let state = {
    profilePage : {
        posts : [
            {id: 1, message: "Hello, how are you?", likeCount: 1},
            {id: 3, message: "Hi, it's my firs post on this platform!!!", likeCount: 2},
            {id: 5, message: "some text 11", likeCount: 2},
            {id: 8, message: "some text 2", likeCount: 3},
            {id: 11, message: "some text 3", likeCount: 5},
        ]
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
            {message: "Statyan Yo", id: 5},
            {message: "Igoriyan Yo", id: 6}
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id : 5,
        message: postMessage,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;