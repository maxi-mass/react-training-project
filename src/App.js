import React from 'react';
import './App.css';
import {Redirect, Route, withRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from  "./components/Login/Login";
import SettingsContainer from "./components/Settings/SettingsContainer";
import {initialize} from "./redux/app-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount = () => {
        this.props.initialize();
    };

    render () {
        if (!this.props.initialized) {
            return <Preloader isFetching={true}/>
        }

        return <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/settings" render={() => <SettingsContainer />}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                <Route path="/dialogs" render={() => <DialogsContainer />}/>
                <Route path="/users" render={() => <UsersContainer />}/>
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/login" component={Login} />
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
});

export default compose (
    withRouter,
    connect(mapStateToProps, {initialize})
)(App)

