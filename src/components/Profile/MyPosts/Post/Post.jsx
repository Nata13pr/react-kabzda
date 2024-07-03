import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img
                src="https://www.custode.com/wordpress/wp-content/uploads/2013/06/ArcheoLogo.png"
                alt={'ava'}
            />
            {props.message}
            <div>
                <span>like</span> {props.likeCount}
            </div>

        </div>
    )
}

export default Post;