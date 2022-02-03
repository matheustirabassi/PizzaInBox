import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import { Col, Container, Row } from "react-bootstrap";
import { ProductPage } from "types/Product";
import './styles.css';

type Props = {
	page: ProductPage;
	onChange: Function;
}

function Pagination({ page, onChange }: Props) {
	return (
		<div className="pizzainbox-pagination-container">
			<div className="pizzainbox-pagination-box">
				<button type="button" className="pizzainbox-pagination-button" aria-label="btn-back" disabled={page.first} onClick={() => onChange(page.number - 1)}>
					<Arrow />
				</button>
				<p>{`${page.number + 1} de ${page.totalPages}`}</p>
				<button type="button" className="pizzainbox-pagination-button" aria-label="btn-next" disabled={page.last} onClick={() => onChange(page.number + 1)}>
					<Arrow className="pizzainbox-flip-horizontal" />
				</button>
			</div>
		</div>
	);
}

export default Pagination;