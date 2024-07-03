import Post from "./Post/Post";
import style from './MyPosts.module.css'
import {createRef} from "react";

const MyPosts = (props) => {

    const postElements = props.state.posts
        .map(post => (
        <Post
            key={post.id}
            message={post.post}
            likeCount={post.likeCount}/>
    ))

    const newPostElement = createRef()

    const addPostMessage = () => {
        props.dispatch({type: "ADD_POST"})
    }

    const onPostChange=()=>{
        let text=newPostElement.current.value;
        props.dispatch({type: "UPDATE_NEW_POST_TEXT",text})
    }

    return (
        <div className={style.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.state.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostMessage}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;