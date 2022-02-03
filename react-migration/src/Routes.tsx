import Footer from "components/Footer"
import NavBar from "components/NavBar"
import AdminHome from "pages/AdminHome"
import Contact from "pages/Contact"
import Home from "pages/Home"
import Login from "pages/Login"
import NoMatch from "pages/NoMatch"
import Register from "pages/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const ROUTES = {
	HOME: "/",
	CONTACT: "/contact",
	LOGIN: "/login",
	REGISTER: "/login/register",
	ADMIN: "/admin",
	NOMATCH: "*"
}
const HomeRoutes = () => {
	return (
		<BrowserRouter>
			<Routes >
				<Route index element={<Home />} />
				<Route path={ROUTES.LOGIN} element={<Login />} />
				<Route path={ROUTES.REGISTER} element={<Register />} />
				<Route path={ROUTES.CONTACT} element={<Contact />} />
				<Route path={ROUTES.ADMIN} element={<AdminHome />} />
				<Route path={ROUTES.NOMATCH} element={<NoMatch />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default HomeRoutes;
