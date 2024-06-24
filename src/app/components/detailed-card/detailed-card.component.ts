import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { PokeapiService } from '../../service/pokeapi.service';
import { CapitalizePipe } from '../../pipe/capitalize.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.css'],
  providers: [PokeapiService],
  standalone: true,
  imports: [CapitalizePipe, CommonModule],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'minimize-card',
  },
})
export class DetailedCardComponent implements OnInit {
  @Input() pokemon: any;
  weaknesses: string[] = [];
  strengths: string[] = [];

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit(): void {
    if (this.pokemon) {
      this.pokeapiService.getPokemonType(this.pokemon.types[0].type.url)
        .subscribe((typeResponse: any) => {
          this.weaknesses = typeResponse.damage_relations.double_damage_from
            .map((type: any) => type.name);
          this.strengths = typeResponse.damage_relations.double_damage_to
            .map((type: any) => type.name);
        });
    }
  }

  updatePokemon(pokemon: any) {
    this.pokemon = pokemon;
  }
}
