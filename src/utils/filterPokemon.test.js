import filterPokemon from "./filterPokemon";
import { mockPokemonsData } from "../mock/pokeData";

describe("Filter Pokemon", () => {
  test("it should return an array", () => {
    /* Your solution comes here */
    expect(
      Array.isArray(filterPokemon(mockPokemonsData, "charizard"))
    ).toBeTruthy();
  });

  test("it should return an empty array", () => {
    /* Your solution comes here */
    expect(filterPokemon(mockPokemonsData, "")).toEqual([]);
  });

  test("it should return an array with charizard object", () => {
    /* Your solution comes here */
    expect(filterPokemon(mockPokemonsData, "charizard")).toContainEqual(
      mockPokemonsData[0]
    );
  });

  /* BUNUS */
  test("it should validate the 'pokeList' argument", () => {
    /* Your solution comes here */
    expect(false).toBe(true);
  });

  test("it should validate the 'name' argument", () => {
    /* Your solution comes here */
    expect(false).toBe(true);
  });
});
