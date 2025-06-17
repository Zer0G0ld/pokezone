import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, TitleCasePipe } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonLabel, IonButton } from '@ionic/angular/standalone';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonButton,
    NgFor,
    TitleCasePipe
  ],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  offset = 0;
  limit = 20;
  loading = false;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    if (this.loading) return;
    this.loading = true;
    this.pokemonService.getPokemonList(this.offset, this.limit).subscribe(res => {
      this.pokemons = [...this.pokemons, ...res.results];
      this.offset += this.limit;
      this.loading = false;
    }, () => this.loading = false);
  }

  getPokemonId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  openDetail(name: string) {
    this.router.navigate(['/pokemon-detail', name]);
  }
}
