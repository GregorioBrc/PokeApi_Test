import type { NamedAPIResource } from "./Misc";
import type { PokemonHeldItemVersion } from "./PokemonHeldItemVersion";

export interface PokemonHeldItem {
    item: NamedAPIResource;
    version_details: PokemonHeldItemVersion[];
}