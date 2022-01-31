import { Link } from "react-router-dom";
function NoMatch() {
	return (
		<section className="home">
			<div className="home__bio-image">
				<h2 className="home__cardapio">Não há nada para ver aqui👀!</h2>
				<p>
					<Link to="/">Ir para a home page</Link>
				</p>
			</ div>
		</section>
	);
}

export default NoMatch