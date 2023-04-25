class UI_Text extends HTMLElement {
    constructor() {
        super();
    };

    get value() {
        return this.getAttribute('value');
    };

    get dataId() {
        return this.getAttribute('data-id');
    }

    set value(val) {
        this.setAttribute('value', val);
    };

    get type() {
        return this.getAttribute('type') ?? 'primary';
    };
    
    static get observedAttributes() {
        return ['value', 'type', 'data-id'];
    }

    attributeChangesCallback(prop, oldVal, newVal) {
        if (prop === 'value' || prop === 'type' || prop === 'data-id') this.render();
    };


    connectedCallback() {
        this.render();
    };

    render() {
        this.innerHTML = `<span id="${this.dataId}" class="ui-text ${this.type}">${this.value}</span>`
    };
}

customElements.define('ui-text', UI_Text);
 