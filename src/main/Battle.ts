import {Pokemon} from "./Pokemon";
import {turn_order} from "./TurnOrder";
import {attack} from "./Attack";

class Battle {
    playMatch(fighters : Pokemon[]) : Pokemon {
        while(this.allPokemonsAreAlive(fighters)) {
            this.playRound(fighters)
        }

        return fighters.filter(pokemon => this.pokemonIsAlive(pokemon))[0];
    }

    playRound(fighters: Pokemon[]) {
        let firstPlayer = turn_order(fighters[0], fighters[1]);
        let secondPlayer = fighters.filter(pokemon => pokemon !== firstPlayer)[0];

        let damages = attack(firstPlayer, firstPlayer.moves[0], secondPlayer);
        secondPlayer.hp -= damages;
        if(!this.pokemonIsAlive(secondPlayer)) return;

        damages = attack(secondPlayer, secondPlayer.moves[0], firstPlayer);
        firstPlayer.hp -= damages;
    }

    allPokemonsAreAlive(pokemons : Pokemon[]) {
        return pokemons.filter(pokemon => this.pokemonIsAlive(pokemon)).length === 2;
    }

    pokemonIsAlive(pokemon : Pokemon) {
        return pokemon.hp > 0;
    }
}

export {Battle};
