import React from 'react';
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

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