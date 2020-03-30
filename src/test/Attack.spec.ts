import {Pokemon} from "../main/Pokemon";
import {attack} from "../main/Attack";
import {Move} from "../main/Move";

describe('Test Attack.ts', () => {
    test('Simple attack should return 8', () => {
        let milobellus : Pokemon = Pokemon.createPokemonByName("Milobellus");
        let gardevoir : Pokemon = Pokemon.createPokemonByName("Gardevoir");
        let wrap : Move = Move.getMoveByName('Wrap');
        expect(attack(milobellus, wrap, gardevoir)).toBe(8);
    })
});
