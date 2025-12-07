import React from "react";

function RestaurantList({
  onSelect,
  restaurants,
  favorites,
  onToggleFavorite,
  translations,
}) {
  if (restaurants.length === 0) {
    return (
      <div className="restaurant-list">
        <h2>{translations.availableRestaurants}</h2>
        <p>{translations.noResults}</p>
      </div>
    );
  }

  return (
    <div className="restaurant-list">
      <h2>{translations.availableRestaurants}</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} onClick={() => onSelect(restaurant)}>
            <div>
              <div className="restaurant-name">{restaurant.name}</div>
              <div className="restaurant-cuisine">
                {translations.cuisines[restaurant.cuisine]} •{" "}
                {restaurant.district}
              </div>
            </div>
            <button
              className={`favorite-btn ${
                favorites.some((fav) => fav.id === restaurant.id)
                  ? "active"
                  : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(restaurant);
              }}
            >
              {favorites.some((fav) => fav.id === restaurant.id) ? "★" : "☆"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
