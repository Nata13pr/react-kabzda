import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,

} from "../../redux/userReducer";
import React, {Component} from "react";
import Preloader from "../../common/preloader/Preloader";
import {usersApi} from "../../api/api";


class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsFetching(true);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                    this.props.toggleIsFetching(false);
                }
            )
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);
            })
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
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPage(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCount(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
    }
)(UsersContainer)