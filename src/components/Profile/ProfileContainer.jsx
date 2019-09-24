import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "react-redux";

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        userId = userId ? userId : 2;
        this.props.getUserProfile(userId);
    };

    render = () => {
        return <Profile {...this.props} userProfile={this.props.userProfile}/>;
    }
}
export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
/*
let withAuthRedirectProfileContainer = WithAuthRedirect(ProfileContainer);

const mapStateToProps = state => ({
    userProfile: state.profilePage.userProfile
});

export default connect(mapStateToProps, {getUserProfile})(withRouter(withAuthRedirectProfileContainer));
*/