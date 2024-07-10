import React, {Component} from 'react';
import {connect} from "react-redux";

import Header from "./Header";
import {authLogout, authMe, setUserData} from "../../redux/auth-reducer";

class HeaderContainer extends Component {

    componentDidMount() {

        this.props.authMe()
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
export default connect(mapStateToProps, {setUserData,authMe,authLogout})(HeaderContainer)