import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

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

  const updateSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(() => {
        navigate(`/snacks/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
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
    updateSnack(snack);
  };
  

  return (
    <div className="New" style={{ textAlign: "center", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Edit Snack</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name of snack"
            value={snack.name}
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="calorie">
          <Form.Label>Calorie:</Form.Label>
          <Form.Control
            type="text"
            placeholder="How Many Calories"
            value={snack.calorie}
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="sugar">
          <Form.Label>Sugar:</Form.Label>
          <Form.Control
            type="text"
            placeholder="How Much Sugar"
            value={snack.sugar}
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="fat">
          <Form.Label>Fat:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Is this Fatty?"
            value={snack.fat}
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="is_healthy">
          <Form.Check
            type="checkbox"
            label="Is This Healthy?"
            checked={snack.is_healthy}
            onChange={handleCheckboxChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ backgroundColor: "#8BC34A" }}>
          Submit
        </Button>
      </Form>

      <Link to={`/snacks/${id}`}>
        <Button variant="danger">Cancel</Button>
      </Link>
    </div>
  );
}

export default EditSnack;
