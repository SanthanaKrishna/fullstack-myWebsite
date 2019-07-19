import React from 'react';
import { Formik, FormikProps, withFormik, Field, Form, ErrorMessage } from 'formik';
import Fieldvalidation from '../../utils/validation';

const Errors = {
    requiredError: {
        userName: "Enter your First Name",
        emailId: "Enter a valid email address",
        confirmEmail: "You must confirm Email",
        mobileNumber: "Enter a valid Phone number"
    },
    invalidError: {
        emailId: "Enter a valid email address",
        confirmEmail: "Email and Confirm Email dIdn't match",
        mobileNumber: "Provide a valid contact number"
    }
}


class UserDetails extends React.Component {

    onInputChange = (event) => {
        const { setFieldValue } = this.props;
        const { name, value } = event.target;
        let inputValue = '';
        if (name === 'firstName' || name === 'lastName') {
            inputValue = Fieldvalidation.limitMaxValue(value, 20);
            setFieldValue(name, inputValue);
        }
        else if (name === 'emailID') {
            // inputValue = Fieldvalidation.emailValidate(value, Errors)
            setFieldValue(name, value)
        } else if (name === 'password' || name === 'confirmPassword') {
            // inputValue = Fieldvalidation.phoneNumberValidate(value, Errors)
            setFieldValue(name, value)
        } else if (name === 'phoneNumber') {
            inputValue = Fieldvalidation.allowOnlyNumber(value);
            let phoneNumber = Fieldvalidation.limitMaxValue(inputValue, 10);
            setFieldValue(name, phoneNumber);
        }
    }


    render() {
        const { values, errors, isSubmitting } = this.props;
        return (
            <div className="form-group">
                <div>
                    <label>First Name</label>
                    <Field
                        className="form-control"
                        name='firstName'
                        type="text"
                        placeholder='First Name'
                        required
                        value={values.firstName}
                        onChange={(ev) => this.onInputChange(ev)}
                    //onBlur={handleBlur}
                    // validate={(ev) => this.OnSubmitValidation(ev)}
                    />
                    <ErrorMessage name="firstName" />
                </div>
                <div>
                    <label>Last Name</label>
                    <Field
                        className="form-control"
                        name='lastName'
                        type='text'
                        placeholder='Last Name'
                        required
                        //maxLength={20}
                        value={values.lastName}
                        onChange={(ev) => this.onInputChange(ev)}
                    //onBlur={handleBlur}
                    // validate={(ev) => this.onValidation(ev, setFieldValue)}
                    />
                    <ErrorMessage name="lastName" />
                </div>
                <div>
                    <label>E-mail</label>
                    <Field
                        className="form-control"
                        name='emailID'
                        type='email'
                        placeholder='Email Id'
                        required
                        value={values.email}
                        onChange={(ev) => this.onInputChange(ev)}
                    //onBlur={handleBlur}
                    // validate={(ev) => this.onValidation(ev)}
                    />
                    <ErrorMessage name="emailID" />
                </div>
                <div>
                    <label>Password</label>
                    <Field
                        className="form-control"
                        name='password'
                        type='password'
                        placeholder='Password'
                        required
                        value={values.password}
                        onChange={(ev) => this.onInputChange(ev)}
                    //onBlur={handleBlur}
                    />
                    <ErrorMessage name="password" />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <Field
                        className="form-control"
                        name='confirmPassword'
                        type='password'
                        placeholder='Confirm password'
                        required
                        value={values.confirmEmail}
                        onChange={(ev) => this.onInputChange(ev)}
                    //onBlur={handleBlur}
                    />
                    <ErrorMessage name="confirmPassword" />
                </div>
                <div>
                    <label>Contact Number</label>
                    <Field
                        className="form-control"
                        name='phoneNumber'
                        type='text'
                        placeholder='Phone Number'
                        value={values.mobileNumber}
                        onChange={(ev) => this.onInputChange(ev)}
                    //onBlur={handleBlur}
                    />
                    <ErrorMessage name="phoneNumber" />
                </div>
                <br />
                <div>
                    <button className="btn btn-secondary" type="submit" disabled={isSubmitting} >Submit</button>
                </div>
            </div>
        )
    }
}

export default UserDetails;

