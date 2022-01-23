function Header() {
	return (
		<header>
			<div className="menu-btn">
				<span className="menu-btn__burger"></span>
			</div>

			<nav className="nav">
				<ul className="menu-nav">
					<li className="menu-nav__item active">
						<a href="/" className="menu-nav__link">
							Home
						</a>
					</li>
					<li className="menu-nav__item ">
						<a href="/pedidos" className="menu-nav__link">
							Pedidos
						</a>
					</li>
					<li className="menu-nav__item">
						<a href="/contato" className="menu-nav__link">
							Fale conosco
						</a>
					</li>
					<li className="menu-nav__item">
						<a href="/login" className="menu-nav__link" aria-label="login">
							<i className="fas fa-user"></i>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;