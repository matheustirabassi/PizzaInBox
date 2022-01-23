import "https://kit.fontawesome.com/6d2ea823d0.js";
import { Link } from "react-router-dom";

function Login() {
	return (
		<body>
			<main>
				<section className="login">
					<h2>Login</h2>

					<div className="login__form">
						<div className="login__input-box">
							<span className="details">Usuario</span>
							<input type="text" name="" id="userLogin" placeholder="user" />
						</div>
						<div className="login__input-box">
							<span className="details">Senha</span>
							<input
								type="password"
								name=""
								id="passLogin"
								placeholder="********"
							/>
						</div>
						<div className="login__add">
							<Link to="/login/register">Não tenho login</Link>
						</div>
						<div className="login__btn">
							<input type="submit" value="Entrar" />
						</div>
					</div>


				</section>
			</main>
		</body>
	);
}
export default Login;
