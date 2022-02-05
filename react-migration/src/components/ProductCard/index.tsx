import { Link } from "react-router-dom";
import { Product } from "types/Product";

type Props = {
	product: Product;
}


function ProductCard({ product }: Props) {

	return (
		<div>
			<div className="pizzainbox-card-bottom-container">
				<h3>{product.name}</h3>
				<Link to={`/form/${product.id}`}>
					<div className="pizzainbox-btn">
						<input type="submit" value="Editar" />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default ProductCard;