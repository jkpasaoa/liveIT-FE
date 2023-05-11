// import { Link } from "react-router-dom";

// function EditSnack() {

//   return (
//     <div>

//     </div>
//   );
// }

// export default EditSnack;

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function EditSnack() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    calorie: "",
    sugar: "",
    fat: "",
    is_healthy: false,
  });

  // id SERIAL PRIMARY KEY,
  // name TEXT NOT NULL,
  // calorie TEXT,
  // sugar TEXT,
  // fat TEXT,
  // is_healthy BOOLEAN

  const updateSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(
        () => {
          navigate(`/snacks/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then(
      (response) => setSnack(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack, id);
  };
  
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of snack"
          required
        />
        <label htmlFor="calorie">Calorie:</label>
        <input
          id="calorie"
          type="text"
          value={snack.calorie}
          placeholder="How Many Calories"
          onChange={handleTextChange}
        />
        <label htmlFor="sugar">Sugar:</label>
        <input
          id="sugar"
          type="text"
          value={snack.sugar}
          placeholder="How Much Sugar"
          onChange={handleTextChange}
        />
        <label htmlFor="fat">Fat:</label>
        <input
          id="fat"
          type="text"
          value={snack.fat}
          placeholder="Is this Fatty?"
          onChange={handleTextChange}
        />
        <label htmlFor="is_healthy">Is This Healthy?:</label>
        <input
          id="is_healthy"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={snack.is_healthy}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/snacks/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default EditSnack;