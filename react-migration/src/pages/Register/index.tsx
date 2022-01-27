import axios, { AxiosRequestConfig } from "axios";
import SocialIcons from "components/SocialIcons";
import { useNavigate } from "react-router-dom";
import { Address, Customer, DocumentType } from "types/Customer";
import { BASE_URL } from "utils/requests";

const endpoint = '/customers'


function Register() {
	const navigate = useNavigate()

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

		let address: Address = {
			street: (event.target as any).street.value,
			district: (event.target as any).district.value,
			number: (event.target as any).number.value,
			complement: (event.target as any).complement.value,
			city: (event.target as any).city.value,
			cep: (event.target as any).district.value,
			state: ""
		};

		let customer: Customer = {
			document: (event.target as any).document.value,
			name: (event.target as any).name.value,
			email: (event.target as any).email.value,
			cellphones: [(event.target as any).cellphone.value],
			login: {
				user: (event.target as any).user.value,
				password: (event.target as any).password.value
			},
			addresses: [address],
			documentType: DocumentType.PF
		};


		let passwordConfirm: string = (event.target as any).passwordConfirm.value

		if (customer.login.password === null || customer.login.password === '') {
			console.error('O cpf está em branco!')
			alert('O cpf está em branco!\n')
			return
		}
		if (customer.login.password === null || customer.login.password === '') {
			console.error('A senha esta em branco!')
			alert('A senha esta em branco!\n')
			return
		}
		event.preventDefault();
		const config: AxiosRequestConfig = {
			baseURL: BASE_URL,
			method: "POST",
			url: endpoint,
			data: customer
		}
		if (customer.login.password === passwordConfirm) {
			axios(config)
				.then((res) => {
					console.log(res);
					navigate("/login");
				})
				.catch((error) => {
					console.error(error)
					const response = error.response.status;
					if (response === 400) {
						const errorsData = error.response.data
						let message: String = errorsData.msg + "\n"
						alert(message)
						errorsData.errors.forEach((fields: any) => {
							message = message.concat(`campo: ${fields.fieldName}, erro: ${fields.message}\n`)
						});
						alert(message)
					} else if (response === 401) {
						alert("Login ou senha inválida!");
					}
				});
		}
	};

	return (
		<body>
			<main>
				<section className="cadUsuario">
					<div className="cadUsuario__bio-image">
						<h1 className="text-secondary">Registre-se</h1>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="cadUsuario__form">
							<h2>Documentos pessoais</h2><div></div>
							<div className="cadUsuario__input-box">
								<label className="details">CPF</label>
								<input
									type="number"
									id="document"
									placeholder="Digite seu CPF"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Nome</label>
								<input
									type="text"
									id="name"
									placeholder="Digite seu nome"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Email</label>
								<input
									type="email"
									id="email"
									placeholder="email@email.com"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Telefone</label>
								<input
									type="text"
									id="cellphone"
									placeholder="11912341234"
								/>
							</div>
							<h2>Endereço</h2><div></div>
							<div className="cadUsuario__input-box">
								<label className="details">CEP</label>
								<input
									type="text"
									id="cep"
									placeholder="Digite seu CEP"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Logradouro</label>
								<input
									type="text"
									name=""
									id="street"
									placeholder="Digite seu logradouro"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Numero</label>
								<input
									type="text"
									name=""
									id="number"
									placeholder="Digite seu numero"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Bairro</label>
								<input
									type="text"
									name=""
									id="district"
									placeholder="Digite seu bairro"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Complemento</label>
								<input
									type="text"
									name=""
									id="complement"
									placeholder="Digite seu complemento"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Estado</label>
								<select id="state" name="estado" aria-label="estado">
									<option value="AC">Acre</option>
									<option value="AL">Alagoas</option>
									<option value="AP">Amapá</option>
									<option value="AM">Amazonas</option>
									<option value="BA">Bahia</option>
									<option value="CE">Ceará</option>
									<option value="DF">Distrito Federal</option>
									<option value="ES">Espírito Santo</option>
									<option value="GO">Goiás</option>
									<option value="MA">Maranhão</option>
									<option value="MT">Mato Grosso</option>
									<option value="MS">Mato Grosso do Sul</option>
									<option value="MG">Minas Gerais</option>
									<option value="PA">Pará</option>
									<option value="PB">Paraíba</option>
									<option value="PR">Paraná</option>
									<option value="PE">Pernambuco</option>
									<option value="PI">Piauí</option>
									<option value="RJ">Rio de Janeiro</option>
									<option value="RN">Rio Grande do Norte</option>
									<option value="RS">Rio Grande do Sul</option>
									<option value="RO">Rondônia</option>
									<option value="RR">Roraima</option>
									<option value="SC">Santa Catarina</option>
									<option value="SP">São Paulo</option>
									<option value="SE">Sergipe</option>
									<option value="TO">Tocantins</option>
								</select>
							</div>
							<div className="cadUsuario__input-box">
								<span className="details">Cidade</span>
								<input
									type="text"
									id="city"
									placeholder="Digite sua cidade"
								/>
							</div>
							<div></div><h2>Login</h2><div></div>
							<div className="cadUsuario__input-box">
								<label className="details">Usuario</label>
								<input
									type="text"
									id="user"
									placeholder="Digite seu usuário"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Senha</label>
								<input
									type="password"
									id="password"
									placeholder="***"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Confirmar senha</label>
								<input type="password" id="passwordConfirm" placeholder="***" />
							</div>
						</div>
						<div className="cadUsuario__btn">
							<input type="submit" value="Cadastrar" />
						</div>
					</form>
					<SocialIcons />
				</section>
			</main>
		</body>
	);
}

export default Register;
