import {Pokemon} from "./Pokemon";

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

function turn_order(p1 : Pokemon, p2 : Pokemon) : Pokemon {
    let cheater = xor_cheater(p1, p2);
    if(cheater !== null) return cheater;

    if(p1.speed === p2.speed) {
        if(getRandomInt(1) == 0) { return p1; }
        else { return p2; }
    }

    return p1.speed > p2.speed ? p1 : p2;
}

function xor_cheater(p1 : Pokemon, p2 : Pokemon) : Pokemon | null {
    if(p1.cheater && !p2.cheater) {
        return p1;
    }

    if(p2.cheater && !p1.cheater) {
        return p2;
    }

    return null;
}

export {turn_order, xor_cheater};
