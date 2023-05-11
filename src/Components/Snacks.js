import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";
import { Table } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => setSnacks(response.data))
      .catch((error) => console.warn("catch", error));
  }, []);

  const tableStyle = {
    background: "#E7F0C3",
    border: "none",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px #BFBFBF",
  };

  const tableHeaderStyle = {
    background: "#77BE5E",
    color: "white",
  };

  return (
    <div className="Snacks d-flex justify-content-center align-items-center">
      <section>
        <Table style={tableStyle} responsive>
          <thead>
            <tr>
              <th></th>
              <th style={tableHeaderStyle}>Take Me to the Snacks!</th>
              <th style={tableHeaderStyle}>See this Snack!</th>
            </tr>
          </thead>
          <tbody>
            {snacks.map((snack) => {
              return <Snack key={snack.id} snack={snack} />;
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default Snacks;
