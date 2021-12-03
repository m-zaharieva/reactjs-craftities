import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './App.css';

import AuthContext from './contexts/AuthContext.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home.js';
import AuthForm from './components/AuthForm/AuthForm.js';
import CreatePost from './components/CreatePost/CreatePost.js';
import Catalogue from './components/Catalogue/Catalogue.js';
import PostDetails from './components/PostDetails/PostDetails.js';



function App() {
    let [user, setUser] = useState({});

    useEffect(() => {
        let userId = localStorage.getItem('userId');
        if (userId) {
            fetch(`/users/${userId}`)
                .then(res => res.json())
                .then(user => {
                    setUser({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        _id: user._id,
                    });
                })
        }

    }, [])

    const userContext = (userData) => {
        return setUser(userData);
    }

    return (
        <AuthContext.Provider value={{ userContext, user }}>
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <main>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            {/* <Route path="/" exact render={(props) => <Home props={props} />} /> */}
                            <Route path="/catalogue" exact component={Catalogue} />
                            <Route path="/user/login" component={AuthForm} />
                            <Route path="/user/register" component={AuthForm} />
                            <Route path="/post/create" component={CreatePost} />
                            <Route path="/post/:postId/details" component={PostDetails} />
                            <Route path="/post/:postId/edit" />
                            <Route path="/post/:postId/delete" />
                        </Switch>
                    </main>
                    <Footer />
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
