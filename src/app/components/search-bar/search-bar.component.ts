import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { PokeapiService } from '../../service/pokeapi.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone: true,
  providers: [PokeapiService],
})
export class SearchBarComponent {
  @Output() pokemonFound = new EventEmitter<any>();
  @ViewChild('searchInput') searchInput?: ElementRef;

  constructor(private pokeapiService: PokeapiService) {}

  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const pokemonName = this.searchInput?.nativeElement.value;
      if (pokemonName.length > 0) {
        this.pokeapiService.getPokemonByName(pokemonName).subscribe((response: any) => {
          this.pokemonFound.emit(response);
        });
      }
    }
  }
}
