import  './index';

class UI_Form extends HTMLElement {
    constructor() {
        super();
    };

    get value() {
        return this.getAttribute('value');
    };

    static get observedAttributes() {
        return ['value'];
    }

    toggleSelected () {
        if (!this.selected) {this.selected = 'selected';}
        else {this.selected = '';}
    }

    attributeChangesCallback(prop, oldVal, newVal) {
        if (prop === 'value') this.render();
    };

    connectedCallback() {
        this.render();
    };

    render() {
    };
}

customElements.define('ui-form', UI_Form);
 