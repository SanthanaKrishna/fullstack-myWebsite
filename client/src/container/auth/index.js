import React, { Component } from 'react';
import CreateAccount from './Signup';
import './auth.scss';

class Signup extends Component {
    render() {
        return (
            <div className="container create-account" id="create-account">
                    <CreateAccount />
            </div>
        )
    }
}

export default Signup;