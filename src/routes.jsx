import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Authentication from "./page/Authentication";
import UserProfile from "./page/UserProfile";
import Main from "./page/Main";

const Routes = () => {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <Redirect to={'/login'} />} />
            <Route path='/login' component={Authentication} />
            <Route path={'/register'} component={Authentication} />
            <Route path='/profiles' component={UserProfile} />
            <Route path='/main' component={Main} />
        </Switch>
    )
}

export default Routes;