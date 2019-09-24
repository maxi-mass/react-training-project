import {addMessageActionCreator, onNewMessageChangeActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

let withAuthRedirectDialogs = WithAuthRedirect(Dialogs);

const mapStateToProps = state => ({
    messagesPage: state.messagesPage
});

export default connect(mapStateToProps, {addMessageActionCreator, onNewMessageChangeActionCreator})(withAuthRedirectDialogs);
