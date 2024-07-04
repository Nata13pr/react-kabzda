
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    const onAddPostMessage = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text))
    }

    return <MyPosts posts={props.store.store.profilePage.posts} updatePostText={onPostChange} addPost={onAddPostMessage} newPostText={props.store.store.profilePage.newPostText}/>

}
export default MyPostsContainer;