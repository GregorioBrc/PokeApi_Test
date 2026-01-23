import {
  localStorageKey_Poke,
  localStorageKey_PokeId,
} from "../../Misc/Key_Defini";
import type { Pokemon } from "../../models/Pokemon";

export function SavePokeLike(Poke: Pokemon) {
  Poke.like = true;
  const jsonId = localStorage.getItem(localStorageKey_PokeId);
  const jsonPoke = localStorage.getItem(localStorageKey_Poke);
  if (jsonId && jsonPoke) {
    const arr_id = localStorage
      .getItem(localStorageKey_PokeId)
      ?.split(",")
      .map((i) => parseInt(i, 10));

    const arr_Poke = JSON.parse(jsonPoke) as Pokemon[];

    if (arr_id?.findIndex((i) => i == Poke.id) == -1) {
      arr_id.push(Poke.id);
      arr_Poke.push(Poke);
      arr_id.sort((a, b) => a - b);
      localStorage.setItem(localStorageKey_PokeId, arr_id.toString());
      localStorage.setItem(localStorageKey_Poke, JSON.stringify(arr_Poke));
    }
    return;
  } else {
    localStorage.setItem(localStorageKey_PokeId, Poke.id + "");
    localStorage.setItem(localStorageKey_Poke, JSON.stringify([Poke]));
  }
}

export function DelPokeLike(Poke: Pokemon) {
  Poke.like = false;
  const jsonId = localStorage.getItem(localStorageKey_PokeId);
  const jsonPoke = localStorage.getItem(localStorageKey_Poke);

  if (jsonId && jsonPoke) {
    const arr = localStorage
      .getItem(localStorageKey_PokeId)
      ?.split(",")
      .map((i) => parseInt(i, 10));

    const arr_Poke = JSON.parse(jsonPoke) as Pokemon[];

    if (!arr || !arr_Poke) return;

    if (arr.findIndex((i) => i == Poke.id) != -1) {
      const arr_new = arr.filter((i) => i != Poke.id);
      const arr_Poke_new = arr_Poke.filter((i) => i.id != Poke.id);
      localStorage.setItem(localStorageKey_PokeId, arr_new.toString());
      localStorage.setItem(localStorageKey_Poke, JSON.stringify(arr_Poke_new));
    }
  }
}

export function getPokemonLike(): Pokemon[] {
  const jsonPoke = localStorage.getItem(localStorageKey_Poke);

  if (jsonPoke == null) {
    return [];
  }
  return JSON.parse(jsonPoke) as Pokemon[];
}

export function getPokemon_IdLike(): number[] {
  const jsonId = localStorage.getItem(localStorageKey_PokeId);

  if (jsonId == null) return [];

  return jsonId.split(",").map((i) => parseInt(i, 10));
}
