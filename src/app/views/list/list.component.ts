import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import Pokemon from 'src/app/types/Pokemon';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  filter: string = "";
  selectedPokemon: Pokemon | null = null;

  get pokemons(): Pokemon[] {
    const filteredPokemons: Pokemon[] = this.filterPokemons(this.pokeApiService.pokemons);
    return filteredPokemons;
  }

  get pokemonSrc(): string | void {
    if (this.selectedPokemon) {
      const number = ('000' + this.selectedPokemon.number).slice(-3);
      return `https://serebii.net/sunmoon/pokemon/${number}.png`
    }
  }

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.listAll();
  }

  selectPokemon(pokemon: any): void {
    this.selectedPokemon = pokemon;
  }

  private filterPokemons(pokemons: Pokemon[]): Pokemon[] {
    const filteredPokemons: Pokemon[] = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.filter.toLowerCase())
    });

    return filteredPokemons;
  }

}
