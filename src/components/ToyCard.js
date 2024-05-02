import React, { useState } from "react";
import axios from "axios";

function ToyCard({ toy, onDelete }) {

  const [likes, setLikes] = useState(toy.likes);

  const handleLike = () => {
    const updatedLikes = likes + 1;

    axios.patch(`http://localhost:3001/toys/${toy.id}`, { likes: updatedLikes })
      .then(() => {
        setLikes(updatedLikes);
        console.log("Likes updated successfully!");
      })
      .catch(error => {
        console.error('Error updating likes:', error);
      });
  };


  const handleDelete = () => {
    axios.delete(`http://localhost:3001/toys/${toy.id}`)
      .then(() => {
        onDelete(toy.id);
        console.log("Toy deleted successfully!");
        window.location.reload();
      })
      .catch(error => {
        console.error('Error deleting toy:', error);
      });
  };

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"❤️"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
