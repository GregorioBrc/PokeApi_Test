import { Button, Card, CardMedia, Stack, Typography } from "@mui/material";
import type { Pokemon } from "../models/Pokemon";
import {
  DelPokeLike,
  getPokemonLike,
  SavePokeLike,
} from "../services/ApiService/StorageService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Card_Poke({ Pokemon, funsetPokemons, isFav }: Card_PokeProps) {
  const navigate = useNavigate();
  const [like, setLike] = useState(Pokemon.like);

  const handleLikeClick = () => {
    const newState = !like;
    setLike(newState);

    if (newState) {
      SavePokeLike(Pokemon);
    } else {
      DelPokeLike(Pokemon);
    }

    if (isFav) {
      DelPokeLike(Pokemon);
      funsetPokemons(getPokemonLike());
    }
  };

  return (
    <>
      <Card sx={{ mb: "5px" }}>
        <CardMedia
          component={"img"}
          image={Pokemon.sprites.front_default}
          sx={{ objectFit: "contain", padding: 1 }}
          height="120px"
        ></CardMedia>

        <Stack direction={"column"}>
          <Stack
            direction={"row"}
            spacing={1}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <Typography fontWeight={"bold"}>#{Pokemon.id}</Typography>
            <Typography fontWeight={"bold"}>{Pokemon.name}</Typography>
            <Typography fontWeight={"bold"}>
              {like ? <>♥</> : <>•</>}
            </Typography>
          </Stack>

          <Stack direction={"row"}>
            <Button
              onClick={() => {
                navigate("/pokemon/" + Pokemon.id);
              }}
            >
              Detalles
            </Button>

            <Button
              onClick={() => {
                handleLikeClick();
              }}
            >
              {like ? <>DisLike</> : <>Like</>}
            </Button>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}

interface Card_PokeProps {
  Pokemon: Pokemon;
  funsetPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  isFav?: boolean;
}

export default Card_Poke;
