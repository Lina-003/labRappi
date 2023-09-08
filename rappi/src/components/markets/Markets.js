
class Markets extends HTMLElement {

    static get observedAttributes() {
        return [
            'img', 'name', 'time', 'crono'
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
            this.marketImg = newValue;
            break;

          case "name":
            this.marketname = newValue;
            break;

          case "time":
            this.marketTime = newValue;
            break;

          case "crono":
            this.marketCrono = newValue;
            break;
    
          default:
            break;
        }
    }

    render() {
        
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/markets/markets.css"
        
        <section>
            
            <div class="markets">
            <div>
            <img src=${this.marketImg} height = "80np"></img>
            </div>
            <div>
            <h2>${this.marketname}</h2>
            <div class="time">
            <img src=${this.marketCrono} height = "12np"></img>
            <h3>${this.marketTime}</h3>
            </div>
            </div>
            </div>
        </section>`;
    }
}
customElements.define("app-markets", Markets);
export default Markets;