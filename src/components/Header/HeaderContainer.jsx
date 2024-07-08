import React, {Component} from 'react';
import {connect} from "react-redux";

import Header from "./Header";
import {setUserData} from "../../redux/auth-reducer";
import {authApi} from "../../api/api";

class HeaderContainer extends Component {

    componentDidMount() {

        authApi.login()
            .then(response => {
                    if (response.data.resultCode === 0) {
                        const {email, login, id} = response.data.data;
                        this.props.setUserData(id, login, email)
                    }
                }
            )
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
export default connect(mapStateToProps, {setUserData})(HeaderContainer)