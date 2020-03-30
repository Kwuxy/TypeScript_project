import {Pokemon} from "../main/Pokemon";

describe('Test Pokemon.ts', () => {
    test('Pokemon name should be equal to constructor argument', () => {
        let name = 'Bulbizarre';
        let pokemon = new Pokemon(name);
        expect(pokemon.name).toBe(name);
    })
});
