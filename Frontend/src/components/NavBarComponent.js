// Core functionality from React & Bootstrap
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav  } from 'react-bootstrap';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'

class NavBarComponent extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>ExpressRecept</Navbar.Brand>
        <Navbar.Toggle className="navbar-togg" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>My Profile</Nav.Link>
            <Nav.Link>Admin</Nav.Link>
            <Nav.Link>Superuser</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBarComponent;