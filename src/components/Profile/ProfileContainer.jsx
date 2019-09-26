import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        userId = userId ? userId : this.props.auth.userId;
        this.props.getUserProfile(userId);
    };

    render = () => {
        return <Profile {...this.props} userProfile={this.props.userProfile} />;
    }
}
const mapStateToProps = state => ({
    userProfile: state.profilePage.userProfile,
    auth: state.auth
});
export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    //WithAuthRedirect
)(ProfileContainer);