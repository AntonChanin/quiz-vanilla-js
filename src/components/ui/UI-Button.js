class UI_Button extends HTMLElement {
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
        this.innerHTML = `<button type="button" class="ui-button ${this.type}">${this.value}</button>`
    };
}

customElements.define('ui-button', UI_Button);
 