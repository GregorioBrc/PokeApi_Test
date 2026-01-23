import { useEffect, useState } from "react";
import { getPokemonLike } from "../services/ApiService/StorageService";
import type { Pokemon } from "../models/Pokemon";
import { Grid } from "@mui/material";
import Card_Poke from "../components/Card_Poke";
import Nav_poke from "../components/Nav_poke";

function Favorites() {
  const [favorite, setFavorite] = useState<Pokemon[]>([]);

  useEffect(() => {
    const CargarFav = () => {
      setFavorite(getPokemonLike());
    };

    CargarFav();
  }, []);

  return (
    <>
    <Nav_poke></Nav_poke>
      {favorite.length > 0 ? (
        <Grid container spacing={2}>
          {favorite.map((item) => (
            <Card_Poke Pokemon={item} funsetPokemons={setFavorite} isFav></Card_Poke>
          ))}
        </Grid>
      ) : (
        <h1>No Favorites Yet</h1>
      )}
    </>
  );
}

export default Favorites;
