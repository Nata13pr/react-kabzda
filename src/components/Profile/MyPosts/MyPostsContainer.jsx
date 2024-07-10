import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}


export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)