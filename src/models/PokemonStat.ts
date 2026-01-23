import type { NamedAPIResource } from "./Misc";

export interface PokemonStat{
    stat: NamedAPIResource;
    effort: number;
    base_stat: number;
}