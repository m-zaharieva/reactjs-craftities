import { useContext } from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import { AuthContext } from './../../../../contexts/AuthContext.js';
import NavItem from '../NavItem/NavItem.js';
import * as userService from './../../../../services/userService.js';
import './DropDownMenu.css';

function DropDownMenu() {
    let { userContext } = useContext(AuthContext);
	let history = useHistory();

    const logoutHandler = (e) => {
        console.log('handler');
		userService.logout()
			.then(message => {
				// TODO Show message for successfull/unsuccessful logout before redirect;
				userContext({});
				history.push('/');
			});
	}

    return (
        <div className='dropdown'>
            <NavItem icon="" text='My profile' link='/user/profile' />
            <NavItem icon="" text='My listed items' link='/user/profile/my-listings' />
            <NavItem icon="" text='My favourites' link='/user/profile/favourites'  />
            <NavItem icon="" text='Add new listing' link='/user/profile/add-new-listing' />

			<NavLink to="/user/logout" onClick={logoutHandler}>Logout</NavLink>
        </div>
    );
}

export default DropDownMenu;