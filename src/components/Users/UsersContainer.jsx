import {connect} from "react-redux";
import {compose} from "redux";
import React, {Component} from "react";

import Users from "./Users";
import {
    follow,
    getUsersByPage, requestUsers,
    unfollow
} from "../../redux/user-reducer";

import Preloader from "../../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,
} from "../../redux/users-selectors";

class UsersContainer extends Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    followingInProgress={this.props.followingInProgress}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getUsers: requestUsers,
            unfollow,
            follow,
            getUsersByPage
        }
    ),
    withAuthRedirect
)
(UsersContainer)

