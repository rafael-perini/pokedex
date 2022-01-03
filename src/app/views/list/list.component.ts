import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  filter: string = "";
  selectedPokemon: {name: string, number: number} | null = null;

  get pokemons(): {name: string, number: number}[] {
    return this.pokeApiService.pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.filter.toLowerCase())
    });
  }

  get pokemonSrc(): string | void {
    if (this.selectedPokemon) {
      const number = ('000' + this.selectedPokemon.number).slice(-3);
      return `https://serebii.net/sunmoon/pokemon/${number}.png`
    }
  }

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
  }

  selectPokemon(pokemon: any): void {
    this.selectedPokemon = pokemon;
  }

}
