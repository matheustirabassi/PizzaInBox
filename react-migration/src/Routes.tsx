import Footer from "components/Footer"
import Header from "components/Header"
import Contact from "pages/Contact"
import Home from "pages/Home"
import Login from "pages/Login"
import Register from "pages/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const MyRoutes = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/login/register" element={<Register />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default MyRoutes;