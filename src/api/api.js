import * as axios from "axios";

export const getUsers = ({currentPage, pageSize}) => {
    return axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        }).then(response => response.data);
};

export const getProfile = userId => {
    return  axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => response.data);
};

export const followUser = userId => {
    return axios
        .post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY" : "97771d01-b7c4-41cb-8ae9-e52b1b7430fa"
            }
        }).then(response => response.data);
};

export const unFollowUser = userId => {
    return axios
        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                "API-KEY" : "97771d01-b7c4-41cb-8ae9-e52b1b7430fa"
            }
        }).then(response => response.data);
};