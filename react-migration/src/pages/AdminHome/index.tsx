import SocialIcons from "components/SocialIcons";

function AdminHome() {
	return (
		<main>
			<section className="conPizza">
				<div className="conPizza__bio-image">
					<h1 className="text-secondary">Bem-vindo(a) Admin</h1>
				</div>
				<div id="containerPizza"></div>
				<SocialIcons />
			</section>
		</main>
	)
}

export default AdminHome