import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    NgFor,
    TitleCasePipe
  ]
})
export class PokemonListPage implements OnInit {

  pokemons = [
    { name: 'bulbasaur' },
    { name: 'charmander' },
    { name: 'squirtle' }
  ];

  constructor() { }

  ngOnInit() {}
}
