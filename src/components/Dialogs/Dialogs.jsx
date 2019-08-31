import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import NewMessage from './NewMessage/NewMessage';
import n from "./NewMessage/NewMessage.module.css";
import {addMessageActionCreator, onNewMessageChangeActionCreator} from "../../redux/state";

const Dialogs = (props) => {
    let dialogsElements = props.messagesPage.dialogs.map(item => <DialogItem id={item.id} name={item.name} />);
    let messagesElements = props.messagesPage.messages.map(item => <MessageItem id={item.id} messageText={item.message} />);
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };
    let onNewMessageChange = () => {
        let newMessageText = newMessageElement.current.value;
        props.dispatch(onNewMessageChangeActionCreator(newMessageText));
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
                            ref={newMessageElement}
                            value={props.messagesPage.newMessageText}
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