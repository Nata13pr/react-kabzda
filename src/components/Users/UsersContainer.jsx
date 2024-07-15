import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    getUsers,
    getUsersByPage,
     unfollow,


} from "../../redux/userReducer";
import React, {Component} from "react";
import Preloader from "../../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersByPage(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged}
                    disabledUsersButtonDuringFetching={this.props.disabledUsersButtonDuringFetching}
                />
            </>
        );
    }
}


const mapStateToProps = (state) => {

    return {
        users: getUsers(),
        pageSize: getPageSize(),
        totalUsersCount: getTotalUsersCount(),
        currentPage: getCurrentPage(),
        isFetching: getIsFetching(),
        disabledUsersButtonDuringFetching: getFollowingInProgress()
    }
}


export default compose(
    connect(mapStateToProps,
        {
            getUsers,
            unfollow,
            follow,
            getUsersByPage
        }
    ),
    withAuthRedirect
)
(UsersContainer)

