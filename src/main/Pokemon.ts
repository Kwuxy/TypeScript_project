import {Move} from "./Move";

class Pokemon {
    name : string;
    speed : number;
    cheater : boolean;
    level : number;
    offensive : number;
    defensive : number;
    hp : number;
    moves : Move[];

    constructor(name : string, speed : number = 1, offensive : number = 1, defensive : number = 1,
                hp : number = 30, moves : Move[] = [], level : number = 50, cheater : boolean = false) {
        this.name = name;
        this.speed = speed;
        this.offensive = offensive;
        this.defensive = defensive;
        this.hp = hp;
        this.moves = moves;
        this.level = level;
        this.cheater = cheater;
    }

    static createPokemonByName(name : string) : Pokemon {
        let speed : number = 0;
        let offensive : number = 1;
        let defensive : number = 1;
        let hp : number = 30;
        let moves : Move[] = [];

        if(name === "Milobellus") {
            speed = 81;
            offensive = 60;
            defensive = 79;
            hp = 95;
            moves.push(Move.getMoveByName("Wrap"));
        }

        if(name === "Gardevoir") {
            speed = 80;
            offensive = 65;
            defensive = 65;
            hp = 68;
            moves.push(Move.getMoveByName("Ice Punch"))
        }

        return new Pokemon(name, speed, offensive, defensive, hp, moves);
    }
}

// @ts-ignore
export {Pokemon};
