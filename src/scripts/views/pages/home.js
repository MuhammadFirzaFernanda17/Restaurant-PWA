import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../template/template-creator';

const HomePage = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Explore Restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getListOfRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default HomePage;
