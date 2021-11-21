import { NavLink } from 'react-router-dom';

import './AuthForm.css';
import { registerFormHandler, loginFormHandler } from './../../services/userService.js';

function AuthForm({ match }) {
    let register = match.path.includes('login') ? false : true;

    let repeatPassword = register
        && (
            <div className="input-wrapper">
                <label htmlFor="">Repeat password <span className="required">*</span></label>
                <input type="text" name="repeat password" />
            </div>
           );

    let registerNames = register
        && (
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

    let submitHander = register ? registerFormHandler : loginFormHandler;



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


                        <form className="auth-form" onSubmit={submitHander}>
                            {registerNames}

                            <div className="input-wrapper">
                                <label htmlFor="">Email <span className="required">*</span></label>
                                <input type="text" name="email" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="">Password <span className="required">*</span></label>
                                <input type="text" name="password" />
                            </div>

                            {repeatPassword}

                            <input type="submit" value={register ? 'Register' : 'Login'} />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AuthForm;
