import {Component} from "react";
import {connect} from "react-redux";

import Profile from "./Profile";
import {getUserById, setUserProfile, setUserStatus, updateUserStatus} from "../../redux/profileReducer";
import withRouter from "./withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {

    componentDidMount() {

        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login");
            }
        }

        this.props.getUserById(userId)
        this.props.setUserStatus(userId)
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>

    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status,
        authorizedUserId:state.auth.userId,
        isAuth:state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserById,setUserStatus,updateUserStatus}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
