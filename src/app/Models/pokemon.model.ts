import { PokemonMoves } from "./pokemon-moves.model";
export class Pokemon {
    constructor(
        public id: number,
        public name: string,
        public height: number,
        public weight: number,
        public moves: Array<PokemonMoves>){}
}