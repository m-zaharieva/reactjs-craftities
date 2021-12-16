import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header.js';
import Footer from './components/Common/Footer/Footer.js';
import Home from './components/Home/Home.js';
import AuthForm from './components/Auth/AuthForm/AuthForm.js';
import CreatePost from './components/Auth/CreatePost/CreatePost.js';
import Categories from './components/Categories/Categories.js';
import Category from './components/Category/Category.js';
import ListingDetails from './components/ListingDetails/ListingDetails.js';
import ListingEdit from './components/ListingEdit/ListingEdit.js';
import Profile from './components/Auth/Profile/Profile.js';
import MyListings from './components/Auth/MyListings/MyListings.js';



function AppRouter() {

    return (
        <BrowserRouter>
            <Header />
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/user/register" component={AuthForm} />
                    <Route path="/user/login" component={AuthForm} />
                    <Route path="/user/profile/add-new-listing" exact component={CreatePost} />
                    <Route path="/user/profile" exact component={Profile} />
                    <Route path="/user/profile/favourites" />
                    <Route path="/user/profile/my-listings" component={MyListings} />
                    <Route path="/c" exact component={Categories} />
                    <Route path="/c/:category" exact component={Category} />
                    <Route path="/listing/:listingId" exact  component={ListingDetails} />
                    <Route path="/listing/:listingId/edit"  component={ListingEdit} />
                    {/* <Route path="/user/logout" /> */}
                    {/* <Route path="/" exact render={(props) => <Home props={props} />} /> */}
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;
