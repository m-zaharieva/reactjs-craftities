import { Link } from 'react-router-dom';

import './Header.css';

import Navbar from './Navbar/Navbar.js';

function Header() {
	


	return (
		<header className="header-section">
			<div className="row">
				<div className="nav-brand col-12 col-md-4">
					<Link to="/">
						<img src="/img/logo-craftities.svg" alt="" />
					</Link>
				</div>
				<div className="col-12 col-md-5">
					<Navbar>
						
					</Navbar>
				</div>
			</div>
		</header>
	);
}

export default Header;



