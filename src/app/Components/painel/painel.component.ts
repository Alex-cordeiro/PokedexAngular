import { Component, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.sass']
})
export class PainelComponent implements OnInit, OnChanges {

  public pokemonPesquisa!: string;

  @ViewChild(DisplayComponent, {static:false})
  display!: DisplayComponent;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.pokemonPesquisa);
    if(changes['pokemonPesquisa'].currentValue !== changes['pokemonPesquisa'].previousValue){
      console.log(this.pokemonPesquisa);
    }
  }

  ngOnInit(): void {
    console.log(this.pokemonPesquisa);
  }

  recebePokemonPesquisado(pesquisa: string){
    this.pokemonPesquisa = pesquisa;
    console.log(this.pokemonPesquisa);
    this.display.RetornaPokemonPesquisa(this.pokemonPesquisa);
  }
}
