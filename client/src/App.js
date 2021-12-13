import React from 'react';

import './App.css';
import { AuthProvider } from './contexts/AuthContext.js';
import AppRouter from './AppRouter.js';



function App() {


    return (
        <AuthProvider>
            <div className="App">
                <AppRouter />
            </div>
        </AuthProvider>
    );
}

export default App;

