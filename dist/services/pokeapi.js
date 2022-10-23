export class PokeApi {
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    }
    getPoke() {
        return fetch(this.url).then((response) => response.json());
    }
}
