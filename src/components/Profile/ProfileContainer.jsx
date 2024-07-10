import {Component} from "react";
import {connect} from "react-redux";

import Profile from "./Profile";
import {getUserById, setUserProfile} from "../../redux/profileReducer";
import withRouter from "./withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {

    componentDidMount() {

        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 2;
        }

        this.props.getUserById(userId)
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}/>

    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserById}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
