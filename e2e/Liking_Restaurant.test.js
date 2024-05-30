const assert = require("assert");

Feature("Liking and Unliking Restaurant");

Before(({ I }) => {
  I.amOnPage("#/favorit");
  I.see("No favorite restaurants yet.", "#restaurantContainer");
});

const likeFirstRestaurant = async (I) => {
  I.amOnPage("/");
  I.waitForElement(".list_item_title", 5);
  I.seeElement(".list_item_title");
  const firstRestaurant = locate(".list_item_title").first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement("#likeButton", 5);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("#/favorit");
  return firstRestaurantName;
};

Scenario("liking one restaurant", async ({ I }) => {
  const firstRestaurantName = await likeFirstRestaurant(I);

  I.waitForElement(".list_item_title", 5);
  I.seeElement(".list_item_title");
  const likedRestaurantName = await I.grabTextFrom(".list_item_title");
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario("unliking one restaurant", async ({ I }) => {
  const firstRestaurantName = await likeFirstRestaurant(I);

  I.waitForElement(".list_item_title", 5);
  I.seeElement(".list_item_title");
  I.click(".list_item_title");
  I.waitForElement("#likeButton", 5);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("#/favorit");

  I.dontSeeElement(".list_item_title");
  I.see("No favorite restaurants yet.", "#restaurantContainer");
});
