import {memo} from "react";

import Post from "./Post/Post";
import style from './MyPosts.module.css'
import MyPostForm from "./MyPostForm";

const MyPosts = memo(props => {

    const postElements =
        [...props.posts]
            .reverse()
            .map(post => (
                <Post
                    key={post.id}
                    message={post.post}
                    likeCount={post.likeCount}/>
            ))


    const onAddPost = (formData) => {
        console.log(formData, 'formData')
        props.addPost(formData.myPost)
    }

    return (
        <div className={style.postsBlock}>
            My posts
            <MyPostForm onSubmit={onAddPost}/>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
})

export default MyPosts;