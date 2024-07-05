import {addPost, updateNewPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}


export const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPost})(MyPosts)