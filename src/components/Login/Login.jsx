import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {authLogin} from "../../redux/auth-reducer";
import LoginForm from "./LoginForm";
import {Navigate} from "react-router-dom";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.authLogin(formData)
    }

    if(props.isAuth){

        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps,
        {
            authLogin
        }
    ),
)
(Login)
