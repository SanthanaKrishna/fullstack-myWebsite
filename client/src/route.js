import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './container/auth/index';
import { createBrowserHistory } from 'history';
import Homepage from './container/homePage/index';
import Shopping from './container/shopping/index';
import Header from './component/Header';
import Login from './container/auth/Login/index';
import './index.scss';
import Test from './container/text';
import Exheader from './component/header2';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();

class Root extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Header />
                    <div className="body-wrapper">
                        <Switch>
                            <Route path="/" exact component={Homepage} />
                            <Route path='/shopping' component={Shopping} />
                            <Route path="/signup" component={Signup} />
                            <Route path='/login' component={Login} />
                            <Route path='/Test' component={Test} />
                            <Route path='/abc' component={Exheader} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default Root;