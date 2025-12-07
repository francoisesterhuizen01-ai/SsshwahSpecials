import React, { useState } from "react";

function SearchBar({ onSearch, onFilter, translations }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleCuisineChange = (e) => {
    const value = e.target.value;
    setCuisineFilter(value);
    onFilter(value);
  };

  // List of all cuisines
  const cuisines = [
    "Cantonese",
    "Modern Cantonese",
    "Cha Chaan Teng",
    "International Buffet",
    "Japanese",
    "Japanese Yakitori",
    "Hong Kong Dessert",
    "Thai",
    "Italian",
    "French",
    "Mexican",
    "Sichuan",
    "Modern Chinese",
    "Anglo-Indian",
  ];

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={translations.searchPlaceholder}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={cuisineFilter} onChange={handleCuisineChange}>
        <option value="">{translations.allCuisines}</option>
        {cuisines.map((cuisine) => (
          <option key={cuisine} value={cuisine}>
            {translations.cuisines[cuisine]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
