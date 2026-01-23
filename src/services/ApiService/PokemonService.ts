import axios from "axios";
import type { Poke_link } from "../../models/Poke_Link";
import type { Pokemon } from "../../models/Pokemon";
import { Link_Api } from "./link_api";
import { getPokemon_IdLike } from "./StorageService";

export async function PokemonService_Api(
  limit: number,
): Promise<Pokemon[] | null> {
  const Poke_link: Poke_link = await axios
    .get(Link_Api + "/pokemon?limit=" + limit)
    .then((p) => p.data);

  if (!Poke_link) return null;

  const Pokemones: Pokemon[] = [];
  const likes_id = getPokemon_IdLike();

  const pokemonPromises = Poke_link.results.map((item) =>
    axios.get<Pokemon>(item.url),
  );
  const responses = await Promise.all(pokemonPromises);

  for (let i = 0, j = 0; i < responses.length; i++) {
    const Poke = responses[i].data;
    if (likes_id[j] == Poke.id) {
      Poke.like = true;
      j++;
    }
    Pokemones.push(Poke);
  }

  return Pokemones;
}
