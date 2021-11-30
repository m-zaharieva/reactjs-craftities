import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';

import './AuthForm.css';
import * as userService from './../../services/userService.js';
import AuthContext from '../../contexts/AuthContext.js';


function AuthForm({ match, history }) {
    const { userContext } = useContext(AuthContext);
    let [error, setError] = useState('');
    let register = match.path.includes('login') ? false : true;


    const userRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        if (formData.get('password') !== formData.get('repeatPassword')) {
            setError('Passwords don\'t match.');
        }

        let userData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password'),
        }

        userService.registerUser(userData)
            .then(({ token, userId }) => {
                userContext({
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    _id: userId,
                });

                userService.sessionDataHandler(token, userId);
                history.push('/')
            })
            .catch(err => {
                setError(err.message);
            });
    }

    const userLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let userData = {
            email: formData.get('email'),
            password: formData.get('password'),
        }

        userService.loginUser(userData)
            .then(({ token, userId }) => {
                userContext({
                    email: userData.email,
                    _id: userId,
                });
                userService.sessionDataHandler(token, userId);
                history.push('/')
            })
            .catch(err => {
                setError(err.message);
            });
    }


    let repeatPassword = (
        <div className="input-wrapper">
            <label htmlFor="repeat-password">Repeat password <span className="required">*</span></label>
            <input type="password" name="repeatPassword" id="repeat-password" />
        </div>
    );

    let registerNames = (
        <div className="name-wrapper">
            <div className="input-wrapper">
                <label htmlFor="first-name">First name <span className="required">*</span></label>
                <input type="text" name="firstName" id="first-name" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="last-name">Last name <span className="required">*</span></label>
                <input type="text" name="lastName" id="last-name" />
            </div>
        </div>
    );



    return (
        <section className="auth-form-section">
            <div className="container">
                <div className="row col-10 auth-form-wrapper">
                    <div className="swith-buttons">
                        <NavLink activeClassName="active-radio-auth-links" className="auth-link" to="/user/register">Register</NavLink>
                        <NavLink activeClassName="active-radio-auth-links" className="auth-link" to="/user/login">Login</NavLink>
                    </div>
                    <div className="auth-form-image-holder col-4">
                        <img className="auth-form-image" src="/img/curved-layers-colored-papers-close-up.jpg" alt="" />
                    </div>
                    <div className="auth-form-holder col-8">
                        {register ? <h1>Register Form</h1> : <h1>Login Form</h1>}

                        <form className="auth-form" onSubmit={register ? userRegisterHandler : userLoginHandler}>
                            {register && registerNames}

                            <div className="input-wrapper">
                                <label htmlFor="email">Email <span className="required">*</span></label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password <span className="required">*</span></label>
                                <input type="password" name="password" id="password" />
                            </div>

                            {register && repeatPassword}

                            <input type="submit" value={register ? 'Register' : 'Login'} />

                            {error
                                ?
                                <div className="error-message">
                                    <p>{error}</p>
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

export default AuthForm;
