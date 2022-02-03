import axios from "axios";
import AdminNavBar from "components/AdminNavBar";
import Pagination from "components/Pagination";
import ProductCard from "components/ProductCard";
import SocialIcons from "components/SocialIcons";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProductPage } from "types/Product";
import { BASE_URL } from "utils/requests";

function AdminHome() {
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
		axios.get(`${BASE_URL}/products?size=12&page=${pageNumber}&sort=title`).then((response) => {
			const data = response.data as ProductPage;
			setPage(data);
		});
	}, [pageNumber]);

	const handlePageChange = (newPageNumber: number) => {
		setPageNumber(newPageNumber);
	}
	return (
		<>
			<AdminNavBar />
			<main>
				<section className="conPizza">
					<div className="conPizza__bio-image">
						<h1 className="text-secondary">Bem-vindo(a) Admin</h1>
					</div>
					<Container>
						<Row>
							<Pagination page={page} onChange={handlePageChange} />
						</Row>
						<Row>
							<Col>
								<ProductCard product={{
									id: 0,
									name: "calabresa",
									price: 0,
									description: ""
								}}></ProductCard>
							</Col>
						</Row>
					</Container>
					<SocialIcons />
				</section>
			</main>
		</>
	)
}

export default AdminHome