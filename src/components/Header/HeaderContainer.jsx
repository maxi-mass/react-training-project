import React from 'react';
import {connect} from "react-redux";
import {loginUser, logout} from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        this.props.loginUser();
    };

    render = () => <Header {...this.props} />;
}

export default connect(state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
}), {loginUser, logout})(HeaderContainer);
