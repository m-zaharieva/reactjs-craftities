import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home.js';
import AuthForm from './components/AuthForm/AuthForm.js';
import CreatePost from './components/CreatePost/CreatePost.js';
import Categories from './components/Categories/Categories.js';
import Category from './components/Category/Category.js';
import ListingDetails from './components/ListingDetails/ListingDetails.js';
import ListingEdit from './components/ListingEdit/ListingEdit.js';



function AppRouter() {

    return (
        <BrowserRouter>
            <Header />
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/user/register" component={AuthForm} />
                    <Route path="/user/login" component={AuthForm} />
                    <Route path="/user/logout" />
                    <Route path="/user/profile" />
                    <Route path="/user/profile/favourites" />
                    <Route path="/user/profile/my-listings" />
                    <Route path="/user/profile/add-new-listing"  component={CreatePost} />
                    <Route path="/c" exact component={Categories} />
                    <Route path="/c/:category" exact component={Category} />
                    <Route path="/listing/:listingId" exact  component={ListingDetails} />
                    <Route path="/listing/:listingId/edit"  component={ListingEdit} />
                    {/* <Route path="/" exact render={(props) => <Home props={props} />} /> */}
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;


     
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