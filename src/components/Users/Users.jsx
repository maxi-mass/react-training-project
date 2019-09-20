import React from 'react';
import styles from './Users.module.css';
import defaultAvatar from "../../assets/images/default-avatar.jpg";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

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
                key={page}
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
                                    <button
                                        disabled={props.followingInProgress.isFetching && user.id===props.followingInProgress.userId}
                                        onClick={() => {props.unFollow(user.id);}}
                                    >UnFollow</button>
                                    :
                                    <button
                                        disabled={props.followingInProgress.isFetching && user.id===props.followingInProgress.userId}
                                        onClick={() => {props.follow(user.id);}}
                                    >Follow</button>
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