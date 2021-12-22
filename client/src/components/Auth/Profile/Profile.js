import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Profile.css'
import * as userService from './../../../services/userService.js';
import { useAuthContext } from '../../../contexts/AuthContext.js';
import { useNotificationContext } from '../../../contexts/NotificationContext.js';

function Profile({
    history
}) {
    let [user, setUser] = useState({});
    let [showTextbox, setShowTextbox] = useState(false);
    let { token, logout } = useAuthContext();
    let { showNotification } = useNotificationContext();

    useEffect(() => {
        userService.userProfile(token)
            .then(response => {
                if (response.error) {
                    throw response;
                }
                setUser(response);
            })
            .catch(err => {
                showNotification(err.error, 'error');
                logout();
                history.push('/user/login')
            })
    }, [history, logout, showNotification, token]);

    const showTextboxHandler = (e) => {
        setShowTextbox(!showTextbox);
    }

    const updateDescriptionHandler = (e) => {
        e.preventDefault();
        let {description} = Object.fromEntries(new FormData(e.currentTarget));
        e.currentTarget.reset();
        userService.addDescription(user._id, description, token)
            .then(user => {
                setUser(user);
                setShowTextbox(!showTextbox);
            })

    }

    return (
        <section className="profile-section">
            <div className="container">
                <h1>Profile</h1>
                <div className="row col-7 margin-auto">
                    <div className="col-12 col-md-3">
                        <div className="profile-img margin-auto">
                            <img src={user.imageUrl} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className='user-data'>
                            <h2>{user.firstName} {user.lastName}</h2>
                            <p>Email: {user.email}</p>
                            {
                                user.description 
                                    ? <p>Description: {user.description}</p>
                                    :<button className='add-description' onClick={showTextboxHandler}>Add description</button>
                            }
                            
                            {
                                showTextbox
                                && 
                                <form onSubmit={updateDescriptionHandler}>
                                    <div>
                                        <label htmlFor="description">Description</label>
                                        <textarea name="description" id="description" cols="20" rows="3"></textarea>
                                    </div>
                                    <input type='submit' className='form-button' value="Save" />
                                </form>
                            }

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