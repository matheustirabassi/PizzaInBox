import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Product } from "types/Product";

type Props = {
	product: Product;
}


function ProductCard({ product }: Props) {

	return (
		<div>
			<Container>
				<h3>{product.name}</h3>

				<Link to={`/form/${product.id}`}>
					<Button>Editar</Button>
				</Link>
			</Container>
		</div>
	);
}

export default ProductCard;