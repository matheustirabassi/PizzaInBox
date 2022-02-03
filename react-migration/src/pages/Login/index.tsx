import axios, { AxiosRequestConfig } from "axios";
import NavBar from "components/NavBar";
import SocialIcons from "components/SocialIcons";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "Routes";
import { BASE_URL } from "utils/requests";

const endpoint = "logins/passwordValidate";

function Login() {
	const navigate = useNavigate()
	
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		const user = (event.target as any).user.value;
		const password = (event.target as any).password.value;
		event.preventDefault();

		const config: AxiosRequestConfig = {
			baseURL: BASE_URL,
			method: "GET",
			url: endpoint,
			params: {
				user: user,
				password: password,
			},
		};

		axios(config)
			.then((res) => {
				console.log(res);
				navigate("/");
			})
			.catch((error) => {
				console.error(error)
				const response = error.response.status;
				if (response === 400) {
					console.error(`Requisição inválida ${error}`);
					alert("Requisição inválida")
				} else if (response === 401) {
					alert("Login ou senha inválida!");
				}
			});
	};

	return (
		<>
		<NavBar />
			<main>
				<section className="login">
					<h2>Login</h2>

					<form className="login__form" onSubmit={handleSubmit}>
						<div className="login__input-box">
							<label className="details">Usuario</label>
							<input type="text" id="user" placeholder="user" />
						</div>
						<div className="login__input-box">
							<label className="details">Senha</label>
							<input
								type="password"
								id="password"
								placeholder="********"
							/>
						</div>
						<div className="login__add">
							<Link to={ROUTES.REGISTER}>Não tenho login</Link>
						</div>
						<div className="login__btn">
							<input type="submit" value="Entrar" />
						</div>
					</form>
					<SocialIcons />
				</section>
			</main>
		</>
	);
}
export default Login;
