import Footer from "components/Footer";
import Header from "components/Header";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import "assets/sass/main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />}/>
				<Route path="/login/register" element={<Register />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
