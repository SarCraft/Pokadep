import { Component } from '@angular/core';
import { MinimizeCardComponent } from '../minimize-card/minimize-card.component';

@Component({
  selector: 'app-static-carousel',
  standalone: true,
  imports: [MinimizeCardComponent],
  templateUrl: './static-carousel.component.html',
  styleUrl: './static-carousel.component.css'
})
export class StaticCarouselComponent {

}
