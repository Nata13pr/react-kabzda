import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
    posts: [
        {id: 1, post: 'I am new here', likeCount: '9'},
        {id: 2, post: 'Have you been in Greece', likeCount: '55'},
        {id: 3, post: 'I want to work', likeCount: '6'},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPostObj = {
                id: 8,
                post: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPostObj],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const getUserById = (userId) => {
    return (dispatch) => {
        profileApi.getUserProfileById(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const setUserStatus = (userId) => {
    return (dispatch) => {
        profileApi.getUserStatus(userId)
            .then(response => {
                    dispatch(setStatus(response.data))
                }
            )
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileApi.updateUserStatus(status)
            .then(
                response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setStatus(status))
                    }
                }
            )
    }
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPost = (text) => ({type: UPDATE_NEW_POST_TEXT, text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export default profileReducer;