import React, {Component} from "react";
import styles from "./user.module.css";
import axios from "axios";

class Users extends Component {

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items)
            )
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img
                                src={user.photos.small ? user.photos.small : 'https://st.depositphotos.com/1537427/3571/v/450/depositphotos_35717211-stock-illustration-vector-user-icon.jpg'}
                                className={styles.userPhoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(user.id)
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
}

export default Users;