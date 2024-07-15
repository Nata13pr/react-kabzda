import {authApi} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const getAuthUserData = () => {
    return (dispatch) => {
        return authApi.me()
            .then(response => {
                    if (response.data.resultCode === 0) {
                        const {email, login, id} = response.data.data;
                        dispatch(setUserData(id, login, email, true))
                    }
                }
            )
    }
}

export const authLogin = (data,setErrors) => {
    return (dispatch) => {
        authApi.login(data.email, data.password, data.rememberMe)

            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(getAuthUserData())
                    } else {
                        console.log(response)
                        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                        setErrors({ email: message });
                    }
                }
            )
    }
}
export const authLogout = (data) => {

    return (dispatch) => {

        authApi.logout()
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setUserData(null, null, null, false))
                    }
                }
            )
    }
}


export const setUserData = (userId, login, email, isAuth) => {
    return ({
        type: SET_USER_DATA,
        data: {userId, login, email, isAuth}
    });
}


export default authReducer;