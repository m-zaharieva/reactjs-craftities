import { useHistory, NavLink } from 'react-router-dom';

import './Navbar.css'
import * as userService from './../../../../services/userService.js';
import { useAuth } from './../../../../contexts/AuthContext.js';

import NavItem from './NavItem.js';


function Navbar() {
    let { user, userContext } = useAuth();
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

    let guestInputs = (
		<>
            <NavItem link="/user/register" text="Register" />
            <NavItem link="/user/login" text="Login" />
		</>
	);
    
	let userInputs = (
        <>
            <NavItem link="/user/profile" text="My profile" />
            <NavItem link="/user/profile/add-new-listing" text="Add new listing" />
            <button onClick={logoutHandler} className="nav-link">Logout</button>
		</>
	);

    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li>
                    <NavLink to='/' exact className="nav-link" activeClassName='active-nav-link'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/c' className="nav-link" activeClassName='active-nav-link'>Categories</NavLink>
                </li>

						{user.email
							? userInputs
							: guestInputs
						}
            </ul>
        </nav>
    );
};



export default Navbar;




