import NavBar from "components/NavBar";
import SocialIcons from "components/SocialIcons";

function Contact() {
	return (
		<>
			<NavBar />
			<main>
				<section className="contact">
					<h2>Entre em contato:</h2>

					<div className="contact__list">
						<div className="contact__email">
							<i className="fas fa-envelope"></i>Email
							<div className="text-secondary">pizzainbox@email.com</div>
						</div>
						<div className="contact__phone">
							<i className="fas fa-mobile-alt"></i>Telefone
							<div className="text-secondary">(11) 99999-9999</div>
						</div>

						<div className="contact__address">
							<i className="fas fa-street-view"></i>Endereço
							<div className="text-secondary">200, R: 9 de julho </div>
						</div>
					</div>
				</section>
				<SocialIcons />
			</main>
		</>
	);
}

export default Contact;