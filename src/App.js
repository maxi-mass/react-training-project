import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from  "./components/Login/Login";
import SettingsContainer from "./components/Settings/SettingsContainer";

const App = () => {
    return (
        <div className="app-wrapper">
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
    );
};

export default App;
