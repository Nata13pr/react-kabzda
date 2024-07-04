const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessageObj = {
                id: 7,
                message: state.newMessageText,
            }
            state.messages.push(newMessageObj);
            state.newMessageText = '';
            return state;
        case  UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default:
            return state
    }
}
export default dialogReducer;

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text});

