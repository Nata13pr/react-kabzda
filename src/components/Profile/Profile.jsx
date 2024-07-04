import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div
            className={style.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;