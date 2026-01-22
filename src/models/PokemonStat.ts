import type { NamedAPIResource } from "./Misc";

export interface PokemonStat{
    sta: NamedAPIResource;
    effort: number;
    base_stat: number;
}