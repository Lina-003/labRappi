import { dataRestaurants, dataChosen, dataOrder, dataMarkets } from './dataHome.js';
import * as components from './src/components/index.js'

class App extends HTMLElement {
    static get observedAttributes() {
        return ['banner', 'pizza']
    }
    constructor() {
        super();
        this.attachShadow({mode: "open"})
        this.banner = "./src/img/banner2.png";
    }

    attributeChangedCallback(propName, _, newValue) {
        this[propName] = newValue;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {

        const places = dataRestaurants.map(
            (place) => 
            `<app-restaurants img="${place.img}" title="${place.title}" clock="${place.clock}" time="${place.time}" price="${place.price}"></app-restaurants>`
        )
        const placeJoined = places.join("");

        const chosen = dataChosen.map(
            (chose) =>
            `<app-chosen img="${chose.img}" name="${chose.name}"></app-chosen>`
        )
        const choseJoined = chosen.join("");

        const ordered = dataOrder.map(
            (order) =>
            `<app-order img="${order.img}" title="${order.title}"></app-order>`
        )
        const orderJoined = ordered.join("");

        const markets = dataMarkets.map(
            (market) =>
            `<app-markets img="${market.img}" name="${market.name}" time="${market.time}" crono="${market.crono}"></app-markets>`
        )
        const marketsJoined = markets.join("")
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles.css">
        <app-header></app-header>
        <img src=${this.banner} height="645np"></img>
        <p>Top restaurantes cerca de ti</p>
        <div class="place">${placeJoined}</div>
        <p>¡Los 10 más elegidos!</p>
        <div class="chose">${choseJoined}</div>
        <p>¡Pide ahora, y nosotros de te llevamos!</p>
        <div class="order">${orderJoined}</div>
        <p>Top mercados cerca de ti</p>
        <div class="markets">${marketsJoined}</div>
        `;
        
        
    }
}

customElements.define("app-container", App);