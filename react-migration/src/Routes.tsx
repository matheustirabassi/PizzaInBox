import Footer from "components/Footer"
import AdminHome from "pages/Admin"
import Contact from "pages/Contact"
import Form from "pages/Form"
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
	FORM: "/form",
	PIZZA: "/pizza",
	PRODUCTS: "/products",
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
				<Route path={`${ROUTES.ADMIN}${ROUTES.FORM}${ROUTES.PIZZA}`}>
					<Route path=":productId" element={<Form />} />
				</Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default HomeRoutes;
