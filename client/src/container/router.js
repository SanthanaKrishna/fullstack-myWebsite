import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../history';
import CreateAccount from './createAccount/CreateAccount';

export const RouteComponent = () => {
    return (
        <div className="container">
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={CreateAccount} />
                </Switch>
            </Router>
        </div>
    )
}