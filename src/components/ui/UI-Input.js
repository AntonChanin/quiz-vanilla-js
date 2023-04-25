class UI_Input extends HTMLElement {
    constructor() {
        super();
    };

    get value() {
        return this.getAttribute('value');
    };

    set value(val) {
        this.setAttribute('value', val);
    };
    
    static get observedAttributes() {
        return ['value'];
    }

    attributeChangesCallback(prop, oldVal, newVal) {
        if (prop === 'value') this.render();
    };

    connectedCallback() {
        this.render();
    };

    render() {
        this.innerHTML = `<input class="ui-input" placeholder="${this.value}" />`
    };
}

customElements.define('ui-input', UI_Input);
 