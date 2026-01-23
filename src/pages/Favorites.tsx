import { useEffect, useState } from "react";
import {
  DelPokeLike,
  getPokemonLike,
} from "../services/ApiService/StorageService";
import type { Pokemon } from "../models/Pokemon";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorite, setFavorite] = useState<Pokemon[]>([]);

  useEffect(() => {
    const CargarFav = () => {
      setFavorite(getPokemonLike());
    };

    CargarFav();
  }, []);

  const DeslikeFunction = (Poke: Pokemon) => {
    DelPokeLike(Poke);
    setFavorite(getPokemonLike());
  };

  return (
    <>
      {favorite.length > 0 ? (
        <ul>
          {favorite.map((item) => (
            <li key={item.id}>
              {item.id + " " + item.name} |{" "}
              <button
                onClick={() => {
                  DeslikeFunction(item);
                }}
              >
                {" "}
                Fav{" "}
              </button>{" "}
              | ♥ |
              <img src={item.sprites.front_default} width={80} />|
              <Link to={"/pokemon/" + item.id}>Details</Link>
            </li>
          ))}
        </ul>
      ) : (
        <h1>No Favorites Yet</h1>
      )}
    </>
  );
}

export default Favorites;
