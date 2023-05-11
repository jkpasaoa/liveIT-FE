import { Link } from "react-router-dom";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/granola.png';

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
        <Col md={4} className="text-center text-md-end">
          <div className="d-flex justify-content-center justify-content-md-end">
            <div className="me-4">
              <Link to={gitHubTeamLinks.christinaCephus.github} className="text-white">
                Christina's Github
              </Link>
            </div>
            <div>
              <Link to={gitHubTeamLinks.jacquelinePasaoa.github} className="text-white">
                Jacqueline's Github
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col md={2} className="text-center">
          <Link to="#" className="text-white">
            Copyright
          </Link>
        </Col>
        <Col md={2} className="text-center">
          <Link to="#" className="text-white">
            Privacy Policy
          </Link>
        </Col>
        <Col md={2} className="text-center">
          <Link to="#" className="text-white">
            Sitemap
          </Link>
        </Col>
        <Col md={2} className="text-center">
          <Link to="/">
            <img src={logo} alt="Logo" height="80" />
          </Link>
        </Col>
        <Col md={2} className="text-center">
          <h2 className="mb-0">Email Us!</h2>
          <p className="mb-0">christinacephus@pursuit.org</p>
          <p className="mb-0">jacquelinepasaoa@pursuit.org</p>

        </Col>
        <Col md={2} className="d-flex justify-content-center justify-content-md-end">
          <Link to="#" className="text-white me-3">
            <i className="fab fa-facebook fa-lg"></i>
          </Link>
          <Link to="#" className="text-white me-3">
            <i className="fab fa-twitter fa-lg"></i>
          </Link>
          <Link to="#" className="text-white">
            <i className="fab fa-instagram fa-lg"></i>
          </Link>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <div className="d-flex justify-content-center">
            <form>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter email" />
                <button type="submit" className="btn btn-light">
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
