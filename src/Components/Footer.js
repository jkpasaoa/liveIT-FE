import { Link } from "react-router-dom";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/granola.png";
import pursuitLogo from "../assets/pursuit.png";
import gifcat from "../assets/gitcat.gif";

const Footer = () => {
  
  const gitHubTeamLinks = {
    christinaCephus: {
      github: "https://github.com/theCephusHasLanded",
    },
    jacquelinePasaoa: {
      github: "https://github.com/jkpasaoa",
    },
  };

  return (
    <Container fluid className="bg-success py-3 foo">
      <Row className="justify-content-center">
        <Col md={4} className="text-center text-md-start">
          <h4 className="mb-0">Developers:</h4>
        </Col>
        <Col md={2} className="text-center">
          <img src={gifcat} alt="Gifcat" height="100" />
        </Col>
        <Col md={4} className="text-center text-md-end">
          <div className="d-flex justify-content-center justify-content-md-end">
            <div className="me-4">
            <Link
                to={gitHubTeamLinks.christinaCephus.github}
                className="text-white"
                style={{ fontFamily: "Funk Gibson" }}
              >
                Christina's Github
              </Link>
            </div>
            <div>
              <Link
                to={gitHubTeamLinks.jacquelinePasaoa.github}
                className="text-white"
                style={{ fontFamily: "Funk Gibson" }}
              >
                Jacqueline's Github
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col md={2} className="text-center">
            <h2>Copyright 2023</h2>
            <br/>
        </Col>
        <Col md={2} className="text-center">
          <Link to="https://www.pursuit.org/" className="text-white">
            This App Was Built in Pursuit
          </Link>
          <br />
          <img src={pursuitLogo} alt="Pursuit Logo" height="40" />
        </Col>
       <br/>
       <br/>
       <br/>
       <br/>
        <Col md={2} className="text-center">
          <Link to="/">
            <img src={logo} alt="Logo" height="80" />
          </Link>
        </Col>
        <Col
          md={2}
          className="d-flex justify-content-center justify-content-md-end"
        >
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <div className="d-flex justify-content-center">
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email
"
                />
                <button
                  type="submit
"
                  className="btn btn-light"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
