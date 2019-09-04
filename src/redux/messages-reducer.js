const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs :  [
        {name: "Maximas", id: 11},
        {name: "Dasha", id: 2},
        {name: "Ivan", id: 3},
        {name: "Alex", id: 4},
        {name: "Statyan", id: 5},
        {name: "Igoriyan", id: 6}
    ],
    messages : [
        {message: "Hello world", id: 1},
        {message: "Hey, how are you?", id: 2},
        {message: "Thanks, I'm fine!", id: 3},
        {message: "Why nobody loves me?", id: 4},
        {message: "Stasyan Yo", id: 5},
        {message: "Igoriyan Yo", id: 6}
    ],
    currentMessageId : 7,
    newMessageText: ""
};

export const messagesReducer = (state = initialState, action) => {
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