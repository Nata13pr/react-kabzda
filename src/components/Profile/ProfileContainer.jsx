import {Component} from "react";
import {connect} from "react-redux";

import Profile from "./Profile";
import {getUserById, setUserProfile} from "../../redux/profileReducer";
import withRouter from "./withRouter";

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

const WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile,getUserById})(WithRouterProfileContainer)