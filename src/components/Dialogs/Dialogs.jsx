import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {createRef} from "react";


const Dialogs = (props) => {

    const newMessage = createRef()

    const dialogsElements = props.state.dialogs
        .map(dialog => (<DialogItem
            key={dialog.id}
            name={dialog.name}
            id={dialog.id}
            image={dialog.image}/>));

    const messageElements = props.state.messages
        .map(message => (<MessageItem key={message.id}
                                      message={message.message}/>))

    const addMessage = () => {
        props.dispatch({type: 'ADD_MESSAGE'})
    }

    const onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch({type: 'UPDATE_NEW_MESSAGE_TEXT', text:text})
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
                <textarea ref={newMessage} onChange={onMessageChange} value={props.state.newMessageText}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}
export default Dialogs;