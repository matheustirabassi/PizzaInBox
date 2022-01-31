import { Link } from "react-router-dom";
function NoMatch() {
  return (
    <div>
      <h2>Não há nada para ver aqui!</h2>
      <p>
        <Link to="/">Ir para a home page</Link>
      </p>
    </div>
  );
}

export default NoMatch