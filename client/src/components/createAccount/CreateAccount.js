import React from 'react';
import { Formik, Form } from 'formik';
import { graphql, compose } from 'react-apollo';
import { createAccountQuery, createAccountMutation } from '../../queries/AccountDetails';
import UserDetails from './userDetails';
import GoogleSign from '../login/googleSignin';

class CreateAccount extends React.PureComponent {

    render() {
        const { createAccountMutation } = this.props;
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
                        validate={(values) => {
                            let errors = {};
                            if (values.password !== values.confirmPassword) {
                                errors.confirmPassword = "confirm passowrd should match password"
                            }
                            return errors;
                        }}

                        onSubmit={(values, { setSubmitting }) => {
                            console.log('submit', this.props);
                            createAccountMutation({
                                variables:{
                                    firstName: values.firstName,
                                    lastName: values.lastName,
                                    emailID: values.emailID,
                                    passowrd: values.password,
                                    phoneNumber: values.phoneNumber
                                },
                                refetchQueries:[{
                                    query: createAccountQuery
                                }]
                            })
                            // event.preventDefault();
                            // this.props.mutate({
                            //     variables: {
                            //         firstName: values.firstName,
                            //         lastName: values.lastName,
                            //         emailID: values.emailID,
                            //         passowrd: values.confirmPassword,
                            //         phoneNumber: values.phoneNumber
                            //     },
                            //     refetchQueries: [{ createAccountQuery }]
                            // }).then(() => {
                            //     console.log('Your account is sucessfully created and stored in db')
                            // })
                            // this.props.signUp(values)
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
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
    graphql(createAccountMutation, { name: "createAccountMutation" })
)(CreateAccount);