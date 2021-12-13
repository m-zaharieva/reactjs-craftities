import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();



export const AuthProvider = ({
    children
}) => {
    let [user, setUser] = useState({});
    let [error, setError] = useState('');

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
                setError(err.message);
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
            {children}
        </AuthContext.Provider>
    );
}