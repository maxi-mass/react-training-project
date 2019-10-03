import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {Field, reduxForm} from "redux-form";

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'message'} component={'textarea'} placeholder={'Input message'}/>
        </div>
        <div>
            <button>AddMessage</button>
        </div>
    </form>
};

const DialogsReduxForm = reduxForm({form: "dialogs"})(DialogsForm);

const Dialogs = (props) => {
    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map(item => <DialogItem
        id={item.id}
        name={item.name}
        key={item.id}
    />);

    let messagesElements = state.messages.map(item => <MessageItem
        id={item.id}
        messageText={item.message}
        key={item.id}
    />);

    let onSubmit = formData => {
        props.addMessage(formData.message);
    };

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>{dialogsElements}</div>
            <div className={d.messages}>
                {messagesElements}
                <div className={d.newMessage}>
                    <DialogsReduxForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    );
};

export default Dialogs;