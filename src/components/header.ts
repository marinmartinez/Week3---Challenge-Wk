import { Component } from './component.js';

export class Header extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }

    createTemplate() {
        this.template = `<header>
           <img
                                class="logo"
                 src="./css/pokemon-logo-png-1421.png"
                alt=""/>
        </header>`;

        return this.template;
    }
}
