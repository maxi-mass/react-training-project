import React from 'react';
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import Header from "./Header";
import * as axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
                headers: {
                    "API-KEY" : "97771d01-b7c4-41cb-8ae9-e52b1b7430fa"
                }
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
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
