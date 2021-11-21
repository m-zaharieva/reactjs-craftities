import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home.js';
import AuthForm from './components/AuthForm/AuthForm.js';
import CreatePost from './components/CreatePost/CreatePost.js';




function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
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
