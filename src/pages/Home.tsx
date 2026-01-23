import { useEffect, useState } from "react";
import type { Pokemon } from "../models/Pokemon";
import { PokemonService_Api } from "../services/ApiService/PokemonService";
import { Grid } from "@mui/material";
import Card_Poke from "../components/Card_Poke";

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

  return (
    <>
      {pokemons.length > 0 ? (
        <Grid container spacing={2}>
          {pokemons.map((item) => (
            <Grid key={item.id}>
              <Card_Poke
                Pokemon={item}
                funsetPokemons={setPokemons}
              ></Card_Poke>
            </Grid>
          ))}
        </Grid>
      ) : (
        <h1>Cargando</h1>
      )}
    </>
  );
}

export default Home;
