import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './container/auth/index';
import { createBrowserHistory } from 'history';
import Homepage from './container/homePage/index';

const history = createBrowserHistory();
class Root extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                    <Route path="/" component={Homepage} />
                        <Route path="/signup" exact component={Signup} />
                        
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default Root;