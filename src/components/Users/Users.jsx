import React from 'react';
import usersStyles from './Users.module.css';
import * as axios from 'axios';
import defaultAvatar from '../../../src/assets/images/default-avatar.jpg';
import styles from './Users.module.css';

class Users extends React.Component {
    componentDidMount = () => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    pages = () => {
        let pagesCount = this.props.totalUsersCount / this.props.pageSize;
        pagesCount = Math.ceil(pagesCount);

        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }

        return pages.map(page => {
            return <span
                    onClick={() => {this.onPageChanged(page)}}
                    className={(this.props.currentPage === page) ? styles.selectedPage: styles.pageNumber }
            >{page}</span>
        })
    };

    render = () => {
        return (
            <div>
                <div>{this.pages()}</div>
                {
                    this.props.users.map(user => {
                        return <div key={user.id} className={usersStyles.userItem}>
                    <span>
                        <div>
                            <img src={user.photos.small ? user.photos.small : defaultAvatar} alt="avatar"/>
                        </div>
                        <div>
                            {
                                user.followed ?
                                    <button onClick={() => {this.props.unFollowUser(user.id)}}>UnFollow</button>
                                    :
                                    <button onClick={() => {this.props.followUser(user.id)}}>Follow</button>
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
    }
}

export default Users;
