import { useEffect, useState } from "react";
import "./App.css";
import type { Pokemon } from "./models/Pokemon";
import { PokemonService } from "./services/ApiService.ts/PokemonService";

function App() {
  //Prueba Inicial
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fun = async () => {
      const ax = await PokemonService(20);
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
              {item.name} |{" "}
              <button onClick={() => likeFunction(item)}> Fav </button> |{" "}
              {item.like ? <>♥</> : <>•</>}
            </li>
          ))}
        </ul>
      ) : (
        <h1>Cargando</h1>
      )}
    </>
  );
}

export default App;
