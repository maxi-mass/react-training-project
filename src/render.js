import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewPostText, addMessage, changeNewMessageText} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        changeNewPostText={changeNewPostText}
        addMessage={addMessage}
        changeNewMessageText={changeNewMessageText}
    />, document.getElementById('root'));
};
