import axios from "axios";
import type { Poke_link } from "../../models/Poke_Link";
import type { Pokemon } from "../../models/Pokemon";
import { Link_Api } from "./link_api";

export async function PokemonService(limit: number): Promise<Pokemon[] | null> {
  const Poke_link: Poke_link = await axios
    .get(Link_Api + "/pokemon?limit=" + limit)
    .then((p) => p.data);

  if (!Poke_link) return null;

  const Pokemones: Pokemon[] = [];

  for (let i = 0; i < Poke_link.results.length; i++) {
    const ax = (await axios.get(Poke_link.results[i].url)).data;
    Pokemones.push(ax);
  }

  return Pokemones;
}
