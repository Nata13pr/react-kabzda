import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {Component} from "react";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (ComponentA) => {

    class RedirectComponent extends Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>

            return <ComponentA {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}

