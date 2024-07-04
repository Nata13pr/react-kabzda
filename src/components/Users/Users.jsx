import React from 'react';
import styles from './user.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://upload.wikimedia.org/wikipedia/ru/5/5c/%D0%9D%D0%B8%D0%BD%D0%B0_%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%B0%D1%8F_%D0%BF%D0%BB%D0%B5%D0%BD%D0%BD%D0%B8%D1%86%D0%B0.jpg',
                followed: true,
                fullName: 'Nina',
                status: "I am archeologist",
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoURL: 'https://upload.wikimedia.org/wikipedia/ru/5/5c/%D0%9D%D0%B8%D0%BD%D0%B0_%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%B0%D1%8F_%D0%BF%D0%BB%D0%B5%D0%BD%D0%BD%D0%B8%D1%86%D0%B0.jpg',
                followed: false,
                fullName: 'Misha',
                status: "I am  new in archeology",
                location: {city: 'Washington', country: 'USA'}
            },
            {
                id: 3,
                photoURL: 'https://upload.wikimedia.org/wikipedia/ru/5/5c/%D0%9D%D0%B8%D0%BD%D0%B0_%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%B0%D1%8F_%D0%BF%D0%BB%D0%B5%D0%BD%D0%BD%D0%B8%D1%86%D0%B0.jpg',
                followed: true,
                fullName: 'Slava',
                status: "I am a student",
                location: {city: 'Madrid', country: 'Spain'}
            }]
        )
    }

    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoURL} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;