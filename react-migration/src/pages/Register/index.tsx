import "assets/sass/main.css";
function Register() {
	return (
		<body>
			<section className="cadUsuario container">
				<div className="cadUsuario__bio-image">
					<h1 className="text-secondary">Registre-se</h1>
				</div>
					<form action="#">
						<div className="cadUsuario__form">
							<div className="cadUsuario__input-box">
								<span className="details">CPF</span>
								<input
									type="text"
									name=""
									id="cpfCliente"
									placeholder="Digite sem CPF"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<span className="details">Nome</span>
								<input
									type="text"
									name=""
									id="nomeCliente"
									placeholder="Digite seu nome"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<span className="details">Email</span>
								<input
									type="email"
									name=""
									id="emailCliente"
									placeholder="email@email.com"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<span className="details">Telefone</span>
								<input
									type="text"
									name=""
									id="telCliente"
									placeholder="11912341234"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<span className="details">CEP</span>
								<input
									type="text"
									name=""
									id="cepCliente"
									placeholder="Digite seu CEP"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<span className="details">Logradouro</span>
								<input
									type="text"
									name=""
									id="logradouroCliente"
									placeholder="Digite seu logradouro"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<span className="details">Numero</span>
								<input
									type="text"
									name=""
									id="numeroCliente"
									placeholder="Digite seu numero"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<span className="details">Bairro</span>
								<input
									type="text"
									name=""
									id="bairroCliente"
									placeholder="Digite seu bairro"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<span className="details">Complemento</span>
								<input
									type="text"
									name=""
									id="complementoCliente"
									placeholder="Digite seu complenento"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<span className="details">Estado</span>
								<select id="estadoCliente" name="estado" aria-label="estado">
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
									name=""
									id="cidadeCliente"
									placeholder="Digite sua cidade"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<span className="details">Usuario</span>
								<input
									type="text"
									name=""
									id="usuarioCliente"
									placeholder="Digite seu usuário"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<span className="details">Senha</span>
								<input
									type="password"
									name=""
									id="senhaCliente"
									placeholder="***"
								/>
							</div>
							<div className="cadUsuario__input-box">
								<span className="details">Confirmar senha</span>
								<input
									type="password"
									name=""
									id="confSenhaCliente"
									placeholder="***"
								/>
							</div>
						</div>
						<div className="cadUsuario__btn">
							<input type="submit" value="Cadastrar" />
						</div>
					</form>
			</section>
		</body>
	);
}

export default Register;
