import { PokemonResumido } from "./pokemon-resumido.model";

export class RequisicaoPokemons {
    constructor(
        public count: number,
        public next: string,
        public previous: string,
        public results: Array<any>
    ){}
}