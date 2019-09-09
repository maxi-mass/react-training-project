import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route} from 'react-router-dom';
import Navbar   from './components/Navbar/Navbar';
import Profile  from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Music    from './components/Music/Music';
import News     from './components/News/News';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/settings" component={Settings} />
                <Route path="/profile" render={() => {
                    return <Profile />
                }} />
                <Route path="/dialogs" render={() => {
                    return <DialogsContainer />;
                }}/>
                <Route path="/users" render={() => {
                    return <UsersContainer />;
                }}/>
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
            </div>
        </div>
    );
};

export default App;
