import type { NamedAPIResource } from "./Misc";
import type { PokemonAbility } from "./PokemonAbility";

export interface PokemonAbilityPast {
    generation: NamedAPIResource;
    abilities: PokemonAbility[];
}