import { PokePrint } from './models/print.pokes.js';
import { PokeApi } from './services/pokeapi.js';
new PokePrint(`body`);
const api = new PokeApi();
api.getPoke();
