import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
       const state=store.getState();
            const addMessage = () => {
                store.dispatch(addMessageActionCreator())
            }

            const onMessageChange = (text) => {
                store.dispatch(updateNewMessageActionCreator(text))
            }
            return (
                <Dialogs newMessageText={state.dialogPage.newMessageText}
                         dialogs={state.dialogPage.dialogs} updateMessageText={onMessageChange}
                         addMessage={addMessage} messages={state.dialogPage.messages}/>
            )
        }}
    </StoreContext.Consumer>

}
export default DialogsContainer;