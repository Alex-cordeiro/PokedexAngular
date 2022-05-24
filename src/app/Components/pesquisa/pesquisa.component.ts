import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PokemonPesquisa } from 'src/app/Models/pokemon-pesquisa.model';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.sass']
})
export class PesquisaComponent implements OnInit {

  public formPesquisa!: FormGroup;
  @Output()  pesquisa: EventEmitter<string> = new EventEmitter();
  constructor(private formBuilder:FormBuilder, ) { }

  ngOnInit(): void {
    this.criarFormulario(new PokemonPesquisa());
  }

  criarFormulario(pokemonPesquisa:PokemonPesquisa) {
    this.formPesquisa = this.formBuilder.group({
      nomeOuCodigo: [pokemonPesquisa.nomeOuCodigo]
    })
  }

  enviarPokemonPesquisado(){
    if(this.formPesquisa.controls['nomeOuCodigo'].value.length != ""){
      this.pesquisa.emit(this.formPesquisa.controls['nomeOuCodigo'].value);
    }
    
  }
}
