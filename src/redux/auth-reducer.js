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
                isAuth: true
            }
        default:
            return state;
    }
}

export const authLogin = () => {

    return (dispatch) => {
        authApi.login()
            .then(response => {
                    if (response.data.resultCode === 0) {
                        const {email, login, id} = response.data.data;
                        dispatch(setUserData(id, login, email))
                    }
                }
            )
    }
}

export const setUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}});
export default authReducer;