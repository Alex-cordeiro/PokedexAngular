import { Component, OnInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonResumido } from 'src/app/Models/pokemon-resumido.model';
import { Pokemon } from 'src/app/Models/pokemon.model';
import { RequisicaoPokemons } from 'src/app/Models/requisicao-pokemons.model';
import { PokemonService } from 'src/app/Service/pokemon.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.sass']
})
export class DisplayComponent implements OnInit {

  public pokemonsRequisicao: Array<RequisicaoPokemons> = [];
  public pokemonsResumidos: Array<PokemonResumido> = [];
  public arrayResults: any[] = []
  public pokemonsParaCard: Array<Pokemon> = [];
  public pokemonsCard: Array<Object> = [];
  public pokemonsPesquisaUnitaria: boolean = false;
  public pokemonPesquisaRetorno!: Pokemon;
  constructor(private pokemonService: PokemonService) { }


  ngOnInit(): void {
    this.RetornaPokemons();
  }

  public RetornaPokemons(){
      this.pokemonService.retornaPokemonsResumido().subscribe((pokemonreq: any[]) => {
      this.arrayResults = pokemonreq;

      const linksPokemons = JSON.parse(JSON.stringify(Object.assign({}, this.arrayResults)))

      console.log(linksPokemons.results);
      if(linksPokemons != ""){
        this.pokemonsResumidos = linksPokemons.results;
      }
      
      for(var i = 0; i < this.pokemonsResumidos.length; i++){
        this.ConvertePokemonsParaCard(this.pokemonsResumidos[i]);
        
      }
      
    })
  }  
  
  public ConvertePokemonsParaCard(pokemonResumido: PokemonResumido) {
    this.pokemonService.retornaPokemonCompletoCard(pokemonResumido.url).subscribe((result: any[]) => {
        const pokemonObj = JSON.parse(JSON.stringify(Object.assign({}, result)))     
        this.pokemonsParaCard.push(new Pokemon(pokemonObj.id, pokemonObj.name, pokemonObj.height, pokemonObj.weight, pokemonObj.sprites.other.dream_world.front_default))   
    })
  }

  public RetornaPokemonPesquisa(pokemonPesquisa: string){
    this.pokemonService.retornaPokemonPesquisa(pokemonPesquisa).subscribe((result: any) => {
        this.pokemonPesquisaRetorno = new Pokemon(result.id, result.name, result.height, result.weight, result.sprites.other.dream_world.front_default);
    }) 
    this.pokemonsPesquisaUnitaria = true;
  }
}
