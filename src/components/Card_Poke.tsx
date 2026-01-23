import { Button, Card, CardMedia, Stack, Typography } from "@mui/material";
import type { Pokemon } from "../models/Pokemon";
import {
  DelPokeLike,
  getPokemonLike,
  SavePokeLike,
} from "../services/ApiService/StorageService";
import { useNavigate } from "react-router-dom";

function Card_Poke({ Pokemon, funsetPokemons, isFav }: Card_PokeProps) {
  const navigate = useNavigate();

  const likeFunction = (poke: Pokemon) => {
    if (isFav) {
      DelPokeLike(poke);
      funsetPokemons(getPokemonLike());
    } else {
      funsetPokemons((prevPokemons) => prevPokemons.map((item) => item));
    }
  };

  return (
    <>
      <Card>
        <CardMedia
          component={"img"}
          image={Pokemon.sprites.front_default}
        ></CardMedia>

        <Stack direction={"column"}>
          <Stack direction={"row"} spacing={1} alignContent={"center"} justifyContent={"center"}>
            <Typography>#{Pokemon.id}</Typography>
            <Typography>{Pokemon.name}</Typography>
            <Typography>{Pokemon.like ? <>♥</> : <>•</>}</Typography>
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
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                Pokemon.like ? DelPokeLike(Pokemon) : SavePokeLike(Pokemon);
                likeFunction(Pokemon);
              }}
            >
              {Pokemon.like ? <>DisLike</> : <>Like</>}
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
