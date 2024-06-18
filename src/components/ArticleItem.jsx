import React from "react";

const ArticleItem = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank">
        More Info
      </a>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleItem;
