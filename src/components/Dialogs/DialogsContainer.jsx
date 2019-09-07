import {addMessageActionCreator, onNewMessageChangeActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    messagesPage: state.messagesPage,
});

const mapDispatchToProps = dispatch => ({
    addMessage: () => dispatch(addMessageActionCreator()),
    onNewMessageChange: newMessageText => dispatch(onNewMessageChangeActionCreator(newMessageText))
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;