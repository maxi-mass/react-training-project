import {addMessageActionCreator, onNewMessageChangeActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "react-redux";

const mapStateToProps = state => ({
    messagesPage: state.messagesPage
});
export default compose(
    connect(mapStateToProps, {addMessageActionCreator, onNewMessageChangeActionCreator}),
    WithAuthRedirect
)(Dialogs);
