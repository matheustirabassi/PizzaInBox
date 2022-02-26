import Card1 from "assets/img/card-pizza-vegetariana.jpg";
import Card2 from "assets/img/card-pizza-calabresa.jpg";
import Card3 from "assets/img/card-pizza-vegana.jpg";
import Card4 from "assets/img/card-pizza-dois-queijos.jpg";
import Card5 from "assets/img/card-pizza-portuguesa.jpg";
import Card6 from "assets/img/card-pizza-da-casa.jpg";
import SocialIcons from "components/SocialIcons";
import NavBar from "components/NavBar";

function Home() {
	return (
		<>
			<NavBar />
			<main>
				<section className="home">
					<div className="home__bio-image">
						<h1 className="text-secondary">Bem vindo ao Pizza in BOX</h1>
					</div>
					<h1 className="home__cardapio">Conheça nosso cardápio</h1>
					<div className="home__cards">
						<div className="home__card">
							<img src={Card1} alt="My pizza" />
							<div className="home__btns">
								<a href="#!" className="home__btn">
									<i className="fas fa-eye"></i>Pizza Vegetariana
								</a>
							</div>
						</div>
						<div className="home__card">
							<img src={Card2} alt="My pizza" />
							<div className="home__btns">
								<a href="#!" className="home__btn">
									<i className="fas fa-eye"></i>Pizza de Calabresa
								</a>
							</div>
						</div>
						<div className="home__card">
							<img src={Card3} alt="My pizza" />
							<div className="home__btns">
								<a href="#!" className="home__btn">
									<i className="fas fa-eye"></i>Pizza Vegana
								</a>
							</div>
						</div>
						<div className="home__card">
							<img src={Card4} alt="My pizza" />
							<div className="home__btns">
								<a href="#!" className="home__btn">
									<i className="fas fa-eye"></i>Pizza Dois Queijos
								</a>
							</div>
						</div>
						<div className="home__card">
							<img src={Card5} alt="My pizza" />
							<div className="home__btns">
								<a href="#!" className="home__btn">
									<i className="fas fa-eye"></i>Pizza Portuguesa
								</a>
							</div>
						</div>
						<div className="home__card">
							<img src={Card6} alt="My pizza" />
							<div className="home__btns">
								<a href="#!" className="home__btn">
									<i className="fas fa-eye"></i>Pizza da Casa
								</a>
							</div>
						</div>
					</div>
					<SocialIcons />
				</section>
			</main>
		</>
	);
}

export default Home;
