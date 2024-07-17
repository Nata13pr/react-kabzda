import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {Component, lazy} from "react";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./common/preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import withRouter from "./components/Profile/withRouter";
import './App.css';
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

// const DialogsContainer=lazy(() => import("./components/Dialogs/DialogsContainer"));
// const ProfileContainer=lazy(() => import("./components/Profile/ProfileContainer"));
// const UsersContainer=lazy(() => import("./components/Users/UsersContainer"));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route
                            path="/login/*"
                            element={
                                <Login
                                />
                            }/>
                        <Route
                            path="/dialogs/*"
                            // element={withSuspense(DialogsContainer)
                            element={<DialogsContainer/>
                            }/>
                        <Route
                            path="/profile/:userId?"
                            // element={withSuspense(ProfileContainer)
                            element={<ProfileContainer/>
                            }/>
                        <Route
                            path="/news"
                            element={
                                <News/>
                            }/>
                        <Route
                            path="/music"
                            element={
                                <Music/>
                            }/>
                        <Route
                            path="/settings"
                            element={
                                <Settings/>
                            }/>
                        <Route
                            path="/users"
                            element={<UsersContainer/>
                            }/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        initialized: state.app.initialized
    }
}

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const SamuraiJSApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;