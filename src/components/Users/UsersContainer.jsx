import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/userReducer";

const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)