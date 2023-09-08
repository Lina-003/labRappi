
class Chosen extends HTMLElement {

    static get observedAttributes() {
        return [
            'img', 'name'
        ]
    }
    constructor () {
        super();
        this.attachShadow({mode: "open"});

    }

    connectedCallback() {
        this.render();
        
    }

    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            
          case "img":
            this.chosenImg = newValue;
            break;

          case "name":
            this.chosenName = newValue;
            break;
    
          default:
            break;
        }
    }

    render() {
        
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/chosen/chosen.css"
        
        <section>
            
            <div class="chosen">
            <img src=${this.chosenImg} height = "80np" alt=""></img>
            <h3>${this.chosenName}</h3>
            </div>
        </section>`;
    }
}
customElements.define("app-chosen", Chosen);
export default Chosen;