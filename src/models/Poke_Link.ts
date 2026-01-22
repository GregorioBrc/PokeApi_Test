import type { NamedAPIResource } from "./Misc";

export interface Poke_link {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
}
