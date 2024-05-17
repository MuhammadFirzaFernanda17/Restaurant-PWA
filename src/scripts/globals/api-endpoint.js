const BASE_URL = 'https://restaurant-api.dicoding.dev/';
const API_ENDPOINT = {
  LIST_RESTAURANT: `${BASE_URL}list`,
  DETAIL_RESTAURANT: (id) => `${BASE_URL}detail/${id}`,
  SEARCH_RESTAURANT: (query) => `${BASE_URL}search?q=${query}`,
  ADD_REVIEW: `${BASE_URL}review`,
  RESTAURANT_IMAGE_SMALL: (pictureId) => `${BASE_URL}images/small/${pictureId}`,
  RESTAURANT_IMAGE_MEDIUM: (pictureId) => `${BASE_URL}images/medium/${pictureId}`,
  RESTAURANT_IMAGE_LARGE: (pictureId) => `${BASE_URL}images/large/${pictureId}`,
  DEFAULT_LANGUAGE: 'en-us',
};

export default API_ENDPOINT;
