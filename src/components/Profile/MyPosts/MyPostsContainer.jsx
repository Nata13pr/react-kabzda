import {connect} from "react-redux";

import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
    }
}
export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)