import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private apiBaseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemon(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/pokemon/${id}`);
  }

  getPokemonSpecies(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/pokemon-species/${id}`);
  }
}
