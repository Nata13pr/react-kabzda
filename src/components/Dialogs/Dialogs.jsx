import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogReducer";


const Dialogs = (props) => {

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
        props.dispatch(addMessageActionCreator())
    }

    const onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageActionCreator(text))
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
                <textarea placeholder={'Enter your message'} onChange={onMessageChange}
                          value={props.state.newMessageText}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}
export default Dialogs;