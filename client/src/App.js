import React from 'react';

import './App.css';
import Header from './components/Header/Header.js';
import TopItems from './components/TopItems/TopItems.js';
import AuthForm from './components/AuthForm/AuthForm.js';

function App() {
    return (
        <div className="App">
            <Header />
            <TopItems />
            <AuthForm />
        </div>
    );
}

export default App;
