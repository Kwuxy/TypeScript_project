import {Pokemon} from "./Pokemon";

function turn_order(p1 : Pokemon, p2 : Pokemon) : Pokemon {
    if(p1.cheater && !p2.cheater) {
        return p1;
    }

    if(p2.cheater && !p1.cheater) {
        return p2;
    }

    return p1.speed > p2.speed ? p1 : p2;
}



export {turn_order};
