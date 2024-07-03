import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";

export const rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <BrowserRouter>
            <App
                store={state}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)