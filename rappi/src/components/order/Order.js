
class Order extends HTMLElement {

    static get observedAttributes() {
        return [
            'img', 'title'
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
            this.orderImg = newValue;
            break;

          case "title":
            this.orderTitle = newValue;
            break;
    
          default:
            break;
        }
    }

    render() {
        
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/order/order.css"
        
        <section>
            
            <div class="order">
            <img src=${this.orderImg} height = "120np"></img>
            <h3>${this.orderTitle}</h3>
            </div>
        </section>`;
    }
}
customElements.define("app-order", Order);
export default Order;