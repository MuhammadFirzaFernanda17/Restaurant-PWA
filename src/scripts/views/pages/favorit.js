import FavoriteRestaurant from '../../data/favorite-restaurant';
import { createRestaurantItemTemplate } from '../template/template-creator';

const FavoritePage = {
  async render() {
    return `
      <h2>Favorite Page</h2>
      <div id="restaurantContainer"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurantContainer');
    restaurantContainer.innerHTML = '';

    if (restaurants.length === 0) {
      restaurantContainer.innerHTML = '<p>No favorite restaurants yet.</p>';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default FavoritePage;
