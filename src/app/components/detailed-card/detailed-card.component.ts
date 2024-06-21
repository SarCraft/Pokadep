import { Component, ViewEncapsulation, Input } from '@angular/core';
import { PokeapiService } from '../../service/pokeapi.service';
import { CapitalizePipe } from '../../pipe/capitalize.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.css'],
  providers: [PokeapiService],
  imports: [CapitalizePipe, CommonModule],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'detailed-card',
  },
  standalone: true,
})
export class DetailedCardComponent {
  @Input() pokemon: any;

  getRandomNumber(): number {
    const maxPokemon = 1009;
    return Math.floor(Math.random() * maxPokemon) + 1;
  }

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit(): void {
    const randomId = this.getRandomNumber();
    this.pokeapiService.getPokemon(randomId).subscribe((response: any) => {
      this.pokemon = response;
    });
  }
}
