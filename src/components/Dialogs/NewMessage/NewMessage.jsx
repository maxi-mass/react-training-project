import React from 'react';
import n from './NewMessage.module.css';

const NewMessage = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let messageText = newMessageElement.current.value;
        alert(messageText);
    };

    return (
        <div className={n.newMessage}>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>AddMessage</button>
            </div>
        </div>
    );
};

export default NewMessage;