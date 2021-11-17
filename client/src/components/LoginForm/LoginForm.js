// import { useState, useEffect } from 'react';
import { register } from '../../services/userService.js';
import './LoginForm.css';

function LoginForm() {

	return (
		<section className="auth-form-section">
            <div className="container">
                <h2>Registration Form</h2>
                 <form action="/user/register" method="POST" className="auth-form" > {/* onSubmit={login} */}
                    <div className="form-input-outer">
                        <input type="text" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-input-outer">
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </section>
	);
}

export default LoginForm;
