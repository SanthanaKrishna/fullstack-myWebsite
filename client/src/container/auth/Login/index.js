import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './login.scss';

class Login extends Component {

    render() {
        return (
            <div className="container login">
                <div className="col-xxl-4 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                    <div className="card">
                        <div className="card-body">
                            {/* <div className="row text-left justify-content-between row">
                                <div className="col">
                                    <h3>Login</h3>
                                </div>
                                <div className="col">
                                    <p>
                                        "or"
                                <a href="">create an account</a>
                                    </p>
                                </div>
                            </div> */}
                            <div className="card-title row">
                                <h3 className="">Login</h3>
                                <p className="">
                                    <a href="">"or"  create an account</a>
                                </p>
                            </div>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validate={values => {
                                    let errors = {};
                                    if (!values.email) {
                                        errors.email = 'Required';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = 'Invalid email address';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <div className="form-group">
                                            <Field className="form-control" type="email" name="email" />
                                            <ErrorMessage name="email" component="div" />
                                        </div>

                                        <div className="form-group">
                                            <Field className="form-control" type="password" name="password" />
                                            <ErrorMessage name="password" component="div" />
                                        </div>

                                        <div className="justify-content-between align-items-center row">
                                            <div className="custom-checkbox custom-control">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                            </div>
                                            <div className="col-auto">
                                                <a className="fs--1" href="">Forget Password?</a>
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                                                Submit
                                            </button>
                                        </div>

                                        <div className="or-login">
                                            <hr />
                                            <div className="or-login-text px-3">or log in with</div>
                                        </div>
                                        <div>
                                            <button></button>
                                            <button></button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div >
                </div>
            </div>

        );
    }
}

export default Login;