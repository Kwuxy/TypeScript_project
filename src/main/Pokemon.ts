class Pokemon {
    name : string;
    speed : number;
    cheater : boolean;

    constructor(name : string, speed : number = 0, cheater : boolean = false) {
        this.name = name;
        this.speed = speed;
        this.cheater = cheater;
    }

    static createPokemonByName(name : string) : Pokemon {
        let speed : number = 0;

        if(name === "Milobellus") {
            speed = 81;
        }
        if(name === "Gardevoir") {
            speed = 80;
        }

        return new Pokemon(name, speed);
    }
}

// @ts-ignore
export {Pokemon};
