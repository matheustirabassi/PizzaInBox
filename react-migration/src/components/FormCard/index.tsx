import { Button, Container, makeStyles, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { ROUTES } from "Routes";
import { Product } from "types/Product";
import { BASE_URL } from "utils/requests";

type Props = {
	productId: string;
}


function FormCard({ productId }: Props) {
	const [product, setProduct] = useState<Product>({
		id: parseInt(productId),
		name: "",
		price: 0,
		description: ""
	}
	);

	useEffect(() => {
		axios.get(`${BASE_URL}${ROUTES.PRODUCTS}/${productId}`)
			.then((response) => {
				setProduct(response.data);
			})
	}, [])

	const useStyles = makeStyles({
		form: {
			background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
			fontSize: '50px',
			border: '0',
			boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)'
		}
	});
	return (
		<Container component="main" maxWidth="xs">
			<Typography component="h1" variant="h5">
				Edição de pizza
			</Typography>
			<form >
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					required
					id="name"
					label="Nome"
					name="name"
					autoFocus
					className={useStyles().form}
					value={product.name}
					onChange={(e) => { setProduct({ name: e.target.value, id: parseInt(productId), 
						price: product.price, description: product.description }) }}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					name="description"
					label="Descrição"
					type="text"
					id="description"
					className={useStyles().form}
					value={product.description}
					onChange={(e) => { setProduct({ name: product.name, id: parseInt(productId), 
						price: product.price, description: e.target.value }) }}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					name="price"
					label="Preço"
					type="number"
					id="price"
					className={useStyles().form}
					value={product.price}
					onChange={(e) => { setProduct({ name: product.name, id: parseInt(productId), 
						price: parseFloat(e.target.value), description: product.description }) }}
				/>

				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
				>
					Salvar
				</Button>
			</form>
		</Container>
	);
}

export default FormCard;