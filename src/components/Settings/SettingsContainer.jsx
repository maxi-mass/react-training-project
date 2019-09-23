import React from "react";
import {connect} from "react-redux";
import Settings from "./Settings";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

class SettingsContainer extends React.Component {
    render() {
        return <Settings {...this.props} />
    }
}

let withAuthRedirectComponent = WithAuthRedirect(SettingsContainer);
const mapStateToPropsForRedirect = state => ({
    isAuth: state.auth.isAuth
});
withAuthRedirectComponent = connect(mapStateToPropsForRedirect)(withAuthRedirectComponent);

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(withAuthRedirectComponent);

