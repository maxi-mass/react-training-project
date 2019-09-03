import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {addMessageActionCreator, onNewMessageChangeActionCreator} from "../../redux/messages-reducer";

const Dialogs = (props) => {
    let messagesPage = props.store.getState().messagesPage;
    let dialogsElements = messagesPage.dialogs.map(item => <DialogItem id={item.id} name={item.name} />);
    let messagesElements = messagesPage.messages.map(item => <MessageItem id={item.id} messageText={item.message} />);

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };
    let onNewMessageChange = (event) => {
        let newMessageText = event.target.value;
        props.store.dispatch(onNewMessageChangeActionCreator(newMessageText));
    };

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>{dialogsElements}</div>
            <div className={d.messages}>
                {messagesElements}
                <div className={d.newMessage}>
                    <div>
                        <textarea
                            onChange={onNewMessageChange}
                            value={messagesPage.newMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={addMessage}>AddMessage</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;