
class FooterElement extends HTMLElement {
    constructor() {
      super();
      this.setAttribute("custom-attribute", "value-of-custom-attribute");
      this.innerHTML = `
      <div class="container">
      <p>&copy; 2024 - Foodies Hunt</p>
      </div>
      `;
    }
  }

  customElements.define("footer-element", FooterElement);