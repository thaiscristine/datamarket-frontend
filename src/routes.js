import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Login from './pages/Login';
import Recover from './pages/Recover';
import Profile from './pages/Profile';
import Products from './pages/Products';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Logon } />
                <Route path="/login" component={ Login } />
                <Route path="/recover" component={ Recover } />
                <Route path="/profile" component={ Profile } />
                <Route path="/products" component={ Products } />
                <Route path="/incidents/new" component={ NewIncident  } />
            </Switch>
        </BrowserRouter>
    );
}