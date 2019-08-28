import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar   from './components/Navbar/Navbar';
import Profile  from './components/Profile/Profile';
import Dialogs  from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import Music    from './components/Music/Music';
import News     from './components/News/News';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/settings" component={Settings} />
                    <Route path="/profile" render={() => {
                        return <Profile profilePage={props.store._state.profilePage}
                                        addPost={props.store.addPost}
                                        changeNewPostText={props.store.changeNewPostText}
                        />
                    }} />
                    <Route path="/dialogs" render={() => {
                        return <Dialogs
                            messagesPage={props.store._state.messagesPage}
                            addMessage={props.store.addMessage}
                            changeNewMessageText={props.store.changeNewMessageText}
                        />;
                    }}/>
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
