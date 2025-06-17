import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  offset = 0;
  limit = 20;
  loading = false;

  constructor(private pokemonService: PokemonService) {}

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

}
