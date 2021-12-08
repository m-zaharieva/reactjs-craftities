import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './App.css';

import AuthContext from './contexts/AuthContext.js';
import PostContext from './contexts/PostContext.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home.js';
import AuthForm from './components/AuthForm/AuthForm.js';
import CreatePost from './components/CreatePost/CreatePost.js';
import Catalogue from './components/Catalogue/Catalogue.js';
import PostDetails from './components/PostDetails/PostDetails.js';
import PostEdit from './components/PostEdit/PostEdit.js';



function App() {
    let [user, setUser] = useState({});
    let [post, setPost] = useState({});

    useEffect(() => {
        let userId = localStorage.getItem('userId');
        let token = localStorage.getItem('AUTH_TOKEN');
        
        if (userId) {
            fetch(`/users/${userId}`, {
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
                    console.log(err);
                    // TODO Show error when the session token has expired
                })
        }

    }, [])

    const userContext = (userData) => {
        return setUser(userData);
    }

    const postContext = (postData) => {
        return setPost(postData);
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
                            <Route path="/user/logout" />
                            <Route path="/user/register" component={AuthForm} />
                            <Route path="/post/create" component={CreatePost} />

                            <PostContext.Provider value={{postContext, post}}>
                                <Route path="/post/:postId" exact component={PostDetails} />
                                <Route path="/post/:postId/edit" component={PostEdit} />
                                <Route path="/post/:postId/delete" />
                            </PostContext.Provider>

                        </Switch>
                    </main>
                    <Footer />
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;


                        // <Switch>
                        //     <Route path="/" exact component={Home} />
                        //     <Route path="/categories" exact component={Categories} /> {/* Catalogue */}
                        //     <Route path="/categories/categorie" exact component={Categorie} /> {/* Catalogue */}

                        //     <Route path="/listing/:postId" exact component={PostDetails} />
                        //     <Route path="/listing/:postId/edit" component={PostEdit} />
                        //     <Route path="/listing/:postId/delete" />

                        //     <Route path="/user/register" component={AuthForm} />
                        //     <Route path="/user/login" component={AuthForm} />
                        //     <Route path="/user/logout" component={AuthForm} />
                        //     <Route path="/user/profile" component={AuthForm} />
                        //     <Route path="/user/profile/my-listings" component={AuthForm} />
                        //     <Route path="/user/profile/my-listings/create" component={AuthForm} />
                        //     <Route path="/user/profile/favourites" component={AuthForm} />
                        //     <Route path="/user/profile/bucket" component={AuthForm} />
                        // </Switch>