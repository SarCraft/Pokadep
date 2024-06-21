import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LightsComponent } from './components/lights/lights.component';
import { DockComponent } from './components/dock/dock.component';
import { StaticCarouselComponent } from './components/static-carousel/static-carousel.component';
import { ScrollIconComponent } from './components/scroll-icon/scroll-icon.component';
import { DetailedCardComponent } from './components/detailed-card/detailed-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            NavbarComponent, 
            LightsComponent, 
            DockComponent, 
            StaticCarouselComponent,
            ScrollIconComponent,
            DetailedCardComponent,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
