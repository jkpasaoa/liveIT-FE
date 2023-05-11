import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewSnack() {
  const navigate = useNavigate();

  const addSnack = async (newSnack) => {
    try {
      const response = await axios.post(`${API}/snacks`, newSnack);
      if (response.data) {
        console.log(response.data);
        navigate(`/snacks`);
      } else {
        throw new Error("Error adding snack");
      }
    } catch (error) {
      console.error(error);
      alert("Error adding snack");
    }
  };


  const [snack, setsnack] = useState({
    "name": "",
    "calorie": "",
    "sugar": "",
    "fat": "",
    "is_healthy": false
  });


  const handleTextChange = (event) => {
    setsnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setsnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack({
      "name": snack.name,
      "calorie": snack.calorie,
      "sugar": snack.sugar,
      "fat": snack.fat,
      "is_healthy": snack.is_healthy
    });
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="snack Title"
          required
        />
        <label htmlFor="calorie">calorie:</label>
        <input
          id="calorie"
          type="text"
          required
          value={snack.calorie}
          placeholder="calorie Name"
          onChange={handleTextChange}
        />
        <label htmlFor="sugar">Album:</label>
        <input
          id="sugar"
          type="text"
          name="sugar"
          value={snack.sugar}
          placeholder="Album Name"
          onChange={handleTextChange}
        />
        <label htmlFor="fat">Time:</label>
        <input
          id="fat"
          type="text"
          name="fat"
          value={snack.fat}
          placeholder="snack Duration"
          onChange={handleTextChange}
        />
        <label htmlFor="is_healthy">Favorite:</label>
        <input
          id="is_healthy"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={snack.is_healthy}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewSnack;