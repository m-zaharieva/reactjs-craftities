import React, { useState, useEffect } from 'react';

import './App.css';
import AuthContext from './contexts/AuthContext.js';
import AppRouter from './AppRouter.js';



function App() {
    let [user, setUser] = useState({});

    useEffect(() => {
        let userId = localStorage.getItem('userId');
        let token = localStorage.getItem('AUTH_TOKEN');
        
        if (userId) {
            fetch(`/users/${userId}`, {
                method: 'GET',
                headers: {
                    'user-authorization': token,
                }
            })
                .then(res => res.json())
                .then(user => {
                    setUser({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        _id: user._id,
                    });
                })
                .catch(err => {
                    console.log(err.message);
                    // TODO Show error when the session token has expired
                })
        }

    }, [])

    const userContext = (userData) => {
        return setUser(userData);
    }

    return (
        <AuthContext.Provider value={{ userContext, user }}>
            <div className="App">
                <AppRouter />
            </div>
        </AuthContext.Provider>
    );
}

export default App;

