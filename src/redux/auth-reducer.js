import {authApi, securityApi} from "../api/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl:null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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

export const authLogin = (data, setErrors,captcha) => async (dispatch) => {
    const response = await authApi.login(data.email, data.password, data.rememberMe,captcha)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if(response.data.resultCode===10){
            dispatch(getCaptchaUrl())
        }

        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        setErrors({email: message});
    }

}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityApi.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
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

export const getCaptchaUrlSuccess=(captchaUrl) => async (dispatch) => ({
    type:GET_CAPTCHA_URL_SUCCESS,payload:{captchaUrl}
})

export default authReducer;