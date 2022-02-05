import axios from "axios";
import { Link } from "react-router-dom";
import { ROUTES } from "Routes";
import { Product } from "types/Product";
import { BASE_URL } from "utils/requests";
import "./styles.scss";
type Props = {
	product: Product;
}


function ProductCard({ product }: Props) {

	const deleteProduct = async () => {
		axios.delete(`${BASE_URL}${ROUTES.PRODUCTS}/${product.id}`).then((response) => {
			console.info(`resposta delete produto by id : `)
			console.info(response)
			window.location.reload();
		}).catch((err) => {
			console.error(`Erro no cadastro do usuário\n${err}`)
			alert("Erro na deleçào do produto.")
		});
	}

	return (
		<div>
			<div className="pizzainbox-card-bottom-container">
				<h3>{product.name}</h3>
				<div className="pizzainbox-productcard-buttons">
					<Link to={`${ROUTES.ADMIN}${ROUTES.FORM}${ROUTES.PIZZA}/${product.id}`}>
						<div className="pizzainbox-btn">
							<input type="submit" value="Editar" />
						</div>
					</Link>
					<div className="pizzainbox-btn">
						<input type="submit" value="Excluir" onClick={deleteProduct}/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;