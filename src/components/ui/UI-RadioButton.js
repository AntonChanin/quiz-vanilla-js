class UI_RadioButton extends HTMLElement {

    constructor() {
        super();
    };

    get value() {
        return this.getAttribute('value');
    };

    get className() {
        return this.getAttribute('className') ?? '';
    }

    static get observedAttributes() {
        return ['value', 'selected', 'className'];
    }

    attributeChangesCallback(prop, oldVal, newVal) {
        if (prop === 'value'  || prop === 'className') this.render();
    };

    connectedCallback() {
        this.render();
    };

    render() {
        this.innerHTML = `<div class="ui-radio-button ${this.className}"><span>${this.value}</span><div class="radio" /></div>`
    };
}

customElements.define('ui-radio-button', UI_RadioButton);
 