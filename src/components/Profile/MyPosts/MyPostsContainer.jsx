import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (newPostText) => {
        props.store.dispatch(onPostChangeActionCreator(newPostText));
    };

    return <MyPosts
        newPostText={props.store.getState().profilePage.newPostText}
        posts={props.store.getState().profilePage.posts}
        addPost={addPost}
        onPostChange={onPostChange}
    />

};

export default MyPostsContainer;