import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../assets/snack.png';

function NavBar() {
  return (
    <header>
      <Navbar bg="light" expand="lg" style={{ fontFamily: 'Funk Gibson' }}>
        <div className="logo">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" height="40" />
             Live It
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="mr-2">
              <Button variant="success" style={{ backgroundColor: '#4CAF50' }}>Home</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mr-2">
              <Button variant="success" style={{ backgroundColor: '#8BC34A' }}>About</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/snacks" className="mr-2">
              <Button variant="success" style={{ backgroundColor: '#CDDC39' }}>Snacks</Button>
            </Nav.Link>
            <Nav.Link href="https://github.com/jkpasaoa/liveIT-FE" target="_blank" rel="noopener noreferrer" className="mr-2">
              <Button variant="success" style={{ backgroundColor: '#FFEB3B' }}>FE Repo</Button>
            </Nav.Link>
            <Nav.Link href="https://github.com/theCephusHasLanded/liveIT-BE" target="_blank" rel="noopener noreferrer">
              <Button variant="success" style={{ backgroundColor: '#FFC107' }}>BE Repo</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NavBar;
