import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LightsComponent } from './components/lights/lights.component';
import { DockComponent } from './components/dock/dock.component';
import { StaticCarouselComponent } from './components/static-carousel/static-carousel.component';
import { ScrollIconComponent } from './components/scroll-icon/scroll-icon.component';
import { DetailedCardComponent } from './components/detailed-card/detailed-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PokeapiService } from './service/pokeapi.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
            RouterOutlet,
            NavbarComponent, 
            LightsComponent, 
            DockComponent, 
            StaticCarouselComponent,
            ScrollIconComponent,
            DetailedCardComponent,
            FooterComponent,
            SearchBarComponent,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PokeapiService],
})
export class AppComponent {
  pokemon: any;

  constructor(private pokeapiService: PokeapiService) {}

  updatePokemon(pokemon: any) {
    this.pokemon = pokemon;
  }
}
