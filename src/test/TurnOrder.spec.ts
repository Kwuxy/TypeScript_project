import {turn_order} from "../main/TurnOrder";
import {Pokemon} from "../main/Pokemon";

describe('Test TurnOrder.ts', () => {
    test('Should return fastest pokemon', () => {
        let fastest : Pokemon = Pokemon.createPokemonByName("Milobellus");
        let slowest : Pokemon = Pokemon.createPokemonByName("Gardevoir");
        expect(turn_order(fastest, slowest)).toBe(fastest);
    });

    test('Argument index should not have any impact', () => {
        let fastest : Pokemon = Pokemon.createPokemonByName("Milobellus");
        let slowest : Pokemon = Pokemon.createPokemonByName("Gardevoir");
        expect(turn_order(slowest, fastest)).toBe(fastest);
    });

    test('Should return the cheater pokemon', () => {
        let fastest : Pokemon = Pokemon.createPokemonByName("Milobellus");
        let slowest : Pokemon = Pokemon.createPokemonByName("Gardevoir");
        slowest.cheater = true;
        expect(turn_order(fastest, slowest)).toBe(slowest);
    });
});
