import { Link } from "react-router-dom";
import '../css/Card.css'

export default function Card({name, species, gender, image, onClose, id}) {
   
   return (
      <div className="contenedor">
         <button className="boton" onClick={onClose}>X</button>
         <Link className="link" to={`/detail/${id}`}>
            <h2 className="nombre">{name}</h2>
         </Link>
         <h2 className="especie">Specie: {species}</h2>
         <h2 className="genero">Gender: {gender}</h2>
         <img className="imagen" src={image} alt={name} />
      </div>
   );
}
