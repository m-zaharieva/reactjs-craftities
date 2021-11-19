import React from 'react';

import './App.css';
import Header from './components/Header/Header.js';
import PageBanner from './components/PageBanner/PageBanner.js';
import TopItems from './components/TopItems/TopItems.js';
import RegisterForm from './components/RegisterForm/RegisterForm.js';
import LoginForm from './components/LoginForm/LoginForm.js';
import CreatePost from './components/CreatePost/CreatePost.js';
import CatalogPage from './components/CatalogPage/CatalogPage.js';

function App() {

    let routes = {
        '/user/register': <RegisterForm />,
        '/user/login': <LoginForm />,
        '/post/create': <CreatePost />,
    }

    return (
        <div className="App">
            <Header />
            <PageBanner />
            <TopItems />
            <RegisterForm />
            <LoginForm />
            <CreatePost />
            <CatalogPage />
        </div>
    );
}

export default App;
