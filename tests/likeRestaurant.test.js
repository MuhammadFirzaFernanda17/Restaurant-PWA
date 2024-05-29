import FavoriteRestaurant from "../src/scripts/data/favorite-restaurant";
import * as TestFactories from "./helpers/testFactories";

describe("Liking A Restaurant", () => {
  beforeEach(async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  });

  it("should show the like button when the Restaurant has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the Restaurant has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  it("should be able to like the Restaurant", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    const likeButton = document.querySelector("#likeButton");
    expect(likeButton).toBeTruthy();

    likeButton.dispatchEvent(new Event("click"));
    const restaurant = await FavoriteRestaurant.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurant.deleteRestaurant(1);
  });

  it("should not add a Restaurant when it has no id", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    const likeButton = document.querySelector("#likeButton");
    expect(likeButton).toBeFalsy();

    if (likeButton) {
      likeButton.dispatchEvent(new Event("click"));
    }

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });
});
