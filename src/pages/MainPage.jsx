import React, { useState, useEffect } from "react";
import { newsArticles } from "../services/RestAPI";
import ArticleList from "../components/ArticleList";
import SearchBar from "../components/SearchBar";
import FilterOptions from "../components/FilterOptions";

const MainPage = () => {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({
    query: "",
    source: "newsapi",
    country: "us",
    category: "",
  });
  // console.log(articles, "Initial Articles");

  const fetchArticles = async () => {
    try {
      const fetchedArticles = await newsArticles(
        filters.query,
        filters.source,
        filters.category,
        filters.country
      );
      console.log(fetchedArticles, "Fetched Articles");
      setArticles(fetchedArticles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [filters]);

  const handleSearch = (query, country) => {
    setFilters({ ...filters, query, country });
  };

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div>
      <h1>News Aggregator</h1>
      <SearchBar onSearch={handleSearch} />
      <FilterOptions onFilterChange={handleFilterChange} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default MainPage;
