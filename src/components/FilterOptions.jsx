import React from "react";

const FilterOptions = ({ onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div>
      <label>Article List</label>
      <select name="source" onChange={handleChange}>
        <option value="newsapi">NewsAPI</option>
        <option value="opennews">OpenNews</option>
        <option value="newsapi.org">NewsAPI.org</option>
      </select>

      <div>
        <label>Category</label>
        <select name="category" onChange={handleChange}>
          <option value="">All</option>
          <option value="business">Entertainment</option>
          <option value="technology">Technology</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
