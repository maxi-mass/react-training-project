import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts newPostText={props.profilePage.newPostText}
                     posts={props.profilePage.posts}
                     addPost={props.addPost}
                     changeNewPostText={props.changeNewPostText}
            />
        </div>
    );
};

export default Profile;