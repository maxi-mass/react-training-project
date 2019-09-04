import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar   from './components/Navbar/Navbar';
import Profile  from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Music    from './components/Music/Music';
import News     from './components/News/News';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/settings" component={Settings} />
                    <Route path="/profile" render={() => {
                        return <Profile store={props.store} />
                    }} />
                    <Route path="/dialogs" render={() => {
                        return <DialogsContainer store={props.store} />;
                    }}/>
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
