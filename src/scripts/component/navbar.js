import DrawerInitiator from '../utils/drawer-initiator';

class NavigationElement extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <header class="app-bar">
        <div class="app-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
          <h1>Foodies Hunt</h1>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a href="#/utama">Utama</a></li>
            <li><a href="#/favorit">Favorit</a></li>
            <li><a href="https://www.linkedin.com/in/muhammad-firza-fernanda-84abb3221/">About Us</a></li>
          </ul>
        </nav>
      </header>
    `;
  }

  connectedCallback() {
    DrawerInitiator.init({
      button: this.querySelector('#hamburgerButton'),
      drawer: this.querySelector('#navigationDrawer'),
      content: document.querySelector('#main-content'),
    });
  }
}

customElements.define('navigation-element', NavigationElement);
