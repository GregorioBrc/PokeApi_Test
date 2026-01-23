import { useEffect, useState } from "react";
import type { Pokemon } from "../models/Pokemon";
import { PokemonService_Api } from "../services/ApiService/PokemonService";
import { Grid } from "@mui/material";
import Card_Poke from "../components/Card_Poke";
import Nav_poke from "../components/Nav_poke";
import { Cantidad_Pokemons } from "../Misc/Key_Defini";

function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fun = async () => {
      const ax = await PokemonService_Api(Cantidad_Pokemons);
      if (ax != null) {
        setPokemons(ax);
      }
    };
    fun();
  }, []);

  return (
    <>
      <Nav_poke></Nav_poke>
      {pokemons.length > 0 ? (
        <Grid container spacing={3} justifyContent={"space-evenly"} >
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
