import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs";
import { Pokemon } from "../Models/pokemon.model";
import { RequisicaoPokemons } from "../Models/requisicao-pokemons.model";
import { PokemonResumido } from "../Models/pokemon-resumido.model";

@Injectable({
    providedIn:'root'
})

export class PokemonService {
    private url = 'https://pokeapi.co/api/v2/pokemon/'; //PokeAPI address

    //injetando o httpClient
    constructor(private httpclient: HttpClient){}

    //Headers 
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    //Obtem todos os pokemons dentro de um range
    retornaPokemonsResumido(): Observable<any[]>{
        return this.httpclient.get<any[]>(this.url)
        .pipe(
            retry(2)
        )
    }

    retornaPokemonCompletoCard(urlPokemonCompleto:string): Observable<any[]>{
        return this.httpclient.get<any[]>(urlPokemonCompleto)
        .pipe(
            retry(2)
        )
    }


  
}