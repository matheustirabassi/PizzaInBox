import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "Routes";

class NavBar extends Component {


	render() {

		let showMenu: boolean = false;
		function toggleMenu() {
			let hamburger = document.querySelector('.menu-btn__burger');
			let nav = document.querySelector('.nav');
			let menuNav = document.querySelector('.menu-nav');
			let navItems = document.querySelectorAll('.menu-nav__item');

			if (!showMenu) {
				hamburger?.classList.add('open');
				nav?.classList.add('open');
				menuNav?.classList.add('open');
				navItems.forEach(item => item.classList.add('open'));
				showMenu = true;
			} else {
				hamburger?.classList.remove('open');
				nav?.classList.remove('open');
				menuNav?.classList.remove('open');
				navItems.forEach(item => item.classList.remove('open'));
				showMenu = false;
			}
		}
		return (
			<header>
				<div className="menu-btn" onClick={ toggleMenu }>
					<span className="menu-btn__burger"></span>
				</div>

				<nav className="nav">
					<ul className="menu-nav">
						<li className="menu-nav__item active">
							<Link to={ROUTES.HOME} className="menu-nav__link">
								Home
							</Link>
						</li>
						<li className="menu-nav__item" onClick={ toggleMenu }>
							<Link to="/pedidos" className="menu-nav__link">
								Pedidos
							</Link>
						</li>
						<li className="menu-nav__item" onClick={ toggleMenu }>
							<Link to={ROUTES.CONTACT} className="menu-nav__link" aria-label="contact">
								Fale conosco
							</Link>
						</li>
						<li className="menu-nav__item" onClick={ toggleMenu }>
							<Link to={ROUTES.LOGIN} className="menu-nav__link" aria-label="login">
								<FontAwesomeIcon icon={faUser} size={"sm"} />
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default NavBar;
