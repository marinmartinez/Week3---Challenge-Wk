export class PokeApi {
    url: string;
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    }

    getPoke(): Promise<Array<any>> {
        return fetch(this.url).then((response) => response.json());
    }
}
