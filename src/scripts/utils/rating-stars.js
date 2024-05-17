const getRatingHTML = (rating) => {
    let fullStars = Math.floor(rating);
    let halfStar = rating - fullStars >= 0.5;
    let starsHTML = '';
  
    for (let i = 0; i < fullStars; i++) {
      starsHTML += '⭐';
    }
  
    if (halfStar) {
      starsHTML += '★';
    }
  
    let unratedStars = 5 - fullStars - (halfStar ? 1 : 0);
    let unratedStarsHTML = '';
  
    for (let i = 0; i < unratedStars; i++) {
      unratedStarsHTML += '☆';
    }
  
    return starsHTML + unratedStarsHTML;
  };
  
  export { getRatingHTML };
  