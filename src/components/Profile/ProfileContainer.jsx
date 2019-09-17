import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        usersAPI.getProfile(userId).then(response => {
            this.props.setUserProfile(response);
        });
    };

    render = () => <Profile {...this.props} userProfile={this.props.userProfile}/>
}

const mapStateToProps = state => {
    return {
        userProfile: state.profilePage.userProfile
    };
};

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
