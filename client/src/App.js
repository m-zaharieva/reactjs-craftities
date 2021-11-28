import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './App.css';
import * as userService from './services/userService.js';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home.js';
import AuthForm from './components/AuthForm/AuthForm.js';
import CreatePost from './components/CreatePost/CreatePost.js';



function App() {
    let [isAuth, setIsAuth] = useState({isAuth: false, user: ''});

    useEffect(() => {
        let user = userService.getUser();
        if (user) {
            setIsAuth({
                isAuth: true,
                user: user,
            })
        }
    }, [])


    return (
        <div className="App">
            <BrowserRouter>
                <Header isAuth={isAuth} />
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/user/login" component={AuthForm} />
                        <Route path="/user/register" component={AuthForm} />
                        <Route path="/post/create" component={CreatePost} />
                        <Route path="/post/:postId/details" />
                        <Route path="/post/:postId/edit" />
                        <Route path="/post/:postId/delete" />
                    </Switch>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
