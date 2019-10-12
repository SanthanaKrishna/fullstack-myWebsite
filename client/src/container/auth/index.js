import React, { Component } from 'react';
import CreateAccount from './Signup';
import './styles.scss';

class Signup extends Component {
    render() {
        return (
            <div className="form-container">
                <CreateAccount />
                
            </div>
        )
    }
}

export default Signup;