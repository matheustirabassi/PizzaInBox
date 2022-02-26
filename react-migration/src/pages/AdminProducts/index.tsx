import axios from "axios";
import Pagination from "components/Pagination";
import ProductCard from "components/ProductCard";
import { useEffect, useState } from "react";
import { ProductPage } from "types/Product";
import { BASE_URL } from "utils/requests";
import "./styles.scss";
function AdminProducts() {
	const [pageNumber, setPageNumber] = useState(0)

	const [page, setPage] = useState<ProductPage>({
		content: [],
		last: true,
		totalPages: 0,
		totalElements: 0,
		size: 12,
		number: 0,
		first: true,
		numberOfElements: 0,
		empty: true,
	})

	useEffect(() => {
		axios.get(`${BASE_URL}/products?size=8&page=${pageNumber}&sort=name`).then((response) => {
			const data = response.data as ProductPage;
			setPage(data);
		});
	}, [pageNumber]);
	
	const handlePageChange = (newPageNumber: number) => {
		setPageNumber(newPageNumber);
	}
	return (
		<>
			<Pagination page={page} onChange={handlePageChange} />
			<div className="pizzainbox-container">
				{page.content.map((product) => (
					<div key={product.id} className="pizzainbox-item">
						<ProductCard product={product} />
					</div>
				))}
			</div>
		</>
	)
}

export default AdminProducts