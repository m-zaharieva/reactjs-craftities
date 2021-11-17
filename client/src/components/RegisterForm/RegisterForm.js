// import { useState, useEffect } from 'react';
import { register } from '../../services/userService.js';
import './RegisterForm.css';

function RegisterForm() {

	return (
		<section className="auth-form-section">
            <div className="container">

                <h2>Registration Form</h2>
                <form className="auth-form" onSubmit={register}>
                    <div className="form-input-outer">
                        <input type="text" id="first-name" name="firstName" placeholder="First Name" />
                    </div>
                    <div className="form-input-outer">
                        <input type="text" id="last-name" name="lastName" placeholder="Last Name" />
                    </div>
                    <div className="form-input-outer">
                        <input type="text" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-input-outer">
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </div>
                    <div className="form-input-outer">
                        <input type="password" id="rePassword" name="rePassword" placeholder="Repeat Password" />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </section>
	);
}

export default RegisterForm;
