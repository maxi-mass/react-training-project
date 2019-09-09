import React from 'react';
import usersStyles from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://avatarfiles.alphacoders.com/715/71560.jpg',
                followed: true,
                fullName: "Maximas S.",
                location: {country: "Russia", city: "Nnov"},
                status: "Hello from NiNo"
            },
            {
                id: 2,
                photoUrl: 'https://avatarfiles.alphacoders.com/715/71560.jpg',
                followed: false,
                fullName: "Dmitry K.",
                location: {country: "Belarus", city: "Minsk"},
                status: "Hello from Belarus"
            },
            {
                id: 3,
                photoUrl: 'https://avatarfiles.alphacoders.com/715/71560.jpg',
                followed: true,
                fullName: "Ivan N.",
                location: {country: "Russia", city: "Moscow"},
                status: "Hello from Moscow"
            },
            {
                id: 4,
                photoUrl: 'https://avatarfiles.alphacoders.com/715/71560.jpg',
                followed: true,
                fullName: "Vladimir P.",
                location: {country: "Russia", city: "St.Petersburg"},
                status: "Hello from Piter"
            },
            {
                id: 5,
                photoUrl: 'https://avatarfiles.alphacoders.com/715/71560.jpg',
                followed: false,
                fullName: "Alexey I.",
                location: {country: "Russia", city: "Saratov"},
                status: "Hellow from Saratov"
            },
        ]);
    }
    return <div>
        {
            props.users.map(user => {
                return <div key={user.id} className={usersStyles.userItem}>
                    <span>
                        <div>
                            <img src={user.photoUrl} alt="avatar"/>
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
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>
            })
        }
    </div>
};

export default Users;
