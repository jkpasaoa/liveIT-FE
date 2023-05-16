import React from "react";
import { Container } from "react-bootstrap";
import NewSnack from "../Components/NewSnack";

function New() {
  return (
    <Container className="text-center" style={{ paddingTop: "50px" }}>
      <h2>New Snacks to Eat</h2>
      <NewSnack />
    </Container>
  );
}

export default New;
