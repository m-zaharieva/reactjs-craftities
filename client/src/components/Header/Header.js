import './Header.css';

function Header() {
	return (
		<header className="header-section">
			<nav className="container row navigation">
				<div className="nav-brand col-4">
					<p>Craftiites</p>
				</div>
				<div className="col-8">
					<ul className="nav-list">
						{/* Guests */}
						<li className="list-item">
							<a className="nav-link" href="/">Home</a>
						</li>
						<li className="list-item">
							<a className="nav-link" href="/catalogue">Catalogue</a>
						</li>
						<li className="list-item">
							<a className="nav-link" href="/contacts">Contacts</a>
						</li>
						<li className="list-item">
							<a className="nav-link" href="user/register">Register</a>
						</li>
						<li className="list-item">
							<a className="nav-link" href="/user/login">Login</a>
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



