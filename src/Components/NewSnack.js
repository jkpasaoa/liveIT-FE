import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

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
    name: "",
    calorie: "",
    sugar: "",
    fat: "",
    is_healthy: false,
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
      name: snack.name,
      calorie: snack.calorie,
      sugar: snack.sugar,
      fat: snack.fat,
      is_healthy: snack.is_healthy,
    });
  };

  return (
    <div className="New" style={{ textAlign: "center", maxWidth: "500px", margin: "0 auto" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={snack.name}
            placeholder="What is This Snack?"
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="calorie">
          <Form.Label>Calorie:</Form.Label>
          <Form.Control
            type="text"
            value={snack.calorie}
            placeholder="How Many Calories?"
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="sugar">
          <Form.Label>Sugar:</Form.Label>
          <Form.Control
            type="text"
            value={snack.sugar}
            placeholder="How Much Sugar?"
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="fat">
          <Form.Label>Fat:</Form.Label>
          <Form.Control
            type="text"
            value={snack.fat}
            placeholder="How Much Fat?"
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
    </div>
  );
}

export default NewSnack;
