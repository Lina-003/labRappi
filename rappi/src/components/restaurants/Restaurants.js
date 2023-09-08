
class Restaurants extends HTMLElement {

    static get observedAttributes() {
        return [
            'img', 'title', 'time', 'price','clock'
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
            this.placeImg = newValue;
            break;

          case "title":
            this.placeTitle = newValue;
            break;

          case "time":
            this.placeTime = newValue;
            break;

          case "clock":
            this.placeClock = newValue;
            break;

          case "price":
            this.placePrice = newValue;
            break;
    
          default:
            break;
        }
    }

    render() {
        
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/restaurants/restaurants.css"
        
        <section>
            
            <div class="restaurants">
            <div>
            <img src=${this.placeImg} height = "180np"></img>
            </div>
            <div>
            <h2>${this.placeTitle}</h2>
            <div class="time">
            <img src=${this.placeClock} height = "12np"></img>
            <h3>${this.placeTime} <span>·</span> ${this.placePrice}</h3>
            </div>
            </div>
            </div>
        </section>`;
    }
}
customElements.define("app-restaurants", Restaurants);
export default Restaurants;