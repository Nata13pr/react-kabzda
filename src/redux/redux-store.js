import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk as thunkMiddleware }from "redux-thunk";

import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sideBarReducer,
    usersPage: userReducer,
    auth: authReducer,
    app:appReducer

})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;

