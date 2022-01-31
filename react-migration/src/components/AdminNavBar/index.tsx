import Home from "pages/Home";
import { Component } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "Routes";

class AdminNavBar extends Component {
	render() {
		return (
			<header>
				<div className="menu-btn">
					<span className="menu-btn__burger"></span>
				</div>

				<nav className="nav">
					<ul className="menu-nav">
						<li className="menu-nav__item active">
							<Link to={ROUTES.HOME} className="menu-nav__link">
								Home
							</Link>
						</li>
						<li className="menu-nav__item ">
							<Link to="/admin/orders" className="menu-nav__link">
								Pedidos
							</Link>
						</li>
						<li className="menu-nav__item ">
							<Link to={ROUTES.ADMIN} className="menu-nav__link">
								Pizzas
							</Link>
						</li>
						<li className="menu-nav__item ">
							<Link to="/admin/customers" className="menu-nav__link">
								Clientes
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}

export default AdminNavBar