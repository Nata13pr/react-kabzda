import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";

export const rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <BrowserRouter>
            <App
                store={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
})