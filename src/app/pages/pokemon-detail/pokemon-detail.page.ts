import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class PokemonDetailPage implements OnInit {
  pokemonData: any;
  name: string = '';

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name')!;
    this.pokemonService.getPokemonDetail(this.name).subscribe(data => {
      this.pokemonData = data;
    });
  }
}
