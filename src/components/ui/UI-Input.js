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

    get type() {
        return this.getAttribute('type');
    };
    
    static get observedAttributes() {
        return ['value', 'type'];
    }

    attributeChangesCallback(prop, oldVal, newVal) {
        if (prop === 'value' || prop === 'type') this.render();
    };

    connectedCallback() {
        this.render();
    };

    render() {
        this.innerHTML = `<input class="ui-input" placeholder="${this.value}" type="${this.type}" />`
    };
}

customElements.define('ui-input', UI_Input);
 