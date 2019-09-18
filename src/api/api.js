import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY" : "97771d01-b7c4-41cb-8ae9-e52b1b7430fa"
    }
});

export const usersAPI = {
    auth: () => {
        return axiosInstance
        .get(`/auth/me`)
        .then(response => response.data);
    },
    getUsers: ({currentPage, pageSize}) => {
        return axiosInstance
            .get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    getProfile: (userId) => {
        return  axiosInstance
            .get(`/profile/${userId}`)
            .then(response => response.data);
    },
    followUser: userId => {
        return axiosInstance
            .post(`/follow/${userId}`)
            .then(response => response.data);
    },
    unFollowUser: userId => {
        return axiosInstance
            .delete(`/follow/${userId}`)
            .then(response => response.data);
    }
};