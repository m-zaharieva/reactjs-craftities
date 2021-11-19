import './Header.css';

function Header() {
	return (
		<header className="header-section">
			<nav>
				<div className="container">
					<div className="navigation">
						<div className="brand">
							<p className="brand-logo">Craftities</p>
						</div>
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
				</div>
			</nav>
			<div className="container">
				<div className="page-banner">
					<div className="background-image">
						<img src="/img/explosion-colored-powder-white-background.jpg" alt="Ad banner" />
					</div>
					<div className="banner-title">
						<h1>Make your art a life story. Make yourself a winner</h1>
					</div>

				</div>
			</div>
		</header>

	);
}

export default Header;
