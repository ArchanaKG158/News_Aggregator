import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
