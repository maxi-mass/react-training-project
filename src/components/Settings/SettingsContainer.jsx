import React from "react";
import {connect} from "react-redux";
import Settings from "./Settings";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

class SettingsContainer extends React.Component {
    render() {
        return <Settings {...this.props} />
    }
}

let withAuthRedirectSettingsContainer = WithAuthRedirect(SettingsContainer);
const mapStateToProps = state => ({});
export default connect(mapStateToProps, {})(withAuthRedirectSettingsContainer);
