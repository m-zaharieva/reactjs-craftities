import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './App.css';

import AuthContext from './contexts/AuthContext.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home.js';
import AuthForm from './components/AuthForm/AuthForm.js';
import CreatePost from './components/CreatePost/CreatePost.js';
import Catalogue from './components/Catalogue/Catalogue.js';



function App() {
    let [user, setUser] = useState({});

    

    const userContext = (userData) => {
        return setUser(userData);
    }

    return (
        <AuthContext.Provider value={{userContext, user}}>
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <main>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            {/* <Route path="/" exact render={(props) => <Home props={props} />} /> */}
                            <Route path="/catalogue" exact component={Catalogue} />
                            <Route path="/user/login" component={AuthForm} />
                            <Route path="/api/user/register" component={AuthForm} />
                            <Route path="/post/create" component={CreatePost} />
                            <Route path="/post/:postId/details" />
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
