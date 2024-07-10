import Post from "./Post/Post";
import style from './MyPosts.module.css'
import MyPostForm from "./MyPostForm";

const MyPosts = (props) => {

    const postElements = props.posts
        .map(post => (
            <Post
                key={post.id}
                message={post.post}
                likeCount={post.likeCount}/>
        ))


    const onSubmit = (formData) => {
        props.addPost(formData.myPost)
    }

    return (
        <div className={style.postsBlock}>
            My posts
            <MyPostForm onSubmit={onSubmit}/>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;