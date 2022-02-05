import AdminNavBar from "components/AdminNavBar";
import SocialIcons from "components/SocialIcons";
import AdminProducts from "pages/AdminProducts";

function AdminHome() {

	return (
		<>
			<AdminNavBar />
			<main>
				<section className="conPizza">
					<div className="conPizza__bio-image">
						<h1 className="text-secondary">Bem-vindo(a) Admin</h1>
					</div>
					<AdminProducts />
					<SocialIcons />
				</section>
			</main>
		</>

	)
}

export default AdminHome