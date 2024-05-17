class HeroElement extends HTMLElement {
    constructor() {
      super();
      this.setAttribute("custom-attribute", "value-of-custom-attribute");
      this.innerHTML = `
        <div class="hero" alt="Background Hero/Jumbotron">
          <div class="hero-text">
            <h1>FOODIES HUNT</h1>
            <br>
            <h2>Eksplorasi restoran yang ingin anda datang!</h2>
            <br><br>
            <a href="#utama" class="btn btn-primary" id="view-restaurants-btn">LIHAT RESTAURANT</a>
          </div>
        </div>
      `;
    }
  }

  customElements.define("hero-element", HeroElement);
  