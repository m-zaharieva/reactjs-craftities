import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Profile.css'
import * as userService from './../../../services/userService.js';
import { useAuthContext } from '../../../contexts/AuthContext';

function Profile() {
    let [user, setUser] = useState({});
    let { token } = useAuthContext();

    useEffect(() => {
        userService.userProfile(token)
            .then(user => {
                setUser(user);
            })
    }, [token]);

    return (
        <section className="profile-section">
            <div className="container">
                <h1>Profile</h1>
                <div className="row col-8 margin-auto">
                    <div className="col-6">
                        <div className="profile-img">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='user-data'>
                            <h2>{user.firstName} {user.lastName}</h2>
                            <p>Email: {user.email}</p>
                            <p>Description: {user.description}</p>
                            <p>Following: </p>
                            <p>Followers: </p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='user-links'>
                            <Link to='/user/profile/my-listings'>My listed items</Link>
                            <Link to='/user/profile/favourites'>My Favourites</Link>
                            <Link to='/user/profile/add-new-listing'>Add New Listing</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Profile;