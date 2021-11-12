import './Header.css';

function Header() {
	return (
		<>
			<header>
				<nav>
					<div className="brand">
						<img src="https://i.pinimg.com/originals/00/d7/c5/00d7c511b2454025bccc57e3c6ac629f.jpg" alt="" />
					</div>

					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Sell on Craftities</a></li>
						<li><a href="#">Your Items</a></li>
						<li><a href="#">Login</a></li>
						<li><a href="#">Register</a></li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
