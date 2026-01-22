import type { NamedAPIResource } from "./Misc";
import type { PokemonType } from "./PokemonType";

export interface PokemonTypePast {
    generation: NamedAPIResource;
    type: PokemonType[];
}