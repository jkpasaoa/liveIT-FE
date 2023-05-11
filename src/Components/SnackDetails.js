// import { Link } from "react-router-dom";

// function SnackDetails() {

//   return (
//     <div>

//     </div>
//   );
// }

// export default SnackDetails;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

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

  return (
    <article>
      <h3>
        {snack.is_healthy ? <span>🥟</span> : null} {snack.name}
      </h3>
      <h5>
        <span>
          <a href={snack.url}>{snack.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {snack.url}
      </h5>
      <h6>{snack.calorie}</h6>
      {snack ? (
        <div>
          <p>Sugars: {snack.sugar}</p>
          <p>Fats: {snack.fat}</p>
        </div>
      ) : null}

      {/* import and render your reviews below */}
      {/* <Reviews snacksId={id} /> */}

      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/snacks`}>
            <button>🔙</button>
          </Link>
        </div>
        <div>
          <Link to={`/snacks/${id}/edit`}>
            <button>✍🏼</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>🗑️</button>
        </div>
      </div>
    </article>
  );
}

export default SnackDetails;