import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './routes';
import {CurrentUserProvider} from "./context/currentUser";
import CurrentUserChecker from "./components/CurrentUserChecker";

const App = () => {
    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
                <Router>
                    <Routes />
                </Router>
            </CurrentUserChecker>
        </CurrentUserProvider>
    )
}

export default App;