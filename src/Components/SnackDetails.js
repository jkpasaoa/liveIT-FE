import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ButtonGroup, Button, Card } from "react-bootstrap";
import Reviews from "./Reviews";
import Cart from "../Components/Cart"

const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
  const [snack, setsnack] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => {
        console.log(response.data);
        setsnack(response.data);
      })
      .catch((error) => {
        console.warn("catch", error);
      });
  }, [id]);

  const deletesnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = () => {
    deletesnack();
  };

  // const addToCart = () => {
  //   // Implement the logic to add the snack to the shopping cart
  //   // You can use the snack object to pass the necessary data to the shopping cart
  // };

  return (
    <div>
      <Card className="text-center" style={{ backgroundColor: "#DFFF00" }}>
        <Card.Body>
          <h3 className="text-success">
            {snack.is_healthy ? <span>🥟</span> : <span>Not Healthy</span>}{" "}
            {snack.name}
          </h3>
          <h5>
            <span>{/* <a href={snack.url}>{snack.name}</a> */}</span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {snack.url}
          </h5>
          <h6 className="text-muted">{snack.calorie} Calories</h6>
          {snack ? (
            <div>
              <p>Sugars: {snack.sugar}</p>
              <p>Fats: {snack.fat}</p>
            </div>
          ) : null}

          <ButtonGroup className="my-3">
            <Link
              to={`/snacks`}
              className="btn btn-primary"
              style={{ backgroundColor: "#77BE5E" }}
            >
              🔙
            </Link>
            <Link
              to={`/snacks/${id}/edit`}
              className="btn btn-warning"
              style={{ backgroundColor: "#70A288" }}
            >
              ✍🏼
            </Link>
            <Button
              className="btn btn-danger"
              onClick={handleDelete}
              style={{ backgroundColor: "#4D7C64" }}
            >
              🗑️
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      <Reviews />
      <Cart snackName={snack.name} />
    </div >
  );
}

export default SnackDetails;
