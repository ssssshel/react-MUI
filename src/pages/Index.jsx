import { Link } from "react-router-dom";


const Index = () => {
  return ( 
    <div>
      <h2>Secciones</h2>
      <ul>
        <li>
          <Link to='/botones'>Botones</Link>
        </li>
        <li>
          <Link to='/iconos'>Iconos</Link>
        </li>
        <li>
          <Link to='/fuentes'>Fuentes</Link>
        </li>
        <li>
          <Link to='/estilos'>Estilos</Link>
        </li>
        <li>
          <Link to='/temaglobal'>Temas Globales</Link>
        </li>
        <li>
          <Link to='/app'>App ejemplo</Link>
        </li>

      </ul>
    </div>
  );
}
 
export default Index;