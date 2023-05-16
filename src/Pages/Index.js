import React from "react";
import { Container } from "react-bootstrap";
import Snacks from "../Components/Snacks";

function Index() {
  return (
    <Container className="Index text-center">
      <h2>We Have The Snacks!</h2>
      <Snacks />
    </Container>
  );
}

export default Index;
