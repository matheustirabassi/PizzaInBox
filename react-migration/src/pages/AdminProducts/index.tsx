import axios from "axios";
import Pagination from "components/Pagination";
import ProductCard from "components/ProductCard";
import SocialIcons from "components/SocialIcons";
import { useEffect, useState } from "react";
import { ProductPage } from "types/Product";
import { BASE_URL } from "utils/requests";
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
			<main>
				<section className="conPizza">
					<div className="conPizza__bio-image">
						<h1 className="text-secondary">Bem-vindo(a) Admin</h1>
					</div>
					<div className="container">
							<Pagination page={page} onChange={handlePageChange} />
						<div className="row">
						{page.content.map((product) => (
							<div key={product.id} className="col-sm-6 col-lg-4 col-xl-3 md-3"> 
							<ProductCard product={product} />
							</div>
						))}
						</div>
					</div>
					<SocialIcons />
				</section>
			</main>
		</>
	)
}

export default AdminProducts