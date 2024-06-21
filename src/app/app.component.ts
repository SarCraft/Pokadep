import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LightsComponent } from './components/lights/lights.component';
import { DockComponent } from './components/dock/dock.component';
import { MinimizeCardComponent } from './components/minimize-card/minimize-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LightsComponent, DockComponent, MinimizeCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
