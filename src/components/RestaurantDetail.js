import React, { useState } from "react";

function RestaurantDetail({
  restaurant,
  onToggleFavorite,
  favorites,
  translations,
}) {
  const isFavorite = favorites.some((fav) => fav.id === restaurant.id);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle image loading and errors
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (e) => {
    e.target.src =
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"; // Default fallback image
  };

  return (
    <div className="restaurant-detail">
      <h2>
        {restaurant.name}
        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => onToggleFavorite(restaurant)}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </h2>

      <span className="cuisine-tag">
        {translations.cuisines[restaurant.cuisine]}
      </span>

      <div className="image-container">
        {!imageLoaded && <div className="image-loading">Loading image...</div>}
        <img
          src={restaurant.image}
          alt={restaurant.name}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
      </div>

      <div className="special-price">{restaurant.specials}</div>

      <p className="special-description">{restaurant.description}</p>

      <div className="address">
        <strong>{translations.address}:</strong> {restaurant.address}
      </div>

      <div className="contact">
        <strong>{translations.phone}:</strong> {restaurant.phone}
      </div>

      <div className="contact">
        <strong>{translations.available}:</strong> {restaurant.time_slot}
      </div>

      <div className="restaurant-actions">
        <button
          onClick={() =>
            window.open(`tel:${restaurant.phone.replace(/\s+/g, "")}`)
          }
        >
          {translations.callRestaurant}
        </button>
        <button
          onClick={() =>
            window.open(
              `https://maps.google.com/?q=${encodeURIComponent(
                restaurant.address + ", Hong Kong"
              )}`
            )
          }
        >
          {translations.viewOnMap}
        </button>
      </div>
    </div>
  );
}

export default RestaurantDetail;
