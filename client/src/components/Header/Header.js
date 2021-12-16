import { useContext } from 'react';
import './Header.css';
import { AuthContext } from '../../contexts/AuthContext.js';

import Navbar from './Navbar/Navbar.js';
import NavItem from './Navbar/NavItem/NavItem.js';
import DropDownMenu from './Navbar/DropDownMenu/DropDownMenu.js';;
// import {ReactComponent as SvgIconHere} from 'path-to-the-icon-here'

function Header() {
	let { user } = useContext(AuthContext);

	let guestInputs = (
		<>
			<NavItem icon="" text='Register' link='/user/register' />
			<NavItem icon="" text='Login' link='/user/login' />
		</>
	);

	let userInputs = (
		<NavItem icon="😃" text='Me' isActive={true} link='#'>
			<DropDownMenu />
		</NavItem>
	);


	return (
		<header className="header-section">
			<div className="container row">
				<div className="nav-brand col-3">
					<p>Craftities</p>
				</div>
				<div className="col-9">
					<Navbar>
						<NavItem icon="" text='Home' link='/' />
						<NavItem icon="" text='Categories' link='/c' />
						<NavItem icon="" text='Contacts' link='/contacts' />

						{user.email
							? userInputs
							: guestInputs
						}
					</Navbar>
				</div>
			</div>
		</header>
	);
}

export default Header;



