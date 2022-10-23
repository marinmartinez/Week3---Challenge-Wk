export class PokeApi {
    constructor() {
        this.urlDefault = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    }
    // read / get
    getPoke() {
        return fetch(this.urlDefault).then((response) => response.json());
    }
}
