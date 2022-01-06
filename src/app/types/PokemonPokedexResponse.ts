import PokemonSpeciePokemonPokedexResponse from "./PokemonSpeciePokemonPokedexResponse";

export default interface PokemonPokedexResponse {
    entry_number: number;
    pokemon_species: PokemonSpeciePokemonPokedexResponse
}