import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PokeapiService } from '../../service/pokeapi.service';
import { CapitalizePipe } from '../../pipe/capitalize.pipe';
import { CommonModule } from '@angular/common';
import { DetailedCardComponent } from "../detailed-card/detailed-card.component";

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css'],
    providers: [PokeapiService],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'detailed-card',
    },
    standalone: true,
    imports: [CapitalizePipe, CommonModule, DetailedCardComponent]
})
export class CarouselComponent implements OnInit {
  pokemons: any[] = [];
  activeIndex = 0;

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    for (let i = 1; i <= 151; i++) {
      this.pokeapiService.getPokemon(i).subscribe((pokemon) => {
        this.pokemons.push(pokemon);
      });
    }
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.pokemons.length) % this.pokemons.length;
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.pokemons.length;
  }
}
