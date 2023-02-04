import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const Detail = () => {
    const { detailId } = useParams()

    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
            setCharacter(char);
            } else {
            window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [detailId]);

    return(
        <div>
        {/* El ? pregunta si hay algo en el estado, evita que rompa la pagina */}
        <button>
            <Link to='/home'>Home</Link>
        </button>
        <h1>{character?.name}</h1>
        <p>{character?.status}</p>
        <p>{character?.species}</p>
        <p>{character?.gender}</p>
        <p>{character?.origin?.name}</p>
        <img src={character?.image} alt={character.name}></img>
        </div>
    )
}

export default Detail