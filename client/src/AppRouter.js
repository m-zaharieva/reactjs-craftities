import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import {isAuth} from './hoc/isAuth.js';

import Header from './components/Common/Header/Header.js';
import Notification from './components/Common/Notification/Notification.js';
import Footer from './components/Common/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Register from './components/Auth/Forms/Register.js';
import Login from './components/Auth/Forms/Login.js';
import ListingCreate from './components/Listing/ListingCreate/ListingCreate.js';
import Categories from './components/Categories/Categories.js';
import Category from './components/Category/Category.js';
import ListingDetails from './components/Listing/ListingDetails/ListingDetails.js';
import ListingEdit from './components/Listing/ListingEdit/ListingEdit.js';
import Profile from './components/Auth/Profile/Profile.js';
import MyListings from './components/Auth/MyListings/MyListings.js';
import MyFavourites from './components/Auth/MyFavourites/MyFavourites.js';
import AllListings from './components/Listing/AllListings/AllListings.js';
import NotFound from './components/NotFound/NotFound.js';


function AppRouter() {

    return (
        <BrowserRouter>
            <Header />
            <Notification />
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/user/register" exact component={Register} />
                    <Route path="/user/login" exact component={Login} />
                    <Route path="/user/profile/add-new-listing" exact component={isAuth(ListingCreate)} />
                    <Route path="/user/profile" exact component={isAuth(Profile)} />
                    <Route path="/user/profile/favourites" exact component={isAuth(MyFavourites)} />
                    <Route path="/user/profile/my-listings" exact component={isAuth(MyListings)} />
                    <Route path="/c" exact component={Categories} />
                    <Route path="/c/:category" exact component={Category} />
                    <Route path="/listing/all" exact component={AllListings} />
                    <Route path="/listing/:listingId" exact component={ListingDetails} />
                    <Route path="/listing/:listingId/edit" exact component={isAuth(ListingEdit)} />
                    <Route path="*" component={NotFound} />

                    {/* <Route path="/user/:personId" exact component={isAuth(Profile)} /> */}
                    {/* <Route path="/" exact render={(props) => <Home props={props} />} /> */}
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;
