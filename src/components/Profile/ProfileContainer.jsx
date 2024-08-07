import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import Profile from "./Profile";
import {
    getUserProfile, savePhoto, saveProfile,
    setUserStatus,
    updateUserStatus
} from "../../redux/profile-reducer";
import withRouter from "./withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends Component {


    refreshProfile() {
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }

        this.props.getUserProfile(userId);
        this.props.setUserStatus(userId);
    }

    componentDidMount() {

        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return <Profile {...this.props}
                        profile={this.props.profile}
                        isOwner={!this.props.router.params.userId}
                        status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}
                        savePhoto={this.props.savePhoto}
        />

    }
}

const mapStateToProps = (state) => {
    return( {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    })
}

export default compose(
    connect(mapStateToProps, {getUserProfile, setUserStatus, updateUserStatus, savePhoto,saveProfile}),
    withRouter
)(ProfileContainer)
