import * as serviceWorker from './serviceWorker';
import state from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewPostText, addMessage, changeNewMessageText, subscribe} from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        changeNewPostText={changeNewPostText}
        addMessage={addMessage}
        changeNewMessageText={changeNewMessageText}
    />, document.getElementById('root'));
};
subscribe(rerenderEntireTree);
rerenderEntireTree(state);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
