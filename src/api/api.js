import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "2efad1eb-1dc3-43ce-9415-890f0c98e464"
    }
})

const usersApi = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
}

const followApi = {
    follow: (userId) => {
        return instance.post(`follow/${userId}`)
    },
    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
    }
}

const authApi = {
    login: () => {
        return instance.get(`auth/me`);
    }
}

const profileApi = {
    getUserProfileById: (userId) => {
        return instance.get(`/profile/${userId}`)
    },
    getUserStatus:(userId)=>{
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus:(status)=>{
        return instance.put(`profile/status`,{status:status})
    }
}
export {
    usersApi,
    followApi,
    authApi,
    profileApi
}