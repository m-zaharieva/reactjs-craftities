import './Header.css';

function Header() {
	return (
		<header>
			<nav>
				<div className="container">
					<div className="navigation">
						<ul>
							<li><a href="#">Home</a></li>
							<li><a href="#">Categories</a></li>
							<li><a href="#">Sell on Craftities</a></li>
							<li><a href="#">Your Items</a></li>
							<li><a href="#">Login</a></li>
							<li><a href="#">Register</a></li>
							<li><a href="#">Logout</a></li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="container">
				<div className="banner">
					<img src="/img/layers-colored-papers.jpg" alt="Ad banner" />
					<h1>Make your art a life story. Make yourself a winner</h1>
					<div className="brand">
						<p className="brand-logo">Craftities</p>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
