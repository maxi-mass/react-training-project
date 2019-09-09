import React from 'react';
import usersStyles from './Users.module.css';
import * as axios from 'axios';
import defaultAvatar from '../../../src/assets/images/default-avatar.jpg';

const Users = (props) => {
    if (props.users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users?page=60")
            .then(response => {
                props.setUsers(response.data.items);
            });

    }
    return <div>
        {
            props.users.map(user => {
                return <div key={user.id} className={usersStyles.userItem}>
                    <span>
                        <div>
                            <img src={user.photos.small ? user.photos.small : defaultAvatar} alt="avatar"/>
                        </div>
                        <div>
                            {
                                user.followed ?
                                    <button onClick={() => {props.unFollowUser(user.id)}}>UnFollow</button>
                                    :
                                    <button onClick={() => {props.followUser(user.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>
            })
        }
    </div>
};

export default Users;
