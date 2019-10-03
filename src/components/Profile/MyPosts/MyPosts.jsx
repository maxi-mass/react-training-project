import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPostsForm = props => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"your post text"}
                    component={"textarea"}
                    name={"postText"} 
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
    </form>
};

const MyPostsReduxForm = reduxForm({form: 'myPosts'})(MyPostsForm);

const MyPosts = (props) => {
    let postsElements = props.posts.map((p,ix) => <Post
        id={p.id}
        message={p.message}
        likeCount={p.likeCount}
        key={ix}
    />);

    let onSubmit = postData => {
        props.addPost(postData.postText);
    }

    return (
        <div className={p.postsBlock}>
            <h3>My posts</h3>
            <MyPostsReduxForm onSubmit={onSubmit} />
            <div className={p.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;