import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LightsComponent } from './components/lights/lights.component';
import { DockComponent } from './components/dock/dock.component';
import { StaticCarouselComponent } from './components/static-carousel/static-carousel.component';
import { ScrollIconComponent } from './components/scroll-icon/scroll-icon.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            NavbarComponent, 
            LightsComponent, 
            DockComponent, 
            StaticCarouselComponent,
            ScrollIconComponent,
            CarouselComponent,
            FooterComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
