import { useEffect, useState } from "react";
import type { Pokemon } from "../models/Pokemon";
import { PokemonService_Api } from "../services/ApiService/PokemonService";
import {
  DelPokeLike,
  SavePokeLike,
} from "../services/ApiService/StorageService";
import { Link } from "react-router-dom";

function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fun = async () => {
      const ax = await PokemonService_Api(20);
      if (ax != null) {
        setPokemons(ax);
      }
    };
    fun();
  }, []);

  const likeFunction = (poke: Pokemon) => {
    setPokemons((prevPokemons) =>
      prevPokemons.map((item) =>
        item.id === poke.id ? { ...item, like: !poke.like } : item,
      ),
    );
  };

  return (
    <>
      {pokemons.length > 0 ? (
        <ul>
          {pokemons.map((item) => (
            <li key={item.id}>
              {item.id + " " + item.name} |{" "}
              <button
                onClick={() => {
                  likeFunction(item);
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  item.like ? DelPokeLike(item) : SavePokeLike(item);
                }}
              >
                {" "}
                Fav{" "}
              </button>{" "}
              | {item.like ? <>♥</> : <>•</>} |
              <img src={item.sprites.front_default} width={80} />|
              <Link to={"/pokemon/" + item.id}>Details</Link>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Cargando</h1>
      )}
    </>
  );
}

export default Home;
