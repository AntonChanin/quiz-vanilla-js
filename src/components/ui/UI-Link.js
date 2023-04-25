class UI_Link extends HTMLElement {
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
        this.innerHTML = `<a href="/" class="ui-text ${this.type}">${this.value}</a>`
    };
}

customElements.define('ui-link', UI_Link);
 