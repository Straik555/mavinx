import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components";

import App from './App';
import theme from "./styles/theme";
import {CurrentUserProvider} from "./context/currentUser";
import CurrentUserChecker from "./components/CurrentUserChecker";

ReactDOM.render(
    <CurrentUserProvider>
        <CurrentUserChecker>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </CurrentUserChecker>
    </CurrentUserProvider>,
  document.getElementById('root')
);

