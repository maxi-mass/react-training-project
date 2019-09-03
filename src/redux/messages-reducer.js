const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

export const messagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageItem = {
                id: state.currentMessageId++,
                message: state.newMessageText
            };
            state.messages.push(newMessageItem);
            state.newMessageText = "";
            break;
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.changedNewMessageText;
            break;
        default:
    }

    return state;
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const onNewMessageChangeActionCreator = (newMessageText) => ({
    type: CHANGE_NEW_MESSAGE_TEXT,
    changedNewMessageText: newMessageText
});