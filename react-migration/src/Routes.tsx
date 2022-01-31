import Footer from "components/Footer"
import NavBar from "components/NavBar"
import AdminHome from "pages/AdminHome"
import Contact from "pages/Contact"
import Home from "pages/Home"
import Login from "pages/Login"
import Register from "pages/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const ROUTES = {
	HOME: "/",
	CONTACT: "/contact",
	LOGIN: "/login",
	REGISTER: "/login/register",
	ADMIN: "/admin"
}
const HomeRoutes = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes >
				<Route index element={<Home />} />
				<Route path={ROUTES.LOGIN} element={<Login />} />
				<Route path={ROUTES.REGISTER} element={<Register />} />
				<Route path={ROUTES.CONTACT} element={<Contact />} />
				<Route path={ROUTES.ADMIN} element={<AdminHome />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default HomeRoutes;
