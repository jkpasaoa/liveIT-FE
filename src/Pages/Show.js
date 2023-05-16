import React from "react";
import { Container } from "react-bootstrap";
import SnackDetails from "../Components/SnackDetails";

function Show() {
  return (
    <Container className="Show text-center">
      <h2>Learn More</h2>
      <SnackDetails />
    </Container>
  );
}

export default Show;
