import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY" : "97771d01-b7c4-41cb-8ae9-e52b1b7430fa"
    }
});

export const usersAPI = {
    getUsers: ({currentPage, pageSize}) => {
        return axiosInstance
            .get(`/users?page=${currentPage}&count=${pageSize}`)
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
    },
};

export const profileAPI = {
    getProfile: (userId) => {
        return  axiosInstance
            .get(`/profile/${userId}`)
            .then(response => response.data);
    },
    getStatus: userId => {
        return axiosInstance
            .get(`/profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus: (status) => {
        return axiosInstance
            .put(`/profile/status`, {status})
            .then(response => response.data);
    }
};

export const authAPI = {
    auth: () => {
        return axiosInstance
            .get(`/auth/me`)
            .then(response => response.data);
    },
    login: loginData => {
        return axiosInstance
            .post('/auth/login', loginData)
            .then(response => response.data);
    },

    logout: () => {
        return axiosInstance
            .delete('/auth/login')
            .then(response => response.data);
    }
};