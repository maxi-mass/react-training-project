import {addMessageActionCreator, onNewMessageChangeActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText
});

const mapDispatchToProps = dispatch => ({
    addMessage: () => dispatch(addMessageActionCreator()),
    onNewMessageChange: newMessageText => dispatch(onNewMessageChangeActionCreator(newMessageText))
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;