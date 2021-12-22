import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './AuthForm.css';
import * as userService from './../../../services/userService.js';
import { useAuthContext } from './../../../contexts/AuthContext.js';
import { useNotificationContext } from './../../../contexts/NotificationContext';

import { errorInitialLoginValue } from './../../../validations/authFormValidation.js';
import { emailValidationHandler } from './../../../validations/authFormValidation.js';
import { passwordValidationHandler } from './../../../validations/authFormValidation.js';
import { submitFormValidation } from './../../../validations/authFormValidation.js';

import ValidationError from './../../Common/Errors/ValidationError.js';

function Login({ history }) {
    const { showNotification } = useNotificationContext();
    const { login } = useAuthContext();
    let [error, setError] = useState(errorInitialLoginValue);

    const addError = (field, message) => {
        setError(oldState => ({...oldState, [field]: message}));
    }


    const userLoginHandler = (e) => {
        e.preventDefault();
        let userInput = Object.fromEntries(new FormData(e.currentTarget));

        submitFormValidation(userInput, addError)
        if (Object.values(error).some(x => x !== false)) {
            return;
        }

        userService.loginUser(userInput)
            .then(result => {
                if (result.error) {
                    throw result;
                }
                return result;
            })
            .then(({ token, userId }) => {
                login({
                    email: userInput.email,
                    _id: userId,
                }, token);
                showNotification('Successful login! Happy to see you again', 'success')
                history.push('/')
            })
            .catch(err => {
                showNotification(err.error, 'error')
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
                      <h1>Login Form</h1>

                        <form className="auth-form" onSubmit={userLoginHandler}>

                            <div className="input-wrapper">
                                <label htmlFor="email">
                                    Email <span className="required">*</span>
                                </label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    id="email" 
                                    // autoComplete='off' 
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


                            <input 
                                type="submit" 
                                value='Login' 
                            />

                            {error.title
                                ?
                                <div className="error-message">
                                    <p>{error.title}</p>
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

export default Login;
