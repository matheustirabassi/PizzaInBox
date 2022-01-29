import axios, { AxiosRequestConfig } from "axios";
import SocialIcons from "components/SocialIcons";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
				id: 1,
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
				id: 1,
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
	const [cepId, setCepId] = useState('18526054');
	const [address, setAddress] = useState<Address>({
		cep: "",
		district: "",
		complement: "",
		number: "",
		street: "",
		city: 1
	})

	useEffect(() => {
		axios.get(`http://viacep.com.br/ws/${cepId}/json/`).then((response) => {
			const data = response.data as any;
			if (data.erro) {
				setAddress({
					district: "",
					complement: "",
					street: "",
					city: 1,
					number: "",
					cep: cepId
				})
			}
			setAddress({
				district: data.bairro,
				complement: data.complemento,
				street: data.logradouro,
				city: data.localidade,
				number: "",
				cep: cepId
			})
		});
	}, [cepId]);

	const handleCepChange = (event: any) => {
		let cepId: string = event.target.value
		if (cepId.length === 8) {
			setCepId(cepId);
		}
	}
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
	const onSubmit = async (data: any) => {
		data.documentType = DocumentType.PF;
		const customer: Customer = data;
		let passwordConfirm: string = data.passwordConfirm

		if (!customer.document) {
			console.error('O cpf está em branco!')
			alert('O cpf está em branco!\n')
			return
		}
		if (!customer.login.password || !passwordConfirm) {
			console.error('A senha esta em branco!')
			alert('A senha esta em branco!\n')
			return
		}
		const config: AxiosRequestConfig = {
			baseURL: BASE_URL,
			method: "POST",
			url: endpoint,
			data: customer
		}
		if (customer.login.password !== passwordConfirm) {
			console.error('A senha nao coincide!')
			alert('A senha nao coincide!')
			return
		}
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
	};

	return (
		<body>
			<main>
				<section className="cadUsuario">
					<div className="cadUsuario__bio-image">
						<h1 className="text-secondary">Registre-se</h1>
					</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="cadUsuario__form">
							<h2>Documentos pessoais</h2><div></div>
							<div className="cadUsuario__input-box">
								<label className="details">CPF
									<input
										type="number"
										id="document"
										placeholder="Digite seu CPF"
										{...register("document")}
									/>
								</label>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Nome
									<input
										type="text"
										id="name"
										placeholder="Digite seu nome"
										{...register("name")}
									/>
								</label>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Email
									<input
										type="email"
										id="email"
										placeholder="email@email.com"
										{...register("email")}
									/>
								</label>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Telefone
									<input
										type="text"
										id="cellphone"
										placeholder="11912341234"
										{...register("cellphones[0]")}
									/>
								</label>
							</div>
							<h2>Endereço</h2><div></div>
							<div className="cadUsuario__input-box">
								<label className="details">CEP
									<input
										type="text"
										id="cep"
										placeholder="Digite seu CEP"
										defaultValue={cepId}
										{...register("addresses[0].cep")}
										onChange={handleCepChange}
										maxLength={8}
									/>
								</label>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Logradouro
									<input
										type="text"
										id="street"
										placeholder="Digite seu logradouro"
										value={address.street}
										{...register("addresses[0].street")}
									/>
								</label>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Numero
									<input
										type="text"
										id="number"
										placeholder="Digite seu numero"
										{...register("addresses[0].number")}
									/>
								</label>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Bairro
									<input
										type="text"
										id="district"
										placeholder="Digite seu bairro"
										value={address.district}
										{...register("addresses[0].district")}
									/>
								</label>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Complemento
									<input
										type="text"
										id="complement"
										placeholder="Digite seu complemento"
										{...register("addresses[0].complement")}
									/>
								</label>
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
								<label className="details">Cidade
									<select id="city" aria-label="cidade" {...register("addresses[0].city")}>
										{cities.map((city) => (
											<option value={city.id}>{city.name}</option>
										))}
									</select>
								</label>
							</div>
							<div></div><h2>Login</h2><div></div>
							<div className="cadUsuario__input-box">
								<label className="details">Usuario
									<input
										type="text"
										id="user"
										placeholder="Digite seu usuário"
										{...register("login.user")}
									/>
								</label>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Senha
									<input
										type="password"
										id="password"
										placeholder="***"
										{...register("login.password")}
									/>
								</label>
							</div>
							<div className="cadUsuario__input-box">
								<label className="details">Confirmar senha
									<input type="password" id="passwordConfirm" placeholder="***"{...register("passwordConfirm")} />
								</label>
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
