import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount} />);
    let newPostElement = React.createRef();

    let addPost = () => {
       props.addPost();
    };

    let onPostChange = () => {
        let newPostText = newPostElement.current.value;
        props.onPostChange(newPostText)
    };

    return (
        <div className={p.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={p.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;