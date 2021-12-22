import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './AuthForm.css';
import * as userService from './../../../services/userService.js';
import { useAuthContext } from './../../../contexts/AuthContext.js';
import { useNotificationContext } from './../../../contexts/NotificationContext';

import { errorInitialRegisterValue } from './../../../validations/authFormValidation.js';
import { repeatPasswordValidationHandler } from './../../../validations/authFormValidation.js';
import { firstNameValidationHandler } from './../../../validations/authFormValidation.js';
import { emailValidationHandler } from './../../../validations/authFormValidation.js';
import { lastNameValidationHandler } from './../../../validations/authFormValidation.js';
import { passwordValidationHandler } from './../../../validations/authFormValidation.js';
import { submitFormValidation } from './../../../validations/authFormValidation.js';

import ValidationError from './../../Common/Errors/ValidationError.js';

function Register({ match, history }) {
    const { showNotification } = useNotificationContext();
    const { login } = useAuthContext();
    let [error, setError] = useState(errorInitialRegisterValue);

    const addError = (field, message) => {
        setError(oldState => ({ ...oldState, [field]: message }));
    }

    const userRegisterHandler = (e) => {
        e.preventDefault();
        let userInput = Object.fromEntries(new FormData(e.currentTarget));

        if (userInput.password !== userInput.repeatPassword) {
            return setError(oldState => ({ ...oldState, repeatPassword: 'Both passwords should match.' }));
        }
        
        submitFormValidation(userInput, addError)
        if (Object.values(error).some(x => x !== false)) {
            return;
        }

        userService.registerUser(userInput)
            .then(result => {
                console.log(result.error);
                if (result.error) {
                    throw result
                    // return setError(old => ({ ...old, server: result.error }))
                }
                return result
            })
            .then(({ token, userId }) => {
                let userData = {
                    firstName: userInput.firstName,
                    lastName: userInput.lastName,
                    email: userInput.email,
                    _id: userId,
                }

                login(userData, token);
                showNotification('Successful registration! Welcome to Craftities', 'success')
                history.push('/')
            })
            .catch(err => {
                showNotification(err.error, 'error');
            });


    }



    return (
        <section className="auth-form-section">
            <div className="container">
                <div className="row col-10 auth-form-wrapper">
                    <div className="swith-buttons">
                        <NavLink activeClassName="active-radio-auth-links" className="auth-link" to="/user/register">Register</NavLink>
                        <NavLink activeClassName="active-radio-auth-links" className="auth-link" to="/user/login">Login</NavLink>
                    </div>
                    <div className="auth-form-image-holder col-12 col-md-4">
                        <img className="auth-form-image" src="/img/curved-layers-colored-papers-close-up.jpg" alt="" />
                    </div>
                    <div className="auth-form-holder col-12 col-md-8">
                        <h1>Register Form</h1>

                        <form className="auth-form" onSubmit={userRegisterHandler}>
                            <div className="name-wrapper">
                                <div className="input-wrapper">
                                    <label htmlFor="first-name">
                                        First name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="first-name"
                                        autoComplete='off'
                                        onBlur={firstNameValidationHandler.bind(null, addError)}
                                    />
                                    {error.firstName ? <ValidationError message={error.firstName} /> : null}
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor="last-name">
                                        Last name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="last-name"
                                        autoComplete='off'
                                        onBlur={lastNameValidationHandler.bind(null, addError)}
                                    />
                                    {error.lastName ? <ValidationError message={error.lastName} /> : null}
                                </div>
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="email">
                                    Email <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    autoComplete='off'
                                    onBlur={emailValidationHandler.bind(null, addError)}
                                />
                                {error.email ? <ValidationError message={error.email} /> : null}
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="password">
                                    Password <span className="required">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete='off'
                                    onBlur={passwordValidationHandler.bind(null, addError)}
                                />
                                {error.password ? <ValidationError message={error.password} /> : null}
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="repeat-password">
                                    Repeat password <span className="required">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="repeatPassword"
                                    id="repeat-password"
                                    autoComplete='off'
                                    onBlur={repeatPasswordValidationHandler.bind(null, addError)}
                                />
                                {error.repeatPassword ? <ValidationError message={error.repeatPassword} /> : null}
                            </div>

                            <input
                                type="submit"
                                value='Register'
                            />

                            {error.server
                                ?
                                <div className="error-message">
                                    <p>{error.server}</p>
                                </div>
                                : null
                            }
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
