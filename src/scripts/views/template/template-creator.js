import RestaurantSource from "../../data/restaurant-source";
import { getRatingHTML } from "../../utils/rating-stars.js";

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant-detail">
      <h2 class="restaurant-detail__name">${restaurant.name}</h2>
      <img class="restaurant-detail__image lazyload" data-src="${RestaurantSource.getRestaurantImageUrl(
        restaurant.pictureId,
        "medium"
      )}" alt="${restaurant.name}" />
      <div class="restaurant-detail__info">
        <h4>Address</h4>
        <p>${restaurant.address}, ${restaurant.city}</p>
        <h4>Description</h4>
        <p>${restaurant.description}</p>
        <h4>Menu</h4>
        <div class="restaurant-detail__menu">
          <h5>Foods</h5>
          <ul>
            ${restaurant.menus.foods
              .map((food) => `<li>${food.name}</li>`)
              .join("")}
          </ul>
          <h5>Drinks</h5>
          <ul>
            ${restaurant.menus.drinks
              .map((drink) => `<li>${drink.name}</li>`)
              .join("")}
          </ul>
        </div>
        <h4>Customer Reviews</h4>
        <div class="restaurant-detail__reviews">
          ${restaurant.customerReviews
            .map(
              (review) => `
            <div class="review">
              <p><strong>${review.name}</strong></p>
              <p>${review.review}</p>
              <p>${review.date}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      </div>
    </div>
  `;

const createRestaurantItemTemplate = (restaurant) => `
<div class="list_item">
  <img class="list_item_thumb lazyload" src="${RestaurantSource.getRestaurantImageUrl(
    restaurant.pictureId
  )}" alt="${restaurant.name}" title="${restaurant.name}">
  <div class="list_item_content">
    <p class="list_item_rating">
      Rating : 
      <a class="list_item_rating_value">${restaurant.rating}</a></br>
      <a class="list_item_rating_value">${getRatingHTML(restaurant.rating)}</a>
    </p>
    <div class="city">${restaurant.city}</div>
    <a href="#/detail/${
      restaurant.id
    }"><h1 class="list_item_title" tabindex="0">${restaurant.name}</h1></a>
    <div class="list_item_desc">${restaurant.description.slice(
      0,
      200
    )}.....</div>
    <br>
    <a href="#/detail/${
      restaurant.id
    }" class="btn btn-lihat-detail">Lihat Detail</a>
  </div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
