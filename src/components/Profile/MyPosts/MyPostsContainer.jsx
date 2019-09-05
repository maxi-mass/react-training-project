import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    let onPostChange = (newPostText) => {
                        store.dispatch(onPostChangeActionCreator(newPostText));
                    };

                    return <MyPosts
                        newPostText={store.getState().profilePage.newPostText}
                        posts={store.getState().profilePage.posts}
                        addPost={addPost}
                        onPostChange={onPostChange}
                    />
                }
            }
        </StoreContext.Consumer>
    );

};

export default MyPostsContainer;