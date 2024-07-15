import './App.css';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import Preloader from "./common/preloader/Preloader";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import {compose} from "redux";
import withRouter from "./components/Profile/withRouter";


class App extends Component {

    componentDidMount() {
        // console.log(this.props.initializeApp(),'method')
       this.props.initializeApp()
    }

    render() {
        // console.log(this.props.initialized,'initialized')
        if (!this.props.initialized) {
            return <Preloader/>
        }
        // console.log(this.props.initialized,'initialized')
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
                            element={
                                <DialogsContainer
                                />
                            }/>
                        <Route
                            path="/profile/:userId?"
                            element={
                                <ProfileContainer/>
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
                            element={
                                <UsersContainer
                                />
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


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
