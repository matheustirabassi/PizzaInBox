import axios, { AxiosRequestConfig } from "axios";
import SocialIcons from "components/SocialIcons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Address, Customer, DocumentType } from "types/Customer";
import { Cities, States } from "types/Location";
import { BASE_URL } from "utils/requests";

const endpoint = '/customers'


function Register() {
	const [stateId, setStateId] = useState(1);
	const [states, setStates] = useState<States>(
		[
			{
				id: 0,
				name: ""
			}
		])

	useEffect(() => {
		axios.get(`${BASE_URL}${endpoint}/states`).then((response) => {
			const data = response.data as States;
			setStates(data)
		});
	}, [])


	const [cities, setCities] = useState<Cities>(
		[
			{
				id: 0,
				name: ""
			}
		]);

	useEffect(() => {
		axios.get(`${BASE_URL}${endpoint}/cities?stateId=${stateId}`).then((response) => {
			const data = response.data as Cities;
			setCities(data);
		});
	}, [stateId]);

	const handleStateChange = (event: any) => {
		setStateId(event.target.value);
	}

	const navigate = useNavigate()
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

		let address: Address = {
			street: (event.target as any).street.value,
			district: (event.target as any).district.value,
			number: (event.target as any).number.value,
			complement: (event.target as any).complement.value,
			city: (event.target as any).city.value,
			cep: (event.target as any).district.value,
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

		if (!customer.document) {
			console.error('O cpf está em branco!')
			alert('O cpf está em branco!\n')
			return
		}
		if (!customer.login.password) {
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
								<label className="details">Estado
								<select id="state" name="state" aria-label="estado" onChange={handleStateChange}> 
									{states.map((state) => (
										<option value={state.id}>{state.name}</option>
									))}
								</select>
								</label>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Cidade</label>
								<select id="city" name="cidade" aria-label="cidade">
									{cities.map((city) => (
										<option value={city.id}>{city.name}</option>
									))}
								</select>
							</div>
							<h2>Login</h2><div></div>
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
