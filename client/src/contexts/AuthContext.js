import { createContext, useContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage.js';


export const AuthContext = createContext();

const initialUserState = {
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    token: '',
};

const initialTokenState = {token: ''};


export const AuthProvider = ({ children }) => {
    let [user, setUser] = useLocalStorage('user', initialUserState);
    let [token, setToken] = useLocalStorage('AUTH_TOKEN', initialTokenState);
    // let [error, setError] = useState('');
    
    const login = (authData, token) => {
        setUser(authData);
        setToken({token: token})
    }
    
    const logout = () => {
        setUser(initialUserState);
        setToken(initialTokenState);
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}


export const useAuthContext = () => {
    const authState = useContext(AuthContext);
    return authState;
}


// in an other document
// import useAuth from './../././.'
// const {user, userContext} = useAuth();