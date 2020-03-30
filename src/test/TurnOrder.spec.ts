import {turn_order, xor_cheater} from "../main/TurnOrder";
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

    test('should return null when no cheater', () => {
        let p1 : Pokemon = Pokemon.createPokemonByName("Milobellus");
        let p2 : Pokemon = Pokemon.createPokemonByName("Gardevoir");

        expect(xor_cheater(p1, p2)).toBe(null);
    });

    test('should return p1 when p1 is the only cheater', () => {
        let p1 : Pokemon = Pokemon.createPokemonByName("Milobellus");
        let p2 : Pokemon = Pokemon.createPokemonByName("Gardevoir");
        p1.cheater = true;
        expect(xor_cheater(p1, p2)).toBe(p1);
    });

    test('should return p2 when p2 is the only cheater', () => {
        let p1 : Pokemon = Pokemon.createPokemonByName("Milobellus");
        let p2 : Pokemon = Pokemon.createPokemonByName("Gardevoir");
        p2.cheater = true;
        expect(xor_cheater(p1, p2)).toBe(p2);
    });

    test('should return null when two cheater', () => {
        let p1 : Pokemon = Pokemon.createPokemonByName("Milobellus");
        let p2 : Pokemon = Pokemon.createPokemonByName("Gardevoir");
        p1.cheater = true;
        p2.cheater = true;
        expect(xor_cheater(p1, p2)).toBe(null);
    });
});
