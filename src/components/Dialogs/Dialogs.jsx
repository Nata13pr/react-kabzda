import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import DialogsForm from "./DialogsForm";


const Dialogs = (props) => {

    const dialogsElements = props.dialogs
        .map(dialog => (<DialogItem
            key={dialog.id}
            name={dialog.name}
            id={dialog.id}
            image={dialog.image}/>));

    const messageElements = props.messages
        .map(message => (<MessageItem key={message.id}
                                      message={message.message}/>))


    const onSubmit = (formData) => {
        props.addMessage(formData.myMessage)
    }

    return (
        <div
            className={style.dialogs}>
            <div
                className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div
                className={style.messagesItems}>
                {messageElements}
                <DialogsForm onSubmit={onSubmit}/>
            </div>

        </div>
    )
}
export default Dialogs;