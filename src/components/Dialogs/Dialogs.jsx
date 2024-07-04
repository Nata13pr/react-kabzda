import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

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

    const addMessage = () => {
        props.addMessage()
    }

    const onMessageChange = (e) => {
        console.log(e,'ssssssssssss')
        let text = e.target.value;
        props.updateMessageText(text)
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
                          value={props.newMessageText}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}
export default Dialogs;