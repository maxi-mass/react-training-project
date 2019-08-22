import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount} />);
    let newPostElement = React.createRef();
    let addPost = () => {
       let postText = newPostElement.current.value;
       props.addPost(postText);
       newPostElement.current.value = "";
    };
    return (
        <div className={p.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} value="it-kamasutra"/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={p.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;