import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, followSuccess,
    getUsers, getUsersByPage,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress, unfollow,
    unfollowSuccess,

} from "../../redux/userReducer";
import React, {Component} from "react";
import Preloader from "../../common/preloader/Preloader";

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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        disabledUsersButtonDuringFetching: state.usersPage.disabledUsersButtonDuringFetching
    }
}

export default connect(mapStateToProps,
    {
        followSuccess,
        unfollowSuccess,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleIsFollowingProgress,
        getUsers,
        unfollow,
        follow,
        getUsersByPage
    }
)(UsersContainer)