import React from 'react';
import { Formik, Form } from 'formik';
import { graphql, compose } from 'react-apollo';
import { createAccountQuery, addAccountMutation } from '../../queries/AccountDetails';
import UserDetails from './userDetails';
import GoogleSign from '../login/googleSignin';

class CreateAccount extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            emailID: '',
                            password: '',
                            confirmPassword: '',
                            phoneNumber: ''
                        }}
                        validateOnBlur={false}
                        validateOnChange={false}
                        validate = {(values)=>{
                            console.log('validation', values)
                            let errors={};
                            if (values.password !== values.confirmPassword) {
                                errors.confirmPassword = "confirm passowrd should match password"
                            }
                            return errors;
                        }}
                            
                        onSubmit={(values, { setSubmitting }) => {
                            console.log('submit', values)
                            // event.preventDefault();
                            setTimeout(() => {
                                alert(JSON.stringify(values, null ,2));
                                setSubmitting(false);
                            }, 2000);
                        }}
                        render={props => (
                            <Form >
                                <UserDetails
                                    {...props}
                                />
                            </Form>
                        )}
                    />
                </div><br />
                <GoogleSign />
            </div>
        )
    }
}

export default compose(
    graphql(createAccountQuery, { name: "createAccountQuery" }),
    graphql(addAccountMutation, { name: "addAccountMutation" })
)(CreateAccount);