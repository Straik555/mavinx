import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './routes';
import {CurrentUserProvider} from "./context/currentUser";

const App = () => {
    return (
        <CurrentUserProvider>
            <Router>
                <Routes />
            </Router>
        </CurrentUserProvider>
    )
}

export default App;