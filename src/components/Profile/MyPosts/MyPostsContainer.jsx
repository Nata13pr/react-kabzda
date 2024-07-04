
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = () => {


    return <StoreContext.Consumer>
        {
            store=>{
                const state=store.getState();

                const onAddPostMessage = () => {
                    store.dispatch(addPostActionCreator())
                }

                const onPostChange = (text) => {
                    store.dispatch(updateNewPostActionCreator(text))
                }

                return (
                    <MyPosts
                        posts={state.profilePage.posts}
                        updatePostText={onPostChange}
                        addPost={onAddPostMessage}
                        newPostText={state.profilePage.newPostText}/>
                )
            }
        }
    </StoreContext.Consumer>



}
export default MyPostsContainer;