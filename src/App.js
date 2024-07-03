import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.store.sidebar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route
                        path="/dialogs"
                        element={
                            <Dialogs
                                state={props.store.dialogPage}
                                updateNewMessageText={props.updateNewMessageText}
                                addMessage={props.addMessage}
                            />
                        }/>
                    <Route
                        path="/profile"
                        element={
                            <Profile
                                store={props.store.profilePage}
                                addPost={props.addPost}
                                updateNewPostText={props.updateNewPostText}
                            />
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
                </Routes>
            </div>
        </div>
    );
}

export default App;
