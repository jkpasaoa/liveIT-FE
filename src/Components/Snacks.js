import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => { 
    axios.get(`${API}/snacks`)
    .then((response) => setSnacks(response.data))
    .catch((error) => console.warn("catch", error));
  }, []);

  return (
    <div className="Snacks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take Me to the Snacks!</th>
              <th>See this Snack!</th>
            </tr>
          </thead>
          <tbody>
            {snacks.map((snack) => {
              return <Snack key={snack.id} snack={snack} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Snacks;