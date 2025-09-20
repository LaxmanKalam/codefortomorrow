import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";

const Card = ({ post }) => {
  const { removeCard } = useContext(PostContext);

  return (
    <div className="card">
      <button className="remove-btn" onClick={() => removeCard(post.id)}>
        ❌
      </button>
      <h3>{post.title}</h3>
      
      <p>{post.body}</p>
      <small>{new Date().toUTCString()}</small>
      <div><img src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?cs=srgb&dl=pexels-olly-927022.jpg&fm=jpg" alt="Image loading" srcset=""  height={110} width={300} style={{marginLeft:"18px", marginTop:"20px"}}/></div>
    </div>
  );
};

export default Card;
