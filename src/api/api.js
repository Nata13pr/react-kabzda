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
    me: () => {
        return instance.get(`auth/me`);
    },
    login: (email, password, rememberMe) => {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout: () => {
        return instance.delete('auth/login')
    }
}

const profileApi = {
    getUserProfileById: (userId) => {
        return instance.get(`/profile/${userId}`)
    },
    getUserStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus: (status) => {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile){
        const formData=new FormData();
        formData.append('image',photoFile);

        return instance.put(`profile/photo`,formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile );
    }
}
export {
    usersApi,
    followApi,
    authApi,
    profileApi
}