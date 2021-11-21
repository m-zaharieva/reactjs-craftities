import { NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
	return (
		<header className="header-section">
			<nav className="container row navigation">
				<div className="nav-brand col-4">
					<p>Craftities</p>
				</div>
				<div className="col-8">
					<ul className="nav-list">
						{/* Guests */}
						<li className="list-item">
							<NavLink className="nav-link" exact activeClassName="active-nav-link" to="/">Home</NavLink>
						</li>
						<li className="list-item">
							<NavLink className="nav-link" activeClassName="active-nav-link" to="/catalogue">Catalogue</NavLink>
						</li>
						<li className="list-item">
							<NavLink className="nav-link" activeClassName="active-nav-link" to="/contacts">Contacts</NavLink>
						</li>
						<li className="list-item">
							<NavLink className="nav-link" activeClassName="active-nav-link" to="/user/register">Register</NavLink>
						</li>
						<li className="list-item">
							<NavLink className="nav-link" activeClassName="active-nav-link" to="/user/login">Login</NavLink>
						</li>

						{/* User */}
						{/* <li className="list-item">
								<a className="nav-link" href="/create">Sell on Craftities</a>
							</li>
							<li className="list-item">
								<a className="nav-link" href="/user/profile">Profile</a>
							</li>
							<li className="list-item">
								<a className="nav-link" href="/user/logout">Logout</a>
							</li> */}
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;



