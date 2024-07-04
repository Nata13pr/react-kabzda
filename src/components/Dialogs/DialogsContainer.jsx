import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    console.log(props.store.store.dialogPage.newMessageText)
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text))
    }

    return <Dialogs newMessageText={props.store.store.dialogPage.newMessageText}
                    dialogs={props.store.store.dialogPage.dialogs} updateMessageText={onMessageChange}
                    addMessage={addMessage} messages={props.store.store.dialogPage.messages}/>
}
export default DialogsContainer;