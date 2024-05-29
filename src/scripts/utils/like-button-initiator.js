import FavoriteRestaurant from "../data/favorite-restaurant";
import {
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
} from "../views/template/template-creator";

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    if (!this._restaurant || !this._restaurant.id) {
      console.error("Restaurant data or ID is missing");
      return;
    }

    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = this._likeButtonContainer.querySelector("#likeButton");
    if (!likeButton) {
      console.error("Like button not found");
      return;
    }
    likeButton.addEventListener("click", async () => {
      await FavoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();

    const likedButton = this._likeButtonContainer.querySelector("#likeButton");
    if (!likedButton) {
      console.error("Unlike button not found");
      return;
    }
    likedButton.addEventListener("click", async () => {
      if (!this._restaurant.id) {
        throw new Error("Restaurant ID is required");
      }
      await FavoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
