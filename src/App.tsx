import React from 'react';
import './App.scss'
import {BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom'

import Authorize from "./pages/Authorization";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Landing from "./pages/Landing";

export default function App()
{
    return <Router>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/catalog">
                <Catalog/>
            </Route>
            <Route path="/landing">
                <Landing/>
            </Route>
            <Route path="/authorization">
                <Authorize/>
            </Route>
        </Switch>
    </Router>
}


