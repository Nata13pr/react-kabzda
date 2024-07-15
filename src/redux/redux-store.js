import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import userReducer from "./userReducer";
import authReducer from "./auth-reducer";
import {thunk as thunkMiddleware }from "redux-thunk";
import appReducer from "./appReducer";

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

