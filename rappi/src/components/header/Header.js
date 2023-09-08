
class Header extends HTMLElement {

    static get observedAttributes() {
        return [
            'logo',
            'menu',
            'ubication',
            'mustash',
            'search',
            'profile',
            'shop'
        ];
    }
    constructor () {
        super();
        this.attachShadow({mode: "open"});
        this.menu = "./src/img/icons/menu.png"
        this.logo = "./src/img/logoRappi.png"
        this.ubication = "./src/img/icons/ubication.png"
        this.mustash = "./src/img/icons/mustash.webp"
        this.search = "./src/img/icons/search.png"
        this.profile = "./src/img/icons/profile.png"
        this.shop = "./src/img/icons/shop.png"
    }

    connectedCallback() {
        this.render();
        
    }

    attributeChangedCallback(propName, _, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/header/header.css"
        
        <section>
            <div class="header">
            <div class="left">
            <img src=${this.menu} height = "18np" alt=""></img>
            <img src=${this.logo} height = "22np" alt=""></img>
            </div>

            <div class="ubi">
            <img src=${this.ubication} height = "28np" alt=""></img>
            <h3>Universidad ICESI, Calle 18, Barrio Pance,...</h3>
            </div>

            <div class="center">
            <img src=${this.mustash} height = "35np" alt=""></img>
            <p>Comida, restaurantes, tiendas, productos,...</p>
            </div>

            <div class="searchB">
            <img src=${this.search} height = "22np" alt=""></img>
            </div>
            <div class="right">
            <img src=${this.profile} height = "22np" alt=""></img>
            <h2>Ingreso</h2>
            </div>
            <div class="shopB">
            <img src=${this.shop} height = "22np" alt=""></img>
            </div>
            </div>
        </section>`;
    }
}
customElements.define("app-header", Header);
export default Header;