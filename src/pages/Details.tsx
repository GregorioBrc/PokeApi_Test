import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Pokemon } from "../models/Pokemon";
import { PokemonService_GetById } from "../services/ApiService/PokemonService";

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
        <h1>Error: {error}</h1>
        <Link to="/">Back</Link>
      </>
    );
  }

  if (pokemon == null) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
      <h1>
        #{pokemon.id} {pokemon.name}
      </h1>
      <Link to="/">Back</Link>
      <div>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={200}
        />
        <img
          src={pokemon.sprites.back_default}
          alt={`${pokemon.name} back`}
          width={200}
        />
      </div>
      <ul>
        <li>
          <strong>Altura:</strong> {pokemon.height / 10} m
        </li>
        <li>
          <strong>Peso:</strong> {pokemon.weight / 10} kg
        </li>
        <li>
          <strong>Experiencia base:</strong> {pokemon.base_experience}
        </li>
        <li>
          <strong>Orden:</strong> {pokemon.order}
        </li>
        <li>
          <strong>Es predeterminado:</strong> {pokemon.is_default ? "Sí" : "No"}
        </li>
        <li>
          <strong>Tipos:</strong>{" "}
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </li>
        <li>
          <strong>Habilidades:</strong>{" "}
          {pokemon.abilities.map((a) => a.ability.name).join(", ")}
        </li>
        <li>
          <strong>Estadísticas:</strong>
          <ul>
            {pokemon.stats.map((s) => (
              <li key={s.stat.name}>
                {s.stat.name}: {s.base_stat} (esfuerzo: {s.effort})
              </li>
            ))}
          </ul>
        </li>
        <li>
          <strong>Movimientos:</strong> {pokemon.moves.length}
        </li>
        <li>
          <strong>Encuentros:</strong> {pokemon.location_area_encounters}
        </li>
        <li>
          <strong>Favorito:</strong> {pokemon.like ? "♥" : "•"}
        </li>
      </ul>
    </div>
  );
}

export default Details;
