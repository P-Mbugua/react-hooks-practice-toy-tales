import React, {useState} from "react";
import axios from "axios";

function ToyForm(addaToy) {

  const [formData, setFormData] = useState({
    name:"",
    image:"",
  });
  function handleClick (event) {
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newToy = {
      ...formData,
      Likes: ""
    }

    axios.post('http://localhost:3001/toys',newToy)
      .then ((response) => addaToy(response.data) )
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          onChange={handleClick}
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={handleClick}
          value={formData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
