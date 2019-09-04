import React from 'react';
import {addMessageActionCreator, onNewMessageChangeActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };
    let onNewMessageChange = (newMessageText) => {
        props.store.dispatch(onNewMessageChangeActionCreator(newMessageText));
    };

    return <Dialogs
        onNewMessageChange={onNewMessageChange}
        addMessage={addMessage}
        dialogs={props.store.getState().messagesPage.dialogs}
        messages={props.store.getState().messagesPage.messages}
        newMessageText={props.store.getState().messagesPage.newMessageText}
    />;
};

export default DialogsContainer;