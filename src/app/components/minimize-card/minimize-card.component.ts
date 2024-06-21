import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugLabelComponent } from '../Label/bug/bug.component';
import { IceLabelComponent } from '../Label/ice/ice.component';
import { DarkLabelComponent } from '../Label/dark/dark.component';
import { FireLabelComponent } from '../Label/fire/fire.component';
import { RockLabelComponent } from '../Label/rock/rock.component';
import { FairyLabelComponent } from '../Label/fairy/fairy.component';
import { GhostLabelComponent } from '../Label/ghost/ghost.component';
import { GrassLabelComponent } from '../Label/grass/grass.component';
import { SteelLabelComponent } from '../Label/steel/steel.component';
import { WaterLabelComponent } from '../Label/water/water.component';
import { DragonLabelComponent } from '../Label/dragon/dragon.component';
import { FlyingLabelComponent } from '../Label/flying/flying.component';
import { GroundLabelComponent } from '../Label/ground/ground.component';
import { NormalLabelComponent } from '../Label/normal/normal.component';
import { PoisonLabelComponent } from '../Label/poison/poison.component';
import { PsychicLabelComponent } from '../Label/psychic/psychic.component';
import { ElectricLabelComponent } from '../Label/electric/electric.component';
import { FightingLabelComponent } from '../Label/fighting/fighting.component';
import { PokeapiService } from '../../service/pokeapi.service';
import { CapitalizePipe } from '../../pipe/capitalize.pipe';

@Component({
  selector: 'app-minimize-card',
  standalone: true,
  imports: [
    CommonModule,
    BugLabelComponent,
    IceLabelComponent, 
    DarkLabelComponent,
    FireLabelComponent,
    RockLabelComponent,
    FairyLabelComponent,
    GhostLabelComponent,
    GrassLabelComponent,
    SteelLabelComponent,
    WaterLabelComponent,
    DragonLabelComponent,
    FlyingLabelComponent,
    GroundLabelComponent,
    NormalLabelComponent,
    PoisonLabelComponent,
    PsychicLabelComponent,
    ElectricLabelComponent,
    FightingLabelComponent,
    CapitalizePipe,
  ],
  templateUrl: './minimize-card.component.html',
  styleUrl: './minimize-card.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'minimize-card',
  },
})
export class MinimizeCardComponent implements OnInit {
  pokemon: any;

  getRandomNumber(): number {
    const maxPokemon = 1009;
    return Math.floor(Math.random() * maxPokemon) + 1;
  }

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
    const randomId = this.getRandomNumber();
    this.pokeapiService.getPokemon(randomId).subscribe((response: any) => {
      this.pokemon = response;
    });
  }
}
