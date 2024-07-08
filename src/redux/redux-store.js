import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import userReducer from "./userReducer";
import authReducer from "./auth-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sideBarReducer,
    usersPage: userReducer,
    auth: authReducer,
})

const store = createStore(reducers);

window.store = store;

export default store;

