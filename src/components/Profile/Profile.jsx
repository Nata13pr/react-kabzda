import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div
            className={style.content}>
            <ProfileInfo/>
            <MyPosts
                state={props.store}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;