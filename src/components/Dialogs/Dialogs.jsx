import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(item => <DialogItem id={item.id} name={item.name} />);
    let messagesElements = props.messages.map(item => <MessageItem id={item.id} messageText={item.message} />);

    let addMessage = () => {
        props.addMessage();
    };

    let onNewMessageChange = (event) => {
        let newMessageText = event.target.value;
        props.onNewMessageChange(newMessageText);
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
                            value={props.newMessageText}
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