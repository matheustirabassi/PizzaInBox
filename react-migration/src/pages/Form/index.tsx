import AdminNavBar from 'components/AdminNavBar';
import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function Form() {

  const params = useParams();
  
  return (
		<>
		<AdminNavBar />
			<main>
				<section className="conPizza">
					<div className="conPizza__bio-image">
						<h1 className="text-secondary">Bem-vindo(a) Admin</h1>
					</div>
					<FormCard productId={`${params.productId}`} />
				</section>
			</main>
		</>
  );
}
export default Form;