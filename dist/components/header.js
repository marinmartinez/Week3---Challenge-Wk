import { Component } from './component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
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
