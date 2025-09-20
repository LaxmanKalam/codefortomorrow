import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import Card from "./Card";
import Pagination from "./Pagination";

const CardList = () => {
  const { posts, currentPage, perPage } = useContext(PostContext);

  const startIndex = (currentPage - 1) * perPage;
  const currentPosts = posts.slice(startIndex, startIndex + perPage);

  return (
    <>
      <div className="card-container">
        {currentPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default CardList;
