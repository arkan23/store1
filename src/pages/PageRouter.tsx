import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from './Home';
import Catalog from './Catalog';
import Landing from './Landing';
import Authorize from './Authorization';

export default function PageRouter() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/catalog'>Catalog</Link>
                </li>
                <li>
                    <Link to='/landing'>Landing</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/catalog'>
                    <Catalog />
                </Route>
                <Route path='/landing'>
                    <Landing />
                </Route>
                <Route path='/authorization'>
                    <Authorize />
                </Route>
            </Switch>
        </Router>
    );
}
