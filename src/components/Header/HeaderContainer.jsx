import React, {Component} from 'react';
import {connect} from "react-redux";

import Header from "./Header";
import {authLogin, setUserData} from "../../redux/auth-reducer";

class HeaderContainer extends Component {

    componentDidMount() {

        this.props.authLogin()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }

}
export default connect(mapStateToProps, {setUserData,authLogin})(HeaderContainer)