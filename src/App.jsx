import React, { useContext } from "react";
import { PostProvider, PostContext } from "./context/PostContext";
import CardList from "./components/CardList";

function AppContent() {
  const { loading } = useContext(PostContext);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Posts</h1>
      <CardList />
    </div>
  );
}

function App() {
  return (
    <PostProvider>
      <AppContent />
    </PostProvider>
  );
}

export default App;
