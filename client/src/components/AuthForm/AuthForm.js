import { NavLink } from 'react-router-dom';

import * as userService from './../../services/userService.js';
import { TOKEN_SECRET } from './../../config/constants.js';

import './AuthForm.css';


function AuthForm({ match, history }) {
    let register = match.path.includes('login') ? false : true;

    let repeatPassword = (
        <div className="input-wrapper">
            <label htmlFor="">Repeat password <span className="required">*</span></label>
            <input type="password" name="repeatPassword" />
        </div>
    );

    let registerNames = (
        <div className="name-wrapper">
            <div className="input-wrapper">
                <label htmlFor="">First name <span className="required">*</span></label>
                <input type="text" name="firstName" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="">Last name <span className="required">*</span></label>
                <input type="text" name="lastName" />
            </div>
        </div>
    );

    const userRegisterHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        if (formData.get('password') !== formData.get('repeatPassword')) {
            throw new Error('Passwords don\'t match.')
        }

        let userData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password'),
        }

        userService.registerUser(userData)
            .then(token => {
                userService.sessionDataHandler(token);
                history.push('/')
            })
            .catch(err => {
                //TODO Error handler
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
            .then(token => {
                userService.sessionDataHandler(token);
                history.push('/')
            })
            .catch(err => {
                //TODO Error handler
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
                    <div className="auth-form-image-holder col-4">
                        <img className="auth-form-image" src="/img/curved-layers-colored-papers-close-up.jpg" alt="" />
                    </div>
                    <div className="auth-form-holder col-8">
                        {register ? <h1>Register Form</h1> : <h1>Login Form</h1>}

                        <form className="auth-form" onSubmit={register ? userRegisterHandler : userLoginHandler}>
                            {register && registerNames}

                            <div className="input-wrapper">
                                <label htmlFor="">Email <span className="required">*</span></label>
                                <input type="text" name="email" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="">Password <span className="required">*</span></label>
                                <input type="password" name="password" />
                            </div>

                            {register && repeatPassword}

                            <input type="submit" value={register ? 'Register' : 'Login'} />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AuthForm;
