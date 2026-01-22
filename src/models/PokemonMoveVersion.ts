import type { NamedAPIResource } from "./Misc";

export interface PokemonMoveVersion{
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
    level_learned_at: number;
    order: number;
}