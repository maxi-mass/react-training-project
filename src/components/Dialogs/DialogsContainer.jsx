import React from 'react';
import {addMessageActionCreator, onNewMessageChangeActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    };
                    let onNewMessageChange = (newMessageText) => {
                        store.dispatch(onNewMessageChangeActionCreator(newMessageText));
                    };

                    return <Dialogs
                        onNewMessageChange={onNewMessageChange}
                        addMessage={addMessage}
                        dialogs={store.getState().messagesPage.dialogs}
                        messages={store.getState().messagesPage.messages}
                        newMessageText={store.getState().messagesPage.newMessageText}
                    />;
                }
            }
        </StoreContext.Consumer>
    );

};

export default DialogsContainer;