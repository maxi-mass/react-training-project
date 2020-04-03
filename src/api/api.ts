import axios from 'axios'

const axiosInstance: any = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY" : "97771d01-b7c4-41cb-8ae9-e52b1b7430fa"
    }
});

export const usersAPI = {
    getUsers: async (paginationParams: any) => {
        const {currentPage, pageSize} = paginationParams;
        let response = await axiosInstance.get(`/users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    followUser: async (userId: number) => {
        let response = await axiosInstance.post(`/follow/${userId}`);
        return response.data;
    },
    unFollowUser: async (userId: number) => {
        let response = await axiosInstance.delete(`/follow/${userId}`);
        return response.data;
    },
};

export const profileAPI = {
    getProfile: async (userId: number) => {
        let response = await axiosInstance.get(`/profile/${userId}`);
        return response.data;
    },
    getStatus: async (userId: number) => {
        let response = await axiosInstance.get(`/profile/status/${userId}`);
        return response.data;
    },
    updateStatus: async (status: string) => {
        let response = await axiosInstance.put(`/profile/status`, {status});
        return response.data;
    }
};

export const authAPI = {
    auth: async () => {
        let response = await axiosInstance.get(`/auth/me`);
        return response.data;
    },
    login: async (loginData: any) => {
        let response = await axiosInstance.post('/auth/login', loginData);
        return response.data;
    },

    logout: async () => {
        let response = await axiosInstance.delete('/auth/login');
        return response.data;
    }
};
