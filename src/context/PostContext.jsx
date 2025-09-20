import React, { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();

  
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  
  const removeCard = (id) => {
    const index = posts.findIndex((p) => p.id === id);
    if (index !== -1) {
      const updated = [...posts];
      updated.splice(index, 1);
      setPosts(updated);
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        currentPage,
        setCurrentPage,
        perPage,
        loading,
        removeCard,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
