import {Pokemon} from "../main/Pokemon";
import {Battle} from "../main/Battle";

describe('Test Battle.ts', () => {
    let milobellus : Pokemon;
    let gardevoir : Pokemon;
    let pokemons : Pokemon[];
    let battle : Battle = new Battle();

    beforeEach(() => {
        milobellus = Pokemon.createPokemonByName("Milobellus");
        gardevoir = Pokemon.createPokemonByName("Gardevoir");
        pokemons = [milobellus, gardevoir];
    });

    test('Should return pokemon is alive', () => {
        expect(battle.pokemonIsAlive(milobellus)).toBe(true);
    });

    test('Should return pokemon is not alive', () => {
        milobellus.hp = 0;
        expect(battle.pokemonIsAlive(milobellus)).toBe(false);
    });

    test('Should return all pokemons are alive', () => {
        expect(battle.allPokemonsAreAlive(pokemons)).toBe(true);
    });

    test('Should return all pokemons are alive when a pokemon has 0 hp', () => {
        milobellus.hp = 0;
        expect(battle.allPokemonsAreAlive(pokemons)).toBe(false);
    });

    test('Should return all pokemons are alive when both pokemons have 0 hp', () => {
        milobellus.hp = 0;
        gardevoir.hp = 0;
        expect(battle.allPokemonsAreAlive(pokemons)).toBe(false);
    });

    test('gardevoir should win', () => {
        expect(battle.playMatch(pokemons)).toBe(gardevoir);
    });

    test('milobellus should win when it get drugs', () => {
        milobellus.hp = 9999;
        expect(battle.playMatch(pokemons)).toBe(milobellus);
    });
});
