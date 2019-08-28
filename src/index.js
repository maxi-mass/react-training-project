import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/state";

let rerenderEntireTree = (store) => {
    ReactDOM.render(<App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        changeNewPostText={store.changeNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        changeNewMessageText={store.changeNewMessageText.bind(store)}
    />, document.getElementById('root'));
};
rerenderEntireTree(store);
store.subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
