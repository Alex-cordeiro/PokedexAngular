import { PokemonMoves } from "./pokemon-moves.model";
export class Pokemon {
    public id: number = 0;
    public name: string = '';
    public height: number = 0;
    public weight: number = 0;
    public avatar: string = '';

    constructor(Id:number, name:string, height:number, weight:number, avatar:string){
        this.id = Id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.avatar = avatar;
    }

}