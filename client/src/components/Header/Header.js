import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import './Header.css';
import AuthContext from '../../contexts/AuthContext.js';

function Header() {
	let { user } = useContext(AuthContext)

	let guestInputs = (
		<>
			<li className="list-item">
				<NavLink className="nav-link" activeClassName="active-nav-link" to="/user/register">Register</NavLink>
			</li>
			<li className="list-item">
				<NavLink className="nav-link" activeClassName="active-nav-link" to="/user/login">Login</NavLink>
			</li>
		</>
	);

	let userInputs = (
		<>
			<li className="list-item">
				<NavLink className="nav-link" activeClassName="active-nav-link" to="/user/posts">Your posts</NavLink>
			</li>
			<li className="list-item">
				<NavLink className="nav-link" activeClassName="active-nav-link" to="/user/favourites">Favourites</NavLink>
			</li>
			<li className="list-item">
				<NavLink className="nav-link" activeClassName="active-nav-link" to="/post/create">Create</NavLink>
			</li>
			<li className="list-item">
				<NavLink className="nav-link" activeClassName="active-nav-link" to="/user/logout">Logout</NavLink>
			</li>
		</>
	);


	return (
		<header className="header-section">
			<nav className="container row navigation">
				<div className="nav-brand col-3">
					<p>Craftities</p>
				</div>
				<div className="col-9">
					<ul className="nav-list">
						<li className="list-item">
							<NavLink className="nav-link" exact activeClassName="active-nav-link" to="/">Home</NavLink>
						</li>
						<li className="list-item">
							<NavLink className="nav-link" activeClassName="active-nav-link" to="/catalogue">Catalogue</NavLink>
						</li>
						<li className="list-item">
							<NavLink className="nav-link" activeClassName="active-nav-link" to="/contacts">Contacts</NavLink>
						</li>

						{user.email
							? userInputs
							: guestInputs
						}

					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;



