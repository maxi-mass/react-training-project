import React from 'react';
import styles from './Users.module.css';
import defaultAvatar from "../../assets/images/default-avatar.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
    let pagesItems = () => {
        let pagesCount = props.totalUsersCount / props.pageSize;
        pagesCount = Math.ceil(pagesCount);

        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }

        return pages.map(page => {
            return <span
                onClick={() => props.onPageChanged(page)}
                className={(props.currentPage === page) ? styles.selectedPage: styles.pageNumber }
            >{page}</span>
        })
    };

    return (
        <div>
            <div>{pagesItems()}</div>
            {
                props.users.map(user => {
                    return <div key={user.id} className={styles.userItem}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small ? user.photos.small : defaultAvatar} alt="avatar"/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed ?
                                    <button onClick={() => {
                                        axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY" : "97771d01-b7c4-41cb-8ae9-e52b1b7430fa"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.statusCode === 0) {
                                                props.followUser(user.id);
                                            }
                                        }); 
                                        props.unFollowUser(user.id)
                                    }}>UnFollow</button>
                                    :
                                    <button onClick={() => {
                                        axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY" : "97771d01-b7c4-41cb-8ae9-e52b1b7430fa"
                                            }
                                        })
                                        .then(response => {
                                            console.log(response);
                                            if (response.data.statusCode === 0) {
                                                props.followUser(user.id);
                                            }
                                        }); 
                                    }}>Follow</button>
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
    );
};

export default Users;