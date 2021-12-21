import React from 'react';

import './App.css';

import { AuthProvider } from './contexts/AuthContext.js';
import { NotificationProvider } from './contexts/NotificationContext.js';
import AppRouter from './AppRouter.js';


function App() {


    return (
        <AuthProvider>
            <NotificationProvider>
                <div className="App">
                    <AppRouter />
                </div>
            </NotificationProvider>
        </AuthProvider>
    );
}

export default App;

