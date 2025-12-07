import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetail from "./components/RestaurantDetail";
import SearchBar from "./components/SearchBar";
import LanguageSelector from "./components/LanguageSelector";
import restaurantsData from "./data";
import translations from "./translations";

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantsData);
  const [favorites, setFavorites] = useState([]);
  const [selectedDay, setSelectedDay] = useState(
    new Date().toLocaleString("en-US", { weekday: "long" })
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("");
  const [language, setLanguage] = useState("en"); // Default language is English

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    // Load favorites from localStorage when the component mounts
    const savedFavorites = localStorage.getItem("restaurantFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    // Load saved language preference if available
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Save favorites to localStorage whenever it changes
    localStorage.setItem("restaurantFavorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem("preferredLanguage", language);
  }, [language]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);

    // Scroll to the details section
    setTimeout(() => {
      const detailElement = document.querySelector(".restaurant-detail");
      if (detailElement) {
        detailElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
    applyFilters(query, cuisineFilter);
  };

  const handleFilter = (selectedCuisine) => {
    setCuisineFilter(selectedCuisine);
    applyFilters(searchTerm, selectedCuisine);
  };

  const applyFilters = (query, cuisine) => {
    let filtered = restaurantsData;

    // Apply search filter
    if (query) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(lowerQuery) ||
          restaurant.specials.toLowerCase().includes(lowerQuery) ||
          restaurant.district.toLowerCase().includes(lowerQuery)
      );
    }

    // Apply cuisine filter
    if (cuisine) {
      filtered = filtered.filter(
        (restaurant) => restaurant.cuisine === cuisine
      );
    }

    setFilteredRestaurants(filtered);
  };

  const toggleFavorite = (restaurant) => {
    if (favorites.some((fav) => fav.id === restaurant.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== restaurant.id));
    } else {
      setFavorites([...favorites, restaurant]);
    }
  };

  // Filter restaurants by day
  const restaurantsForSelectedDay = filteredRestaurants.filter(
    (restaurant) =>
      Array.isArray(restaurant.days_active) &&
      restaurant.days_active.includes(selectedDay)
  );

  // Get current language translations
  const currentTranslations = translations[language];

  return (
    <div className="App">
      <LanguageSelector
        currentLanguage={language}
        onLanguageChange={handleLanguageChange}
      />

      <header>
        <h1>{currentTranslations.appTitle}</h1>
      </header>

      <nav className="tab-navigation">
        {daysOfWeek.map((day) => (
          <button
            key={day}
            className={selectedDay === day ? "active" : ""}
            onClick={() => setSelectedDay(day)}
          >
            {currentTranslations.days[day]}
          </button>
        ))}
      </nav>

      <main>
        <SearchBar
          onSearch={handleSearch}
          onFilter={handleFilter}
          translations={currentTranslations}
        />

        <RestaurantList
          onSelect={handleSelect}
          restaurants={restaurantsForSelectedDay}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          translations={currentTranslations}
        />

        {selectedRestaurant && (
          <RestaurantDetail
            restaurant={selectedRestaurant}
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
            translations={currentTranslations}
          />
        )}
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
