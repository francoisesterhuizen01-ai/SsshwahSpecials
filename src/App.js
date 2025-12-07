const handleFilter = (selectedCuisine) => {
  if (selectedCuisine) {
    const filtered = restaurantsData.filter(
      (restaurant) => restaurant.cuisine === selectedCuisine
    );
    setFilteredRestaurants(filtered);
  } else {
    setFilteredRestaurants(restaurantsData);
  }
};

// Update the SearchBar component in the App component
<SearchBar onSearch={handleSearch} onFilter={handleFilter} />;
