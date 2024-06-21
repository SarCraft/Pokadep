import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemon(id: number) {
    return this.http.get(`${this.apiUrl}/pokemon/${id}`);
  }

  getPokemonSpecies(id: number) {
    return this.http.get(`${this.apiUrl}/type/${id}`);
  }
}
