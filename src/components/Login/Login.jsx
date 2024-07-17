import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

import {authLogin} from "../../redux/auth-reducer";
import LoginForm from "./LoginForm";

const Login = (props) => {
    const onSubmit = (formData, setErrors) => {
        props.authLogin(formData, setErrors,formData.captcha)
    }

    if (props.isAuth) {

        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        captchaUrl:state.auth.captchaUrl
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
