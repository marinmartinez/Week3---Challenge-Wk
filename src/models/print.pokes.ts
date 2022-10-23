import { PokeApi } from '../services/pokeapi.js';
import { Component } from '../components/component.js';
import { Header } from '../components/header.js';
export class PokePrint extends Component {
    template: any;
    pokes: any;
    pokesInfo: any;
    api: PokeApi;
    constructor(public selector: string) {
        super();
        this.api = new PokeApi();
        this.pokes = '';
        this.pokesInfo = '';

        this.startFetch();
    }

    async startFetch() {
        this.pokes = await this.api.getPoke();

        const pokemonArr: any = [];
        this.pokes.results.forEach((item: any) => {
            pokemonArr.push(item.url);
        });

        this.pokesInfo = await Promise.all(
            pokemonArr.map((url: any) => fetch(url).then((r) => r.json()))
        );

        this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }

    createTemplate() {
        this.template = '';

        new Header('body');
        this.pokesInfo.forEach((pokemon: any) => {
            console.log(pokemon);

            this.template += `<div class="card"> <h1>${pokemon.species.name}</h1>
                               <img src="${pokemon.sprites.front_default}" alt="" width="100"></div>`;
        });

        return this.template;
    }
}
