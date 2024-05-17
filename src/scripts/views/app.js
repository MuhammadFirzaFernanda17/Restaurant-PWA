import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import '../component/main.js';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
 
    this._initialAppShell();
  }
 
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }
 
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    if (this._content) {
      this._content.innerHTML = await page.render();
      if (page.afterRender) {
        await page.afterRender();
      }
    }
    
    const skipLinkElem = document.querySelector('.skip-link');    
    skipLinkElem.addEventListener('click', (event) => {      
    event.preventDefault();
    document.querySelector('#main-content').focus();
});
  }
}
 
export default App;