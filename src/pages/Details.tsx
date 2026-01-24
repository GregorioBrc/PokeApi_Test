import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Pokemon } from "../models/Pokemon";
import { PokemonService_GetById } from "../services/ApiService/PokemonService";
import Nav_poke from "../components/Nav_poke";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
} from "@mui/material";

function Details() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!id) {
        setError("No Pokémon ID provided");
        return;
      }
      const numericId = parseInt(id, 10);
      if (isNaN(numericId)) {
        setError("Invalid Pokémon ID");
        return;
      }
      const data = await PokemonService_GetById(numericId);
      if (data) {
        setPokemon(data);
      } else {
        setError("Pokémon not found");
      }
    };

    fetchPokemon();
  }, [id]);

  if (error) {
    return (
      <>
        <Nav_poke />
        <Container sx={{ mt: 4 }}>
          <Typography variant="h4" color="error">
            Error: {error}
          </Typography>
        </Container>
      </>
    );
  }

  if (pokemon == null) {
    return (
      <>
        <Nav_poke />
        <Container sx={{ mt: 4 }}>
          <Typography
            width={"100%"}
            textAlign={"center"}
            variant="h5"
            fontWeight={"bold"}
          >
            Cargando...
          </Typography>
        </Container>
      </>
    );
  }

  return (
    <>
      <Nav_poke />
      <Container maxWidth="lg" sx={{ mt: 4, py: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            {/* Columna izquierda: imágenes y información básica */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h3" gutterBottom>
                #{pokemon.id} {pokemon.name}
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <Avatar
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  sx={{ width: 120, height: 120 }}
                  variant="rounded"
                />
                <Avatar
                  src={pokemon.sprites.back_default}
                  alt={`${pokemon.name} back`}
                  sx={{ width: 120, height: 120 }}
                  variant="rounded"
                />
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                {pokemon.types.map((t) => (
                  <Chip key={t.type.name} label={t.type.name} color="primary" />
                ))}
              </Box>
              <Typography variant="body1" color="text.secondary">
                <strong>Favorito:</strong> {pokemon.like ? "♥" : "•"}
              </Typography>
            </Box>

            {/* Columna derecha: detalles */}
            <Box sx={{ flex: 1.5 }}>
              <Typography variant="h5" gutterBottom>
                Detalles
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Altura"
                    secondary={`${pokemon.height / 10} m`}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Peso"
                    secondary={`${pokemon.weight / 10} kg`}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Experiencia base"
                    secondary={pokemon.base_experience}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Orden" secondary={pokemon.order} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Es predeterminado"
                    secondary={pokemon.is_default ? "Sí" : "No"}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Habilidades"
                    secondary={pokemon.abilities
                      .map((a) => a.ability.name)
                      .join(", ")}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Estadísticas"
                    secondary={
                      <List dense>
                        {pokemon.stats.map((s) => (
                          <ListItem key={s.stat.name}>
                            <ListItemText
                              primary={`${s.stat.name}: ${s.base_stat}`}
                              secondary={`Esfuerzo: ${s.effort}`}
                            />
                          </ListItem>
                        ))}
                      </List>
                    }
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Movimientos"
                    secondary={`${pokemon.moves.length} movimientos`}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Encuentros"
                    secondary={pokemon.location_area_encounters}
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default Details;
