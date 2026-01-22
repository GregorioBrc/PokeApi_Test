import type { NamedAPIResource, VersionGameIndex } from "./Misc";
import type { PokemonAbility } from "./PokemonAbility";
import type { PokemonCries } from "./PokemonCries";
import type { PokemonHeldItem } from "./PokemonHeldItem";
import type { PokemonMove } from "./PokemonMove";
import type { PokemonSprites } from "./PokemonSprites";
import type { PokemonStat } from "./PokemonStat";
import type { PokemonType } from "./PokemonType";
import type { PokemonTypePast } from "./PokemonTypePast";

export interface Pokemon{
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: NamedAPIResource[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    past_types: PokemonTypePast[];
    sprites: PokemonSprites;
    cries: PokemonCries;
    species: NamedAPIResource;
    stats: PokemonStat[];
    types: PokemonType[];
}