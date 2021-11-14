import { useState, useEffect } from 'react';
import { register } from '../../services/userService.js';
import './AuthForm.css';

function AuthForm() {

    useEffect(() => {
        register()
            .then(data => {
                console.log(data);
            })
    })

	return (
		<section>
            <div className="container">
                <form action="/user/register" method="POST">
                    <div className="form-input-outer">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="firstName" />
                    </div>
                    <div className="form-input-outer">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="lastName" />
                    </div>
                    <div className="form-input-outer">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" />
                    </div>
                    <div className="form-input-outer">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="form-input-outer">
                        <label htmlFor="password">Repeat Password:</label>
                        <input type="password" id="password" />
                    </div>
                    <button type="submit" onClick={register}>Register</button>
                </form>
            </div>
        </section>
	);
}

export default AuthForm;
