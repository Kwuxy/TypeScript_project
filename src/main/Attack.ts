import {Move} from './Move';
import {Pokemon} from "./Pokemon";

function attack(attacker : Pokemon, move : Move, target : Pokemon) : number {
    let L = attacker.level;
    let A = attacker.offensive;
    let D = target.defensive;
    let P = move.power;

    return Math.floor(Math.floor(Math.floor(2 * L / 5 + 2) * A * P / D) / 50) + 2;
}

export {attack};
