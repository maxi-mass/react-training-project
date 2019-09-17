import React from 'react';
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import Header from "./Header";
import {usersAPI} from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        usersAPI.auth().then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                this.props.setUserData(id, email, login);
            }
        });
    };

    render = () => <Header {...this.props} />;
}

export default connect(state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
}), {setUserData})(HeaderContainer);
