import React from 'react';
import {NavLink} from "react-router-dom";

import style from "../Dialogs.module.css";

const DialogItem = (props) => {

    return (
        <div className={style.dialog}>

            <div>
                <img src={props.image} alt={'avatarka'}/>
                <NavLink
                    to={`/dialogs/${props.id}`}>
                    {props.name}
                </NavLink>
            </div>
        </div>
    )
        ;
};

export default DialogItem;