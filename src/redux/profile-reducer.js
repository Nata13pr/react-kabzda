import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

const initialState = {
    posts: [
        {id: 1, post: 'I am new here', likeCount: '9'},
        {id: 2, post: 'Have you been in Greece', likeCount: '55'},
        {id: 3, post: 'I want to work', likeCount: '6'},
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPostObj = {
                id: 8,
                post: action.formData,
                likeCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPostObj],
                newPostText: ''
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,photos:action.photos
                }
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

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }

        default:
            return state;
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileApi.getUserProfileById(userId)
    dispatch(setUserProfile(response.data))
}

export const setUserStatus = (userId) => async (dispatch) => {
    const response = await profileApi.getUserStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileApi.updateUserStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto=(file)=>async (dispatch)=>{
    const response=await profileApi.savePhoto(file);

    if(response.data.resultCode===0){
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const addPost = (formData) => ({type: ADD_POST, formData});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess=(photos)=>({type:SAVE_PHOTO_SUCCESS,photos})


export default profileReducer;