import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";

const Pagination = () => {
  const { posts, perPage, currentPage, setCurrentPage } =
    useContext(PostContext);

  const totalPages = Math.ceil(posts.length / perPage);

  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
      >
        ⬅ Prev
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() =>
          setCurrentPage((p) => Math.min(p + 1, totalPages))
        }
        disabled={currentPage === totalPages}
      >
        Next ➡
      </button>
    </div>
  );
};

export default Pagination;
