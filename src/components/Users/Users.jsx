import React from "react";
import styles from "./user.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followApi} from "../../api/api";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map(page => {
                        return <span
                            key={page}
                            className={props.currentPage === page ? styles.selectedPage : ''}
                            onClick={() => {
                                props.onPageChanged(page)
                            }}>
                            {page}
                        </span>
                    })
                }
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <NavLink to={`/profile/${user.id}`}>
                            <div>
                            <img
                                src={user.photos.small ? user.photos.small : 'https://st.depositphotos.com/1537427/3571/v/450/depositphotos_35717211-stock-illustration-vector-user-icon.jpg'}
                                className={styles.userPhoto}
                                alt={'user Avatar'}
                            />
                        </div>
                        </NavLink>

                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    followApi.unfollow(user.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(user.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    followApi.follow(user.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                        })
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>user.location.country</div>
                            <div>user.location.city</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}


export default Users;