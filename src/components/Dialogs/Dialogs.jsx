import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import NewMessage from './NewMessage/NewMessage';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(item => <DialogItem id={item.id} name={item.name} />);
    let messagesElements = props.messages.map(item => <MessageItem id={item.id} messageText={item.message} />);

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>{dialogsElements}</div>
            <div className={d.messages}>
                {messagesElements}
                <NewMessage/>
            </div>
        </div>
    );
};

export default Dialogs;