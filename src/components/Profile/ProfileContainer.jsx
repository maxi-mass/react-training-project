import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getProfileStatus, updateProfileStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1654;
        }
        this.props.getProfileStatus(userId);
        this.props.getUserProfile(userId);
    };

    render = () => {
        return <Profile {...this.props} 
            userProfile={this.props.userProfile}
            status={this.props.status}
            updateProfileStatus={this.props.updateProfileStatus} 
        />;
    }
}
const mapStateToProps = state => ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
});
export default compose(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus}),
    withRouter,
    //WithAuthRedirect
)(ProfileContainer);