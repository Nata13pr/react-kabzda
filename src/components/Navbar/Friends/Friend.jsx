import React from 'react';

import style from './../Navbar.module.css'

const Friend = (props) => {
    return (
        <div className={style.friend}>
            <div>
                <img
                    className={style.avatarImage}
                    src={props.image}
                    alt={'avatarka'}/>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    );
};

export default Friend;