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
                ...action.payload,
            }

        default:
            return state;
    }
}

export const getAuthUserData = () => async (dispatch) => {
    let response = await authApi.me()

    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        dispatch(setUserData(id, email, login, true))
    }
}

export const authLogin = (data, setErrors) => async (dispatch) => {
    const response = await authApi.login(data.email, data.password, data.rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        setErrors({email: message});
    }

}
export const authLogout = () => async (dispatch) => {

    const response = await authApi.logout()

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export const setUserData = (userId, email, login, isAuth) => {
    return ({
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    });
}

export default authReducer;