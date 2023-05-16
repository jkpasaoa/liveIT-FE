import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../assets/snack.png";
import ThemeContext from "./ThemeContext";

function NavBar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const themeMode = darkMode ? "dark" : "light";

  return (
    <header>
      <Navbar bg={themeMode} expand="lg" style={{ fontFamily: "Funk Gibson" }}>
        <div className="logo">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" height="40" />
            Live It
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="mr-2">
              <Button
                variant={themeMode === "light" ? "success" : "dark"}
                style={{ backgroundColor: themeMode === "light" ? "#4CAF50" : "#333" }}
              >
                Home
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mr-2">
              <Button
                variant={themeMode === "light" ? "success" : "dark"}
                style={{ backgroundColor: themeMode === "light" ? "#8BC34A" : "#333" }}
              >
                About
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/snacks" className="mr-2">
              <Button
                variant={themeMode === "light" ? "success" : "dark"}
                style={{ backgroundColor: themeMode === "light" ? "#CDDC39" : "#333" }}
              >
                Snacks
              </Button>
            </Nav.Link>
            <Nav.Link
              href="https://github.com/jkpasaoa/liveIT-FE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={themeMode === "light" ? "success" : "dark"}
                style={{ backgroundColor: themeMode === "light" ? "#FFEB3B" : "#333" }}
              >
                FE Repo
              </Button>
            </Nav.Link>
            <Nav.Link
              href="https://github.com/theCephusHasLanded/liveIT-BE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={themeMode === "light" ? "success" : "dark"}
                style={{ backgroundColor: themeMode === "light" ? "#FFC107" : "#333" }}
              >
                BE Repo
              </Button>
            </Nav.Link>
            <div className="ml-2">
              <Nav.Link as={Link} to="/snacks/new">
                <Button
                  variant={themeMode === "light" ? "success" : "dark"}
                  style={{ backgroundColor: themeMode === "light" ? "#CDDC39" : "#333" }}
                >
                  Add New Snack
                </Button>
              </Nav.Link>
              <div className="ml-2">
                <Button
                  variant={themeMode === "light" ? "outline-secondary" : "outline-light"}
                  onClick={toggleDarkMode}
                >
                  {themeMode === "light" ? "Dark Mode" : "Light Mode"}
                </Button>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NavBar;