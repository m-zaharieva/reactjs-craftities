import { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();



export const AuthProvider = ({
    children
}) => {
    let [user, setUser] = useState({});
    // let [error, setError] = useState('');

    useEffect(() => {
        let userId = localStorage.getItem('userId');
        let token = localStorage.getItem('AUTH_TOKEN');

        if (userId) {
            fetch(`/user/${userId}`, {
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
                // setError(err.message);
                console.log(err.message);
                // TODO Show error when the session token has expired
            })
        }

    }, [])

    const userContext = (userData) => {
        return setUser(userData);
    }

    return (
        <AuthContext.Provider value={{ user, userContext }}>
            {children}
        </AuthContext.Provider>
    );
}


export const useAuth = () => {
    const authState = useContext(AuthContext);
    return authState;
}


// in an other document
// import useAuth from './../././.'
// const {user, userContext} = useAuth();