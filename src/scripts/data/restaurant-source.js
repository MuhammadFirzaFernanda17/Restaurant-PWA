import CONFIG from '../globals/config';

class RestaurantSource {
  static async getListOfRestaurants() {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}list`);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
      return null;
    }
  }

  static async getRestaurantDetail(id) {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}detail/${id}`);
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error('Error fetching restaurant detail:', error);
      return null;
    }
  }

  static async searchRestaurants(query) {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}search?q=${query}`);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error('Error searching restaurants:', error);
      return null;
    }
  }

  static async addReview(reviewData) {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });
      const responseJson = await response.json();
      return responseJson.customerReviews;
    } catch (error) {
      console.error('Error adding review:', error);
      return null;
    }
  }

  static getRestaurantImageUrl(pictureId, size = 'medium') {
    switch (size) {
      case 'small':
        return `${CONFIG.BASE_IMAGE_URL_SMALL}${pictureId}`;
      case 'medium':
        return `${CONFIG.BASE_IMAGE_URL_MEDIUM}${pictureId}`;
      case 'large':
        return `${CONFIG.BASE_IMAGE_URL_LARGE}${pictureId}`;
      default:
        return `${CONFIG.BASE_IMAGE_URL_MEDIUM}${pictureId}`;
    }
  }
}

export default RestaurantSource;
