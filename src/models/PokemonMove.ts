import type { NamedAPIResource } from "./Misc";
import type { PokemonMoveVersion } from "./PokemonMoveVersion";

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
}
